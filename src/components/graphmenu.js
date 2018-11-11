import React, { Component } from 'react';
import { menuLook, MENU_MARGIN } from './menu';
import { menuStyle } from './menu';
import { MENU_WIDTH } from './menu'
import { MENU_PADDING } from './menu';
import { changeCanvas } from './canvas';
import Dropdown from './dropdown';
import PDF from '../media/dummy.pdf';
import CSV from '../media/sample.csv';

const graphStyle = {
    maxWidth: 30,
    maxHeight: 30,
    paddingBottom: 0
}

const selectStyle = {
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
}

//Graph menu -- bottom left menu, for interacting with the canvas
export class GraphMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
            domeniiDeInteres: [
              {
                  id: 0,
                  title: 'Domeniul 1',
                  selected: false,
                  key: 'domeniiDeInteres'
              },
              {
                id: 1,
                title: 'Domeniul 2',
                selected: false,
                key: 'domeniiDeInteres'
              },
              {
                id: 2,
                title: 'Domeniul 3',
                selected: false,
                key: 'domeniiDeInteres'
              },
              {
                id: 3,
                title: 'Domeniul 4',
                selected: false,
                key: 'domeniiDeInteres'
              },
              {
                id: 4,
                title: 'Domeniul 5',
                selected: false,
                key: 'domeniiDeInteres'
              },
              {
                id: 5,
                title: 'Domeniul 6',
                selected: false,
                key: 'domeniiDeInteres'
              }
            ],
            autoritati: [
                {
                    id: 0,
                    title: 'Autoritatea 1',
                    selected: false,
                    key: 'autoritati'
                },
                {
                    id: 1,
                    title: 'Autoritatea 2',
                    selected: false,
                    key: 'autoritati'
                },
                {
                    id: 2,
                    title: 'Autoritatea 3',
                    selected: false,
                    key: 'autoritati'
                },
                {
                    id: 3,
                    title: 'Autoritatea 4',
                    selected: false,
                    key: 'autoritati'
                },
                {
                    id: 4,
                    title: 'Autoritatea 5',
                    selected: false,
                    key: 'autoritati'
                },
                {
                    id: 5,
                    title: 'Autoritatea 6',
                    selected: false,
                    key: 'autoritati'
                }
            ],
            sume: [
                {
                    id: 0,
                    title: '<€50k',
                    selected: false,
                    key: 'sume'
                },
                {
                    id: 1,
                    title: '<€100k',
                    selected: false,
                    key: 'sume'
                },
                {
                    id: 2,
                    title: '<€500k',
                    selected: false,
                    key: 'sume'
                },
                {
                    id: 3,
                    title: '<€1m',
                    selected: false,
                    key: 'sume'
                },
                {
                    id: 4,
                    title: '>€1m',
                    selected: false,
                    key: 'sume'
                },
            ],
            ani: [
                {
                    id: 0,
                    title: '<2000',
                    selected: false,
                    key: 'ani'
                },
                {
                    id: 1,
                    title: '<2004',
                    selected: false,
                    key: 'ani'
                },
                {
                    id: 2,
                    title: '<2009',
                    selected: false,
                    key: 'ani'
                },
                {
                    id: 3,
                    title: '<2014',
                    selected: false,
                    key: 'ani'
                },
                {
                    id: 4,
                    title: '>2014',
                    selected: false,
                    key: 'ani'
                },
            ],
            numarOrg: [
                {
                    id: 0,
                    title: '<10',
                    selected: false,
                    key: 'numarOrg'
                },
                {
                    id: 1,
                    title: '<20',
                    selected: false,
                    key: 'numarOrg'
                },
                {
                    id: 2,
                    title: '<50',
                    selected: false,
                    key: 'numarOrg'
                },
                {
                    id: 3,
                    title: '<100',
                    selected: false,
                    key: 'numarOrg'
                },
                {
                    id: 4,
                    title: '>100',
                    selected: false,
                    key: 'numarOrg'
                },
            ],
        };
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        })
    }

    setIcon(id) {
        switch(id) {
            case 1:
                if(this.state.selected == 1)
                    return "media/map-selected.png";
                return "media/map.png";
            case 2:
                if(this.state.selected == 2)
                    return "media/barchart-selected.png";
                return "media/barchart.png";
            case 3:
                if(this.state.selected == 3)
                    return "media/excel-selected.png";
                return "media/excel.png";
        }
    }

    render() {
        return (
        <div style={{
            ...menuStyle,
            ...menuLook,
            bottom: 0,
            left: 0,
        }}>
            <div style={{paddingLeft: 10}}>
                <div style={{float:"left"}}><p>Date si resurse</p></div>
                <div style={{
                    float:"right",
                }}>
                    <a 
                        onClick={(e) => {
                            
                    }}>
                        <img
                            alt="Descarc&#259;"
                            src="media/download.png"
                            style={{
                                ...graphStyle,
                                marginTop: MENU_MARGIN/2,
                                marginRight: 10,
                        }}/>
                    </a>
                </div>
            </div>

            <div style={{clear:"both"}}>
            <Dropdown 
                title="Domenii de interes"
                list={this.state.domeniiDeInteres}
                resetThenSet={this.resetThenSet}
            />

            <Dropdown 
                title="Aut. finantatoare"
                list={this.state.autoritati}
                resetThenSet={this.resetThenSet}
            />

            <div style={{
                display: 'inline-block',
                width: 115,
                marginRight: 5,
            }}>
                <Dropdown 
                    title="Suma"
                    list={this.state.sume}
                    resetThenSet={this.resetThenSet}
                />
            </div>

            <div style={{
                display: 'inline-block',
                width: 115,
                marginLeft: 5,
            }}>
                <Dropdown
                    title="An"
                    list={this.state.ani}
                    resetThenSet={this.resetThenSet}
                />
            </div>

            <Dropdown 
                title="Numar organizatii"
                list={this.state.numarOrg}
                resetThenSet={this.resetThenSet}
            />

            <table style={{
                
                width: MENU_WIDTH,
                height: 50,
                borderCollapse: "collapse",
            }}>
                <tbody>
                    <tr bordertop="0">
                        <td align="center">
                            <a 
                                onClick={(e) => {
                                    changeCanvas("RomaniaMap");
                                    this.setState({selected: 1});
                                }}
                            ><img
                                alt="Hart&#259;"
                                src={this.setIcon(1)}
                                style={{
                                    ...graphStyle,
                                }}/></a>
                        </td>
                        <td align="center">
                            <a
                                onClick={(e) => {
                                    changeCanvas("BarChart");
                                    this.setState({selected: 2});
                                }}
                            ><img
                                alt="Grafic bar&#259;"
                                src={this.setIcon(2)}
                                style={{
                                    ...graphStyle,
                                }}/></a>
                        </td>
                        <td align="center">
                            <a
                                onClick={(e) => {
                                    changeCanvas("TableView");
                                    this.setState({selected: 3});
                                }}
                            ><img
                                alt="Tabel"
                                src={this.setIcon(3)}
                                style={{
                                    ...graphStyle,
                                }}/></a>
                        </td>
                        <td align="center">
                            <a
                                href={PDF}
                                target="_blank">
                            <img 
                                alt="Descarc&#259; PDF"
                                src="media/pdf.png"
                                style={{
                                    ...graphStyle,
                                }}/></a>
                        </td>
                        <td align="center">
                            <a
                                href={CSV}>
                            <img 
                                alt="Descarc&#259; CSV"
                                src="media/csv.png"
                                style={{
                                    ...graphStyle,
                                }}/></a>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
        );
    }
}

export default GraphMenu;