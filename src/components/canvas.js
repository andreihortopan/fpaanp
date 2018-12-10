import React, { Component } from 'react';
import { RomaniaMap } from './romaniaMapRSM';
import { BarChartView } from './barChartView';
import { TableView } from './tableView';
import { Members } from './members';
import { Calendar } from './calendar';
import { GraphMenu } from './graphmenu';

const canvasStyle = {
    position: "absolute",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
}

function changeCanvas(canvasType) {
    this.setState({canvasType});
}

export class Canvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvasType: "RomaniaMap",
    }

    changeCanvas = changeCanvas.bind(this);
  }

  render() {
    return (
        <div style={{canvasStyle}}>
            { (this.state.canvasType == "RomaniaMap" ||  this.state.canvasType == "BarChart" ||  this.state.canvasType == "TableView") && <GraphMenu />}
            { this.state.canvasType == "RomaniaMap" && <RomaniaMap />}
            { this.state.canvasType == "BarChart" && <BarChartView />}
            { this.state.canvasType == "TableView" && <TableView />}
            { this.state.canvasType == "Members" && <Members />}
            { this.state.canvasType == "Calendar" && <Calendar />}
        </div> 
    );
  }
}

export { changeCanvas };
export default Canvas;
