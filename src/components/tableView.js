import React, { Component } from 'react'
import { MENU_MARGIN, menuLook } from './graphmenu'
import { AutoSizer, Column, Table, SortDirection } from 'react-virtualized'
import '../table.css'
import 'react-virtualized/styles.css'

const dataColumns = [
	{
		label: 'ONG',
		dataKey: 'ong',
		width: 100,
		flexGrow: 2
	},
	{
		label: 'Regiune',
		dataKey: 'region',
		width: 100
	},
	{
		label: 'Județ',
		dataKey: 'county',
		width: 100
	},
	{
		label: 'Sumă (RON)',
		dataKey: 'sum',
		width: 110
	},
	{
		label: 'Finanțator',
		dataKey: 'funder',
		width: 100
	},
	{
		label: 'Nivel',
		dataKey: 'level',
		width: 70
	},
	{
		label: 'Domeniu',
		dataKey: 'domain',
		width: 120
	},
	{
		label: 'An',
		dataKey: 'year',
		width: 50
	},
	{
		label: 'Contact',
		dataKey: 'contact',
		width: 100,
		flexGrow: 1
	}
]

export class TableView extends Component {
	constructor(props) {
		super(props)

		this.state = {
			tableData: props.data
		}
	}



	rowClassName = ({ index }) => {
		if (index < 0) {
			return 'headerRow';
		} else {
			return index % 2 === 0 ? 'evenRow' : 'oddRow';
		}
	}

	noRowsRenderer = () => {
		return <div className='noRows'>Nu există date pentru selecția curentă.</div>;
	}

	componentWillUpdate(nextProps, nextState) {
		const {
			sortBy: prevSortBy,
			sortDirection: prevSortDirection
		} = this.state

		if (
			nextState.sortBy !== prevSortBy ||
			nextState.sortDirection !== prevSortDirection
		) {
			const { sortBy, sortDirection } = nextState

			let { data } = this.props

			if (sortBy) {
				data = data.sort(function (a, b) {
					if (sortBy === 'sum')
						return a[sortBy] - b[sortBy]
					if (a[sortBy] > b[sortBy] || a[sortBy] === b[sortBy])
						return 1;
					else
						return -1;
				})
				if (sortDirection === SortDirection.DESC) {
					data = data.reverse()
				}
			}
		}
	}

	sort = ({ sortBy, sortDirection }) => {
		const {
			sortBy: prevSortBy,
			sortDirection: prevSortDirection
		} = this.state

		// If list was sorted DESC by this column.
		// Rather than switch to ASC, return to "natural" order.
		if (prevSortDirection === SortDirection.DESC) {
			sortBy = null
			sortDirection = null
		}

		this.setState({ sortBy, sortDirection })
	}

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
					marginRight: MENU_MARGIN,
					overflow: "hidden",
					position: 'relative',
					display: 'flex',
					flexFlow: 'column',
					justifyContent: 'space-between'
				}}>
				<div style={{
					width: '100%',
					height: '100%',
					//marginBottom: 20,
					marginTop: MENU_MARGIN,
					marginBottom: 2 * MENU_MARGIN,
				}}>
					<AutoSizer>
						{({ height, width }) => (
							<Table
								sort={this.sort}
								sortBy={this.state.sortBy}
								sortDirection={this.state.sortDirection}
								className="Table"
								width={width}
								height={height}
								padding={0}
								headerHeight={20}
								headerClassName='headerColumn'
								rowHeight={40}
								rowCount={tableData.length}
								rowGetter={({ index }) => tableData[index]}
								rowClassName={this.rowClassName}
								noRowsRenderer={this.noRowsRenderer}
							>
								{dataColumns.map((item) => {
									if (item.dataKey === 'contact')
										return (
											<Column
												label={item.label}
												dataKey={item.dataKey}
												width={item.width}
												flexGrow={item.flexGrow}
												cellRenderer={({ cellData }) =>
													<a
														style={{ color: '#008ECE' }}
														target='_blank'
														rel='noopener noreferrer'
														href={cellData}
													>{cellData}</a>}
											/>
										)
									else return (
										<Column
											label={item.label}
											dataKey={item.dataKey}
											width={item.width}
											flexGrow={item.flexGrow}
										/>
									)
								})}
							</Table>
						)}
					</AutoSizer>
				</div>
			</div>
		)
	}
}

export default TableView
