import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export class BarTab extends Component {
    render() {
        const { height, width, data, xDataKey, barDataKey, label, scroll } = this.props;
        console.log(height)
        return (
            <BarChart width={width} height={height - ((scroll == 1) ? 45 : 30)} data={data.slice()}
                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={xDataKey} />
                <YAxis />
                <Tooltip />
                <Bar dataKey={barDataKey} fill="#008ece" label={label} />
            </BarChart>
        )
    }

}

export default BarTab;