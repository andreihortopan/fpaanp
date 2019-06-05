import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from "./graphmenu";
import { dataArray } from "./graphmenu.js";

const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING;
const diffHeight = 2 * MENU_MARGIN + 2 * MENU_PADDING;

const dataColumns = [
  {
    Header: "ONG",
    accessor: "ong"
  },
  {
    Header: "Regiune",
    accessor: "region"
  },
  {
    Header: "Județ",
    accessor: "county" // String-based value accessors!
  },
  {
    Header: "Sumă fonduri (RON)",
    accessor: "sum",
    sortMethod: (a, b) => {
      return parseInt(a, 10) > parseInt(b, 10) ? 1 : -1;
    }
  },
  {
    Header: "Finanțator",
    accessor: "funder"
  },
  {
    Header: "Nivel",
    accessor: "level"
  },
  {
    Header: "Domeniu",
    accessor: "domain"
  },
  {
    Header: "An",
    accessor: "year"
  },
  {
    Header: "Contact",
    accessor: "contact",
    Cell: row => (
      <a
        style={{ color: "#008ECE" }}
        href={row.value}
        target="_blank"
        rel="noopener noreferrer"
      >
        {row.value}
      </a>
    )
  }
];

export class TableView extends Component {
  constructor(props) {
    super(props);

    this.containerDiv = React.createRef();

    this.state = {
      nrOfLines: 0
    };
  }

  calculateNrOfLines() {
    console.log(this.containerDiv.current.clientHeight);
    return Math.floor((this.containerDiv.current.clientHeight - 125) / 32);
  }

  handleResize = () => {
    this.setState({
      nrOfLines: this.calculateNrOfLines()
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const tableData = this.props.data;

    return (
      <div
        id="table"
        ref={this.containerDiv}
        style={{
          flexGrow: 1,
          marginLeft: "8px",
          ...menuLook,
          maxHeight: "100%",
          overflowX: "hidden",
          overflowY: "scroll",
          paddingTop: MENU_PADDING,
          paddingBottom: MENU_PADDING
        }}
      >
        <ReactTable
          key={this.state.nrOfLines}
          data={tableData}
          columns={dataColumns}
          pageSize={this.state.nrOfLines}
          showPageSizeOptions={false}
          className="-striped -highlight"
          previousText="Înapoi"
          nextText="Înainte"
          loadingText="Încărcare..."
          noDataText="Nu există date conform selecției"
          pageText="Pagina"
          ofText="din"
          rowsText="rânduri"
        />
      </div>
    );
  }
}

export default TableView;
