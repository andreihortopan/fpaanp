import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PDF from '../media/dummy.pdf'
import {
	counties,
	legislations,
	funders,
	levels,
	domains,
	years,
	sums,
} from '../docs/data'
import { refreshData } from './canvas.js'
import Select, { components } from 'react-select'
import { CSVLink } from 'react-csv'
import '../canvasjs.react'
import domtoimage from 'dom-to-image'
import ReactExport from 'react-data-export'
import * as jdPDF from 'jspdf'
import 'jspdf-autotable'
import normalize, { normalizeDiacritics } from 'normalize-text'

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// Size constants
export const MENU_MARGIN = 20
export const MENU_WIDTH = 240
export const MENU_PADDING = 20

// Menu styling with regards to look and interior styling (eg. padding)
export const menuLook = {
	backgroundColor: '#FFFFFF',
	borderRadius: '2px',
	boxShadow: '1px 1px 4px 1px #bababa',
	padding: MENU_PADDING,
	paddingBottom: MENU_PADDING / 2,
	paddingTop: MENU_PADDING / 2
}

// Menu styling with regards to exterior styling (eg. margin)
export const menuStyle = {
	position: 'fixed',
	zIndex: 100,
	width: MENU_WIDTH,
	height: window.innerHeight - 2 * MENU_MARGIN - 2 * MENU_PADDING,
	marginTop: MENU_MARGIN,
	marginLeft: MENU_MARGIN,
	marginBottom: MENU_MARGIN
}

const logoStyle = {
	maxHeight: 30,
	paddingBottom: 0
}

const graphStyle = {
	maxWidth: 30,
	maxHeight: 30,
	paddingBottom: 0
}

const lineStyle = {
	display: 'block',
	height: 1,
	border: 0,
	margin: 0,
	borderTop: '1px solid #bcbcbc',
	padding: 0,
	clear: 'both'
}

const selectStyle = {
	paddingLeft: 10,
	paddingRight: 10,
	marginBottom: 10
}

const controlStyles = {
	paddingBottom: 10
}

const ControlComponent = props => (
	<div style={controlStyles}>
		<components.Control {...props} />
	</div>
)

const selections = [
	'1｜Județ',
	'2｜Legislație',
	'3｜Finanțator',
	'4｜Nivel',
	'5｜Domeniu',
	'6｜An',
	'7｜Sumă',
]

const headers = [
	{ label: "ID", key: "id" },
	{ label: "Regiune", key: "region" },
	{ label: "Județ", key: "county" },
	{ label: "Legislație", key: "legislation" },
	{ label: "Finanțator", key: "funder" },
	{ label: "Nivel", key: "level" },
	{ label: "Domeniu", key: "domain" },
	{ label: "An", key: "year" },
	{ label: "ONG", key: "ong" },
	{ label: "Sumă", key: "sum" },
	{ label: "Contact", key: "contact" },
]

export class GraphMenu extends Component {
	constructor(props) {
		super(props)

		this.state = {
			height: window.innerHeight - 2 * MENU_MARGIN - MENU_PADDING,
			selectedCounty: [],
			selectedLegislation: [],
			selectedFunder: [],
			selectedLevel: [],
			selectedDomain: [],
			selectedYear: [],
			selectedSum: []
		}

		this.filterData = this.filterData.bind(this)
		this.isCounty = this.isCounty.bind(this)
		this.isLegislation = this.isLegislation.bind(this)
		this.isFunder = this.isFunder.bind(this)
		this.isLevel = this.isLevel.bind(this)
		this.isDomain = this.isDomain.bind(this)
		this.isYear = this.isYear.bind(this)
		this.isSum = this.isSum.bind(this)
		this.downloadPDF = this.downloadPDF.bind(this)

		//this.computeCountyDataArray()
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}

	resetThenSet = (id, key) => {
		let temp = JSON.parse(JSON.stringify(this.state[key]))
		temp.forEach(item => (item.selected = false))
		temp[id].selected = true
		this.setState({
			[key]: temp
		})
	}

	setIcon(id) {
		switch (id) {
			case 1:
				if (this.props.tip === 'harta') return '/media/map-selected.png'
				return '/media/map.png'
			case 2:
				if (this.props.tip === 'grafic') return '/media/barchart-selected.png'
				return '/media/barchart.png'
			case 3:
				if (this.props.tip === 'tabel') return '/media/excel-selected.png'
				return '/media/excel.png'
			default:
				return null
		}
	}

