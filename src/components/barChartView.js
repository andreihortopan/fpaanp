import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: 20,
    overflowY: "scroll",
    overflowX: "hidden",
}

const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING;
const diffHeight = 2 * MENU_MARGIN + 2 * MENU_PADDING;

export class BarChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        }

    }

    handleResize = e => {
        this.setState({
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    render() {
        const barChartData = this.props.data

        return (
            <div style={{
                width: this.state.width,
                height: this.state.height,
                ...pageStyle,
                ...menuLook,
                overflow: "hidden",
                paddingTop: MENU_PADDING,
                paddingBottom: MENU_PADDING,
            }}>
                <BarChart width={this.state.width} height={this.state.height} data={barChartData.slice()}
                    margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="short" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sum" fill="#008ece" label={"Suma"} />

                </BarChart>
            </div>
        )
    }
}

// <Bar dataKey="ngoNum" fill="#006b9b" label="Nr. ONG-uri"/>

export default BarChartView;