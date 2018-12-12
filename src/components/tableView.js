import React, { Component } from "react";
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { dataArray } from './graphmenu.js';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: 20,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + 3*MENU_MARGIN + 4*MENU_PADDING;
const diffHeight = 2*MENU_MARGIN + 2*MENU_PADDING;

const dataColumns = [
   {
    Header: 'Regiune',
    accessor: 'region'
  }, {
    Header: 'Județ',
    accessor: 'county' // String-based value accessors!
  }, {
    Header: 'Sumă fonduri',
    accessor: 'sum',
  }, {
    Header: 'Finanțator',
    accessor: 'funder'
  },{
    Header: 'Nivel',
    accessor: 'level'
  }, {
    Header: 'Domeniu',
    accessor: 'domain',
  }, {
    Header: 'An',
    accessor: 'year'
  }, {
    Header: 'ONG',
    accessor: 'ong'
  }, {
    Header: 'Contact',
    accessor: 'contact'
}]

export function refreshTable(newData) {
    this.setState({
        displayData: newData,

    });
    this.handleResize()
}

export class TableView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayData: dataArray,
            width: window.innerWidth - 380,
            height: window.innerHeight - 80,
            nrOfLines: this.calculateNrOfLines(),
        }
        setTimeout(() => console.log(this.state), 1000)
        refreshTable = refreshTable.bind(this);
    }

    calculateNrOfLines() {
        return Math.floor((window.innerHeight - 2*MENU_MARGIN - 2*MENU_PADDING)/40);
    }

    handleResize = e => {
        this.setState({
            width: window.innerWidth - 380,
            height: window.innerHeight - 80,
            nrOfLines: this.calculateNrOfLines(),
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        return(
            <div style={{
                width: this.state.width,
                 height: this.state.height,
                 ...pageStyle,
                 ...menuLook,
                 overflow: "hidden",
                 paddingTop: 20,
                 paddingBottom: 20,
             }}>
                <ReactTable
                    data={this.state.displayData}
                    columns={dataColumns}
                    pageSize={this.state.nrOfLines}
                    showPageSizeOptions={false}
                    className="-striped -highlight"
                />
            </div>
        )
    }
}

export default TableView;