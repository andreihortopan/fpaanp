import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import { dataArray } from './graphmenu.js'

const pageStyle = {
	position: 'absolute',
	right: 0,
	margin: 20,
	overflowY: 'scroll',
	overflowX: 'hidden'
}

const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING
const diffHeight = 2 * MENU_MARGIN + 2 * MENU_PADDING

const dataColumns = [
	{
		Header: 'ONG',
		accessor: 'ong'
	},
	{
		Header: 'Regiune',
		accessor: 'region'
	},
	{
		Header: 'Județ',
		accessor: 'county' // String-based value accessors!
	},
	{
		Header: 'Sumă fonduri (RON)',
		accessor: 'sum',
		sortMethod: (a, b) => {
			return parseInt(a, 10) > parseInt(b, 10) ? 1 : -1
		}
	},
	{
		Header: 'Finanțator',
		accessor: 'funder'
	},
	{
		Header: 'Nivel',
		accessor: 'level'
	},
	{
		Header: 'Domeniu',
		accessor: 'domain'
	},
	{
		Header: 'An',
		accessor: 'year'
	},
	{
		Header: 'Contact',
		accessor: 'contact',
		Cell: row => (
			<a
				style={{ color: '#008ECE' }}
				href={row.value}
				target='_blank'
				rel='noopener noreferrer'
			>
				{row.value}
			</a>
		)
	}
]

export class TableView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			width: window.innerWidth - diffWidth,
			height: window.innerHeight - diffHeight,
			nrOfLines: this.calculateNrOfLines()
		}
	}

	calculateNrOfLines() {
		return Math.floor(
			(window.innerHeight - 2 * MENU_MARGIN - 2 * MENU_PADDING) / 40
		)
	}

	handleResize = e => {
		this.setState({
			width: window.innerWidth - diffWidth,
			height: window.innerHeight - diffHeight,
			nrOfLines: this.calculateNrOfLines()
		})
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize)
	}

	render() {
		const tableData = this.props.data

		return (
			<div
				id='table'
				style={{
					width: this.state.width,
					height: this.state.height,
					...pageStyle,
					...menuLook,
					overflow: 'hidden',
					paddingTop: MENU_PADDING,
					paddingBottom: MENU_PADDING
				}}
			>
				<ReactTable
					data={tableData}
					columns={dataColumns}
					pageSize={this.state.nrOfLines}
					showPageSizeOptions={false}
					className='-striped -highlight'
					previousText='Înapoi'
					nextText='Înainte'
					loadingText='Încărcare...'
					noDataText='Nu există date conform selecției'
					pageText='Pagina'
					ofText='din'
					rowsText='rânduri'
				/>
			</div>
		)
	}
}

export default TableView
