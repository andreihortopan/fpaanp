import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { RomaniaMap } from './romaniaMapRSM'
import { BarChartView } from './barChartView'
import { TableView } from './tableView'
import { GraphMenu } from './graphmenu'
import {
	barChartCountyDomainArray,
	barChartCountyYearArray,
	barChartCountyLegislationArray,
	countyDataArray,
} from '../docs/data'
import config from '../config'
import load from './spreadsheet'
import LoadingScreen from './loadingScreen';
import WhitePage from './whitePage';

const canvasStyle = {
	backgroundColor: 'blue',
	width: '100%',
	height: '100%',
	padding: 0,
	margin: 0,
}

const computeCountyDataArray = (dataArray) => {
	countyDataArray.forEach(currentCounty => {
		currentCounty.ngoNum = 0
		currentCounty.sum = 0
		currentCounty.average = 0
	})

	dataArray.forEach(ngo => {
		var currentCounty = countyDataArray.find(function (county) {
			if (county != null) {
				return county.name == ngo.county
			} else return null
		})
		currentCounty.sum += parseInt(ngo.sum)
		currentCounty.ngoNum++
	})

	countyDataArray.forEach(currentCounty => {
		if (currentCounty.ngoNum != 0)
			currentCounty.average = Math.round(currentCounty.sum / currentCounty.ngoNum)
	})
}

const computeBarChartData = (dataArray, countyDataArray) => {
	let countyNum = 0

	countyDataArray.forEach(county => {
		if (county.ngoNum != 0)
			countyNum++
	})

	if (countyNum === 1) {
		//Array of domains
		barChartCountyDomainArray.forEach(currentDomain => {
			currentDomain.ngoNum = 0
			currentDomain.sum = 0
		})

		dataArray.forEach(ngo => {
			var currentDomain = barChartCountyDomainArray.find(function (domain) {
				if (domain != null) {
					return domain.name == ngo.domain
				} else return null
			})
			if (currentDomain != null) {
				currentDomain.sum += parseInt(ngo.sum)
				currentDomain.ngoNum++
			}
		})

		//Array of years
		barChartCountyYearArray.forEach(currentYear => {
			currentYear.ngoNum = 0
			currentYear.sum = 0
		})

		dataArray.forEach(ngo => {
			var currentYear = barChartCountyYearArray.find(function (year) {
				if (year != null) {
					return year.name == ngo.year
				} else return null
			})
			if (currentYear != null) {
				currentYear.sum += parseInt(ngo.sum)
				currentYear.ngoNum++
			}
		})

		//Array of legislations
		barChartCountyLegislationArray.forEach(currentLegislation => {
			currentLegislation.ngoNum = 0
			currentLegislation.sum = 0
		})

		dataArray.forEach(ngo => {
			var currentLegislation = barChartCountyLegislationArray.find(function (legislation) {
				if (legislation != null) {
					return legislation.name == ngo.legislation
				} else return null
			})
			if (currentLegislation != null) {
				currentLegislation.sum += parseInt(ngo.sum)
				currentLegislation.ngoNum++
			}
		})

		return [barChartCountyDomainArray, barChartCountyYearArray, barChartCountyLegislationArray]
	}
	else return null
}

// Data on which we apply filters:
export function refreshData(newData) {
	this.setState({ dataArray: newData })
	computeCountyDataArray(newData)
}

export class Canvas extends Component {
	constructor(props) {
		super(props)

		this.state = {
			dataArray: [],
			fullData: [],
			error: null,
			loaded: 0,
		}
		window.gapi.load("client", this.initClient);

		refreshData = refreshData.bind(this)
	}

	onLoad = (data, error) => {
		if (data) {
			const dataArray = data.items;
			const fullData = data.items
			computeCountyDataArray(dataArray)
			this.setState({ dataArray, fullData, loaded: 1 });
		} else {
			this.setState({ error });
		}
	};

	initClient = () => {
		window.gapi.client
			.init({
				apiKey: config.apiKey,
				discoveryDocs: config.discoveryDocs
			})
			.then(() => {
				load(this.onLoad);
			});
	};

	render() {
		// All 3 display options for the data:
		const routes = [
			{
				path: '/date-si-resurse/harta',
				component: RomaniaMap,
				data: countyDataArray,
			},
			{
				path: '/date-si-resurse/grafic',
				component: BarChartView,
				data: [countyDataArray, computeBarChartData(this.state.dataArray, countyDataArray)],
			},
			{
				path: '/date-si-resurse/tabel',
				component: TableView,
				data: this.state.dataArray,
			},
		]
		if (this.state.loaded == 1) {
			return (
				<WhitePage type={0}>
					<div style={{
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
					}}>
						<div style={{
							margin: 20,
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							flex: '1 0',
							height: '0px',
						}}>
							<GraphMenu tip={this.props.match.params.tip} data={this.state.fullData} filteredData={this.state.dataArray} />
							<Switch>
								{
									routes.map(({ path, component: C, data }) => (
										<Route
											key={path}
											exact
											path={path}
											render={() => <C data={data} />}
										/>
									))
								}
								<Route render={() => <Redirect to='/date-si-resurse/harta' />} />
							</Switch>
						</div>
					</div>
				</WhitePage >

			)
		}
		else {
			return (
				<LoadingScreen />
			)
		}
	}
}

export default Canvas