	isCounty(ngo) {
		if (this.state.selectedCounty.length === 0) {
			return ngo
		} else {
			return this.state.selectedCounty
				.map(a => a.value)
				.includes(ngo.county)
		}
	}

	isLegislation(ngo) {
		if (this.state.selectedLegislation.length === 0) {
			return ngo
		} else {
			return this.state.selectedLegislation
				.map(a => a.value)
				.includes(ngo.legislation)
		}
	}

	isFunder(ngo) {
		if (this.state.selectedFunder.length === 0) {
			return ngo
		} else {
			return this.state.selectedFunder
				.map(a => a.value)
				.includes(ngo.funder)
		}
	}

	isLevel(ngo) {
		if (this.state.selectedLevel.length === 0) {
			return ngo
		} else {
			return this.state.selectedLevel
				.map(a => a.value)
				.includes(ngo.level)
		}
	}

	isDomain(ngo) {
		if (this.state.selectedDomain.length === 0) {
			return ngo
		} else {
			return this.state.selectedDomain
				.map(a => a.value)
				.includes(ngo.domain)
		}
	}

	isYear(ngo) {
		if (this.state.selectedYear.length === 0) {
			return ngo
		} else {
			return this.state.selectedYear
				.map(a => a.value)
				.includes(ngo.year)
		}
	}

	isSum(ngo) {
		// TODO Implement sum logic - it doesn't work as of now.
		if (this.state.selectedLegislation === 0) {
			return ngo
		} else {
			return this.state.selectedSum.filter(
				a => a.min <= ngo.sum && a.max >= ngo.sum
			)
		}
	}

	filterData() {
		var dataArray = this.props.data.filter(this.isCounty)
		dataArray = dataArray.filter(this.isLegislation)
		dataArray = dataArray.filter(this.isFunder)
		dataArray = dataArray.filter(this.isLevel)
		dataArray = dataArray.filter(this.isDomain)
		dataArray = dataArray.filter(this.isYear)
		dataArray = dataArray.filter(this.isSum)

		refreshData(dataArray);
	}

	handleChange = data => {
		this.setState(data, () => {
			this.filterData()
		})
	}

	handleResize = e => {
		this.setState(() => {
			return {
				height: window.innerHeight - 2 * MENU_MARGIN - MENU_PADDING
			}
		})
	}

	handleDownload = e => {
		if (this.props.tip === 'harta') {
			domtoimage.toJpeg(document
				.getElementById('map'),
				{
					quality: 0.9,
					bgcolor: '#ffffff',
					height: window.innerHeight,
					width: window.innerWidth
				})
				.then(function (dataUrl) {
					var link = document.createElement('a');
					link.download = 'harta-fonduri.jpeg';
					link.href = dataUrl;
					link.click();
				});
		}
		else {
			domtoimage.toJpeg(document
				.getElementById('barChart'),
				{
					quality: 0.9,
					bgcolor: '#ffffff',
					height: window.innerHeight,
					width: window.innerWidth
				})
				.then(function (dataUrl) {
					var link = document.createElement('a');
					link.download = 'grafic-fonduri.jpeg';
					link.href = dataUrl;
					link.click();
				});
		}
	}

	downloadPDF() {
		const columns = [
			{ title: 'ONG', dataKey: 'ong' },
			{ title: 'Regiune', dataKey: 'region' },
			{ title: 'Judet', dataKey: 'county' },
			{ title: 'Suma (RON)', dataKey: 'sum' },
			{ title: 'Finantator', dataKey: 'funder' },
			{ title: 'Nivel', dataKey: 'level' },
			{ title: 'Domeniu', dataKey: 'domain' },
			{ title: 'An', dataKey: 'year' },
		]

		let stringified = JSON.stringify(this.props.filteredData)
		stringified = normalizeDiacritics(stringified)
		let newJson = JSON.parse(stringified)

		var doc = new jdPDF('p', 'pt')
		doc.autoTable(columns, newJson, {
			theme: 'striped',
			styles: { overflow: 'linebreak' },
			margin: { top: 60 },
			columnStyles: { text: { columnWidth: 'wrap' } },
			addPageContent: function (data) {
				doc.text("Lista ONG-uri", 40, 30);
			}
		})

		doc.save('date-fonduri.pdf')
	}

