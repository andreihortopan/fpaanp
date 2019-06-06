import React, { Component } from 'react'
import {
	ComposableMap,
	ZoomableGroup,
	Geographies,
	Geography
} from 'react-simple-maps'
import { geoMercator } from 'd3-geo'
import ReactTooltip from 'react-tooltip'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH } from './graphmenu'
import { scaleLinear } from 'd3-scale'
import { MapLegend } from './mapLegend'
import Link from 'react-router-dom/Link'
import { selectCounty } from './graphmenu'
import '../legend.css'

const popScale = scaleLinear()
	// .domain([0, 10000, 20000, 50000, 100000, 500000, 1000000, 2000000, 5000000, 10000000, 20000000, 50000000])
	// .range(['#F1EEF6', '#BDC9E1', '#74A9CF', '#2B8CBE', '#045A8D', "#FFC281", "#FFB05B", "#FF921C", "#F58000", "#DD7300", "#A45500"])
	.domain([0, 10000000, 40000000])
	.range(["#FFFFFF", "#8c8c8c", "#4d4d4d"])


export class RomaniaMap extends Component {
	componentDidMount() {
		setTimeout(() => {
			ReactTooltip.rebuild()
		}, 100)
	}

	handleOnClick = (e) => {
		ReactTooltip.hide()
		let county = [
			{ value: e.properties.NAME_1, label: e.properties.NAME_1 },
		]
		selectCounty(county)
	}

	render() {
		const mapData = this.props.data

		return (
			<div
				id='map'
				style={{
					width: '100%',
					height: '100%',
					overflow: 'hidden',
					position: 'relative'
				}}
			>
				<div style={{
					position: 'absolute',
					left: 0,
					bottom: 0,
					textAlign: "left",
					marginBottom: 8,
					fontWeight: 'bold',
					fontSize: '90%',
					marginLeft: 20,
					marginBottom: -10,
				}}>
					<p>Sursa datelor: CLNR, www.finantari.clnr.ro
					<br />Preluarea datelor se poate face cu menționarea sursei.</p>
				</div>
				<MapLegend />
				<ComposableMap
					projectionConfig={{
						scale: 5000,
					}}
					style={{ width: '100%', height: '100%' }}
				>
					<ZoomableGroup center={[25, 46]} disablePanning>
						<Geographies geography='/romania-counties.json' disableOptimization>
							{(geographies, projection) =>
								geographies.map((geography, i) => {
									var countyData = mapData.find(function (
										county
									) {
										if (county != null) {
											return county.name == geography.properties.NAME_1
										}
									})
									return (
										<Link to='/date-si-resurse/tabel'>
											<Geography
												key={i}
												onClick={this.handleOnClick}
												data-tip={
													geography.properties.NAME_1 +
													'<br/>' +
													'Suma totală: ' +
													countyData.sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
													' RON' +
													'<br/>' +
													'Nr. ONG-uri: ' +
													countyData.ngoNum +
													'<br/>' +
													'Suma medie/ONG: ' +
													countyData.average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
													' RON'
												}
												geography={geography}
												projection={projection}
												style={{
													default: {
														fill: popScale(countyData.sum),
														// fill: "#FFFCEF",
														stroke: '#404040',
														strokeWidth: 0.5,
														outline: 'none'
													},
													hover: {
														fill: '#008ece',
														stroke: '#404040',
														strokeWidth: 0.5,
														outline: 'none'
													},
													pressed: {
														fill: '#006b9b',
														stroke: '#888888',
														strokeWidth: 0.5,
														outline: 'none'
													}
												}}
											/></Link>
									)
								})
							}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
				{
					window.innerWidth > 950 && <Link to='/despre'>
						<div style={{
							right: 0,
							top: 0,
							width: 210,
							height: 'auto',
							position: 'absolute'
						}}>
							<img
								alt='Logo'
								src='/media/fpaan_s.png'
								style={{
									paddingTop: MENU_PADDING / 2,
									maxWidth: 200,
								}}
							/>
						</div></Link>
				}
				{/* <ReactTooltip multiline /> */}
			</div >
		)
	}
}

export default RomaniaMap
