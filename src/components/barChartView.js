import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
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

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export class BarChartView extends Component {
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
                overflow: "hidden",
            }}>
                <BarChart width={this.state.width} height={this.state.height} data={data}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="pv" fill="#008ece" />
                    <Bar dataKey="uv" fill="#006b9b" />
                </BarChart>
            </div>
        )
    }
}

export default BarChartView;