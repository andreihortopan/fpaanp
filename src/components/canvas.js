import React, { Component } from 'react';
import { RomaniaMap } from './romaniaMapRSM';
import { BarChart } from './barChart';

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
            { this.state.canvasType == "RomaniaMap" && <RomaniaMap />}
            { this.state.canvasType == "BarChart" && <BarChart />}
        </div> 
    );
  }
}

export { changeCanvas };
export default Canvas;
