import React, { Component } from 'react';
var CanvasJSReact = require('../canvasjs.react.js');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const options = {
    title: {
      text: "Basic Column Chart in React"
    },
    data: [{				
              type: "column",
              dataPoints: [
                  { label: "Apple",  y: 10  },
                  { label: "Orange", y: 15  },
                  { label: "Banana", y: 25  },
                  { label: "Mango",  y: 30  },
                  { label: "Grape",  y: 28  }
              ]
     }]
}

export class BarChart extends Component {
    render() {
        return(
            <div style={{
                position: 'absolute',
                margin: 0,
                width: 1000,
                height: 500,
                padding: 0,
            }}> 
                <p style={{fontSize: 200}}>AICI VINE BAR CHARTU</p>
                
            </div>
        )
    }
}

export default BarChart;