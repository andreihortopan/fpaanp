import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { RomaniaMap } from './romaniaMapRSM'
import { BarChartView } from './barChartView'
import { TableView } from './tableView'
import { GraphMenu } from './graphmenu'
import {
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

	console.log(countyDataArray)
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
				data: countyDataArray,
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
