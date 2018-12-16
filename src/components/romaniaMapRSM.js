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


const pageStyle = {
	position: 'absolute',
	right: 0,
	overflowY: 'scroll',
	overflowX: 'hidden'
}

const popScale = scaleLinear()
	.domain([0, 2000000, 5000000, 10000000, 20000000, 50000000])
	.range(['#F1EEF6', '#BDC9E1', '#74A9CF', '#2B8CBE', '#045A8D'])
// .domain([0,10000000,40000000])
// .range(["#FFFFFF","#8c8c8c","#4d4d4d"])

const diffWidth = MENU_WIDTH + MENU_MARGIN + 2 * MENU_PADDING
const diffHeight = 0

export class RomaniaMap extends Component {
	constructor(props) {
		super(props)

		this.state = {
			windowWidth: window.innerWidth - diffWidth,
			windowHeight: window.innerHeight - diffHeight
		}

	}

	handleResize = e => {
		this.setState({
			windowWidth: window.innerWidth - diffWidth,
			windowHeight: window.innerHeight - diffHeight
		})
	}

	calculateScaleFactor = () => {
		const wh = this.state.windowHeight
		const ww = this.state.windowWidth
		let res = 0
		if (ww >= 1.5 * wh) {
			res = wh * 7.4
		} else {
			res = ww * 5.5
		}
		return res
	}

	componentDidMount() {
		setTimeout(() => {
			ReactTooltip.rebuild()
		}, 100)
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
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
					width: this.state.windowWidth,
					height: this.state.windowHeight,
					...pageStyle,
					overflow: 'hidden'
				}}
			>
				<MapLegend />
				<ComposableMap
					width={this.state.windowWidth}
					height={this.state.windowHeight}
					projectionConfig
					projection={(width, height, projectionConfig) => {
						return geoMercator()
							.center([12.5, 25.05])
							.translate([width / 2 /* + this.calculateOffset() */, height / 2])
							.scale(this.calculateScaleFactor())
					}}
					style={{ width: '100%', height: 'auto' }}
				>
					<ZoomableGroup center={[0, 0]} disablePanning>
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
				{window.innerWidth > 950 && <Link to='/despre'>
					<div style={{
						right: MENU_MARGIN,
						bottom: MENU_MARGIN,
						width: 200,
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
					</div></Link>}
				{/* <ReactTooltip multiline /> */}
			</div >
		)
	}
}

export default RomaniaMap
