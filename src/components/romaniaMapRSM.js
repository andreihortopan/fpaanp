import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { geoMercator } from "d3-geo";
import ReactTooltip from "react-tooltip";

export class RomaniaMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        }        
    }

    calculateScaleFactor() {
        var wh = this.state.windowHeight;
        var ww = this.state.windowWidth;
        if(ww >= 2* wh) {
            return wh*7.4;
        }
        else {
            return ww*4.15;
        }
    }

    calculateOffset() {
        var ww = this.state.windowWidth;
        if(ww < 1350) {
            return 50;
        }
        return 0;
    }

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
        <div>
          <ComposableMap
                width = {this.state.windowWidth}
                height = {this.state.windowHeight}
                projection={(width, height, projectionConfig) => {
                    return geoMercator()
                        .center([12.5, 25.05])
                        .scale(this.calculateScaleFactor())
                        .translate([ width/2 + this.calculateOffset(), height/2 ])
                }}
            >
            <ZoomableGroup
                disablePanning = "true">
            <Geographies geography="/romania-counties.json" disableOptimization>
              {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                <Geography
                  key={ i }
                  data-tip={ geography.properties.NAME_1 }
                  geography={ geography }
                  projection={ projection }
                  style={{
                    default: {
                      fill: "#FFFCEF",
                      stroke: "#888888",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                        fill: "#008ece",
                        stroke: "#888888",
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
              ))}
            </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          <ReactTooltip />
        </div>
      )
    }
  }
  
export default RomaniaMap;