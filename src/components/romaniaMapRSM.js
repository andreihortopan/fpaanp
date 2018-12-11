import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { geoMercator } from "d3-geo";
import ReactTooltip from "react-tooltip";
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH } from './graphmenu';
import { scaleLinear } from "d3-scale";
import { dataArray } from './graphmenu.js';
import { countyDataArray } from '../docs/data';
import { MapLegend } from './mapLegend';

const pageStyle = {
    position: 'absolute',
    right: 0,
    overflowY: "scroll",
    overflowX: "hidden",
}

const popScale = scaleLinear()
    .domain([0,2000000,5000000,10000000,20000000,50000000])
    .range(["#F1EEF6", "#BDC9E1", "#74A9CF", "#2B8CBE", "#045A8D"])
  //.domain([0,10000000,40000000])
  //.range(["#FFFFFF","#8c8c8c","#4d4d4d"])

const diffWidth = MENU_WIDTH + MENU_MARGIN + 2*MENU_PADDING;
const diffHeight = 0;

export function refreshMap(newData) {
    this.setState({ displayData: newData });
}

export class RomaniaMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayData: countyDataArray,
            windowWidth: window.innerWidth - diffWidth,
            windowHeight: window.innerHeight - diffHeight,
        }    

        refreshMap = refreshMap.bind(this);
    }

    handleResize = e => {
        this.setState(prevState => {
            return {
                width: window.innerWidth - diffWidth,
                height: window.innerHeight - diffHeight,
            };
        });
    }

    calculateScaleFactor() {
        var wh = this.state.windowHeight;
        var ww = this.state.windowWidth;
        if(ww >= 1.5* wh) {
            return wh*7.4;
        }
        else {
            return ww*5.5;
        }
    }

    /*calculateOffset() {
        var ww = this.state.windowWidth;
        if(ww < 1400) {
            return 50;
        }
        return 0;
    }*/

    handleResize = e => {
        this.setState(prevState => {
            return {
                windowWidth: window.outerWidth,
                windowHeight: window.outerHeight
            };
        });
    }

    componentDidMount() {
        setTimeout(() => {
            ReactTooltip.rebuild()
          }, 100);
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
            overflow: "hidden"
        }}>
            <MapLegend/>
          <ComposableMap
                width = {this.state.windowWidth}
                height = {this.state.windowHeight}
                projection={(width, height, projectionConfig) => {
                    console.log("REISING");
                    return geoMercator()
                        .center([12.5, 25.05])
                        .scale(this.calculateScaleFactor())
                        .translate([ width/2 /*+ this.calculateOffset()*/, height/2 ])
                }}
            >
            <ZoomableGroup
                disablePanning = "true">
            <Geographies geography="/romania-counties.json" disableOptimization>
              {(geographies, projection) => geographies.map((geography, i) => {
                  //console.log(this.state.displayData);
                  var countyData =this.state.displayData.find(function(county) {if(county!=null) return county.name == geography.properties.NAME_1});
                return (
                <Geography
                  key={ i }
                  data-tip={ geography.properties.NAME_1 + "<br/>" + "Suma totală: " + countyData.sum + " RON" + "<br/>" + "Nr. ONG-uri: " + countyData.ngoNum }
                  geography={ geography }
                  projection={ projection }
                  style={{
                    default: {
                      fill: popScale(countyData.sum),
                      //fill: "#FFFCEF",
                      stroke: "#404040",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                        fill: "#008ece",
                        stroke: "#404040",
                        strokeWidth: 0.5,
                        outline: "none",
                    },
                    pressed: {
                        fill: "#006b9b",
                        stroke: "#888888",
                        strokeWidth: 0.5,
                        outline: "none",
                    },
                  }}
                />
              )})}
            </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <ReactTooltip multiline={true}/>
        </div>
      )
    }
  }
  
export default RomaniaMap;