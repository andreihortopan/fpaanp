import React, { Component } from "react";
import ReactTable from 'react-table';
import { menuLook } from './menu';
import { MENU_PADDING } from './menu';
import { MENU_WIDTH } from './menu';
import { MENU_MARGIN } from './menu';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + 3*MENU_MARGIN + 4*MENU_PADDING;
const diffHeight = 2*MENU_MARGIN + MENU_PADDING;

const sampleData = [{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  },{
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    }
  }]

  const columns = [{
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  }, {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
  }, {
    id: 'friendName', // Required because our accessor is not a string
    Header: 'Friend Name',
    accessor: d => d.friend.name // Custom value accessors!
  }, {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }]
 

export class TableView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        }
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth - diffWidth,
                height: window.innerHeight - diffHeight,
            };
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
             }}>
                <ReactTable
                    data={sampleData}
                    columns={columns}
                />
            </div>
        )
    }
}

export default TableView;