import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { countyDataArray } from '../docs/data';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: MENU_MARGIN,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + 3*MENU_MARGIN + 4*MENU_PADDING;
const diffHeight = 2*MENU_MARGIN + 2*MENU_PADDING;

export function refreshBarChart(newData) {
    this.setState({ displayData: newData });
}

export class BarChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayData: countyDataArray,
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        }

        refreshBarChart = refreshBarChart.bind(this);
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
                width: 1000,
                height: 1000,
                //width: this.state.width,
                //height: this.state.height,
                ...pageStyle,
                ...menuLook,
                overflow: "hidden",
                paddingTop: MENU_PADDING,
                paddingBottom: MENU_PADDING,
            }}>
                <BarChart /*width={this.state.width} height={this.state.height}*/ width={1000} height={600} data={this.state.displayData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                    <Bar dataKey="sum" fill="#008ece" label="Suma totală" />
                    <Bar dataKey="ngoNum" fill="#006b9b" label="Nr. ONG-uri"/>
                </BarChart>
            </div>
        )
    }
}

export default BarChartView;