	render() {
		const {
			selectedCounty,
			selectedLegislation,
			selectedFunder,
			selectedLevel,
			selectedDomain,
			selectedYear,
			selectedSum
		} = this.state

		const selectArray = [
			{
				value: selectedCounty,
				placeholder: selections[0],
				onChange: (selectedCounty) => this.handleChange({ selectedCounty }),
				options: counties,
			},
			{
				value: selectedLegislation,
				placeholder: selections[1],
				onChange: (selectedLegislation) => this.handleChange({ selectedLegislation }),
				options: legislations,
			},
			{
				value: selectedFunder,
				placeholder: selections[2],
				onChange: (selectedFunder) => this.handleChange({ selectedFunder }),
				options: funders,
			},
			{
				value: selectedLevel,
				placeholder: selections[3],
				onChange: (selectedLevel) => this.handleChange({ selectedLevel }),
				options: levels,
			},
			{
				value: selectedDomain,
				placeholder: selections[4],
				onChange: (selectedDomain) => this.handleChange({ selectedDomain }),
				options: domains,
			},
			{
				value: selectedYear,
				placeholder: selections[5],
				onChange: (selectedYear) => this.handleChange({ selectedYear }),
				options: years,
			},
			{
				value: selectedSum,
				placeholder: selections[6],
				onChange: (selectedSum) => this.handleChange({ selectedSum }),
				options: sums,
			},
		]

		return (
			<div
				style={{
					position: 'fixed',
					zIndex: 100,
					height: this.state.height,
					width: MENU_WIDTH,
					marginTop: MENU_MARGIN,
					marginLeft: MENU_MARGIN,
					marginBottom: MENU_MARGIN,
					backgroundColor: '#FFFFFF',
					borderRadius: '2px',
					boxShadow: '1px 1px 4px 1px #bababa',
					padding: MENU_PADDING,
					paddingBottom: MENU_PADDING / 2,
					paddingTop: MENU_PADDING / 2
				}}
			>
				<div style={{ paddingLeft: 10 }}>
					<div style={{ float: 'left', marginLeft: 25 }}>
						<p>Meniu</p>
					</div>
					<div style={{ float: 'right' }}>
						<a href='https://clnr.ro/' target='_blank' onClick={e => { }}>
							<img
								onMouseOver={e =>
									(e.currentTarget.src = '/media/clnr_logo.png')
								}
								onMouseLeave={e =>
									(e.currentTarget.src = '/media/clnr_logo_bw.png')
								}
								alt='CLNR'
								src='/media/clnr_logo_bw.png'
								data-tip={'Accesează site-ul CLNR'}
								style={{
									...logoStyle,
									marginTop: MENU_MARGIN / 2,
									marginRight: 5
								}}
							/>
						</a>
					</div>
				</div>
				<hr style={{ ...lineStyle }} />
				<div style={{ paddingLeft: 10, clear: 'both' }}>
					<div style={{ float: 'left' }}>
						<p>Date și resurse</p>
					</div>
					{this.state.selected != 0 && (
						<div
							style={{
								float: 'right'
							}}
						>
							{(this.props.tip === 'harta' || this.props.tip === 'grafic') &&
								<a
									href='#'
									onClick={this.handleDownload}
								>
									<img
										onMouseOver={e =>
											(e.currentTarget.src = '/media/download-selected.png')
										}
										onMouseLeave={e =>
											(e.currentTarget.src = '/media/download.png')
										}
										alt='Descarc&#259;'
										src='/media/download.png'
										data-tip={
											this.props.tip === 'harta'
												? 'Descarcă hartă'
												: 'Descarcă grafic'
										}
										style={{
											...graphStyle,
											marginTop: MENU_MARGIN / 2,
											marginRight: 5
										}}
									/>
								</a>}

							{this.props.tip === 'tabel' &&
								<ExcelFile element={
									<a href='#'>
										<img
											onMouseOver={e =>
												(e.currentTarget.src = '/media/download-selected.png')
											}
											onMouseLeave={e =>
												(e.currentTarget.src = '/media/download.png')
											}
											alt='Descarc&#259;'
											src='/media/download.png'
											data-tip={'Descarcă tabel'}
											style={{
												...graphStyle,
												marginTop: MENU_MARGIN / 2,
												marginRight: 5
											}}
										/>
									</a>
								}>
									<ExcelSheet data={this.props.filteredData} name="ONG-uri">
										<ExcelColumn label="ONG" value="ong" />
										<ExcelColumn label="Regiune" value="region" />
										<ExcelColumn label="Județ" value="county" />
										<ExcelColumn label="Sumă fonduri (RON)" value="sum" />
										<ExcelColumn label="Finanțator" value="funder" />
										<ExcelColumn label="Nivel" value="level" />
										<ExcelColumn label="Domeniu" value="domain" />
										<ExcelColumn label="An" value="year" />
										<ExcelColumn label="Contact" value="contact" />
									</ExcelSheet>
								</ExcelFile>
							}
						</div>
					)}
				</div>

				<div
					style={{
						clear: 'both',
						height: this.state.height - 170,
						overflowY: 'auto'
					}}
				>
					{
						selectArray.map(({ value, placeholder, onChange, options }) => (
							<Select
								value={value}
								menuPosition={'absolute'}
								placeholder={placeholder}
								onChange={onChange}
								options={options}
								isMulti
								closeMenuOnSelect={false}
								isSearchable
								components={{ Control: ControlComponent }}
							/>
						))
					}
				</div>
				<hr style={{ ...lineStyle }} />
				<div>
					<table
						style={{
							position: 'fixed',
							bottom: 30,
							width: MENU_WIDTH,
							height: 50,
							borderCollapse: 'collapse'
						}}
					>
						<tbody>
							<tr bordertop='0'>
								<td align='center'>
									<Link
										data-tip='Afișează hartă'
										to='/date-si-resurse/harta'
									>
										<img
											onMouseOver={e =>
												(e.currentTarget.src = '/media/map-selected.png')
											}
											onMouseLeave={e => {
												e.currentTarget.src = this.setIcon(1)
											}}
											alt='Hart&#259;'
											src={this.setIcon(1)}
											style={{
												...graphStyle
											}}
										/>
									</Link>
								</td>
								<td align='center'>
									<Link
										data-tip='Afișează grafic bară'
										to='/date-si-resurse/grafic'
									>
										<img
											onMouseOver={e =>
												(e.currentTarget.src = '/media/barchart-selected.png')
											}
											onMouseLeave={e => {
												e.currentTarget.src = this.setIcon(2)
											}}
											alt='Grafic bar&#259;'
											src={this.setIcon(2)}
											style={{
												...graphStyle
											}}
										/>
									</Link>
								</td>
								<td align='center'>
									<Link
										data-tip='Afișează tabel'
										to='/date-si-resurse/tabel'
									>
										<img
											onMouseOver={e =>
												(e.currentTarget.src = '/media/excel-selected.png')
											}
											onMouseLeave={e => {
												e.currentTarget.src = this.setIcon(3)
											}}
											alt='Tabel'
											src={this.setIcon(3)}
											style={{
												...graphStyle
											}}
										/>
									</Link>
								</td>
								<td align='center'>
									<a data-tip='Descarcă PDF' href='#'>
										<img
											onClick={this.downloadPDF}
											onMouseOver={e =>
												(e.currentTarget.src = '/media/pdf-selected.png')
											}
											onMouseLeave={e =>
												(e.currentTarget.src = '/media/pdf.png')
											}
											alt='Descarc&#259; PDF'
											src='/media/pdf.png'
											style={{
												...graphStyle
											}}
										/>
									</a>
								</td>
								<td align='center'>
									<CSVLink
										headers={headers}
										data-tip="Descarcă CSV"
										data={this.props.filteredData}
										filename={'date-fonduri.csv'}
									>
										<img
											onMouseOver={e =>
												(e.currentTarget.src = '/media/csv-selected.png')
											}
											onMouseLeave={e =>
												(e.currentTarget.src = '/media/csv.png')
											}
											alt='Descarc&#259; CSV'
											src='/media/csv.png'
											style={{
												...graphStyle
											}}
										/>
									</CSVLink>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default GraphMenu
