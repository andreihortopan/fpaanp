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
	data
} from '../docs/data'

const canvasStyle = {
	display: 'flex',
	padding: 0,
	margin: 0
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

		computeCountyDataArray(data)

		this.state = {
			dataArray: data,
		}

		refreshData = refreshData.bind(this)
	}

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

		return (
			<div style={{ canvasStyle }}>
				<GraphMenu tip={this.props.match.params.tip} data={data} filteredData={this.state.dataArray} />
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
		)
	}
}

export default Canvas
