import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'

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
	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		width: window.innerWidth - diffWidth,
	// 		height: window.innerHeight - diffHeight,
	// 		nrOfLines: this.calculateNrOfLines()
	// 	}
	// }

	// calculateNrOfLines() {
	// 	return Math.floor(
	// 		(window.innerHeight - 2 * MENU_MARGIN - 2 * MENU_PADDING) / 40
	// 	)
	// }

	// handleResize = e => {
	// 	this.setState({
	// 		width: window.innerWidth - diffWidth,
	// 		height: window.innerHeight - diffHeight,
	// 		nrOfLines: this.calculateNrOfLines()
	// 	})
	// }

	// componentDidMount() {
	// 	window.addEventListener('resize', this.handleResize)
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('resize', this.handleResize)
	// }

	render() {
		const tableData = this.props.data

		return (
			<div
				id='table'
				style={{
					width: '100%',
					height: '100%',
					...menuLook,
					paddingBottom: 0,
					paddingTop: 0,
					marginLeft: MENU_MARGIN,
					overflow: "hidden",
					position: 'relative',
				}}>
				<div style={{ marginTop: 20, marginBottom: 20 }}>
					<ReactTable
						style={{
							height: '100%'
						}}
						data={tableData}
						columns={dataColumns}
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
			</div>
		)
	}
}

export default TableView
