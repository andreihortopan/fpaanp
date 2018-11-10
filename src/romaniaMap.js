import React, { Component } from 'react';
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

//Map
export class RomaniaMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            worldData: [],
        };

        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    }

    projection() {
        return geoMercator()
            .center([24.97, 45.94])
            .scale(3000)
            .translate([ 1000/2, 400/2 ])
            
    }

    componentDidMount() {
        fetch("/romania-counties.json")
            .then(response => {
                if(response.status !== 200) {
                    console.log('A avut loc o problema: ${response.status}');
                    return;
                }
                response.json().then(worldData => {
                    this.setState({
                        worldData: feature(worldData, worldData.objects.ROU_adm1).features,
                    })
                })
            })
    }

    handleOnMouseEnter(countyIndex) {
 
    }

    handleOnMouseLeave(countyIndex) {

    }

    render() {
        var countyColor = "#ECEFF1";

        return (
            <svg width="100%" height="100%" viewBox="50 0 800 400">
                <g className="countries">
                    {
                        this.state.worldData.map((d,i) => (
                            <path
                                key={ 'path-${ i }' }
                                d={ geoPath().projection(this.projection())(d) }
                                className="country"
                                fill= {countyColor}
                                stroke="#607D8B"
                                strokeWidth={ 0.75 }
                                onMouseEnter= { () => this.handleOnMouseEnter(i)}
                                onMouseLeave= { () => this.handleOnMouseLeave(i)}
                            />
                        ))
                    }
                </g>
                
            </svg>
        );
    }
}

export default RomaniaMap;