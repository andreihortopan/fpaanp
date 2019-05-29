import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const pageStyle = {
    position: 'absolute',
    right: 0,
    margin: 20,
    overflowY: "scroll",
    overflowX: "hidden",
}

const BAR_CHART_DOUBLE_DIFF = 50
const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING;
const diffHeight = 2 * MENU_MARGIN + 2 * MENU_PADDING;

export class BarChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            graphWidth: Math.max(window.innerWidth - diffWidth, 1500),
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
        const barChartData = this.props.data[0].filter((county) => {
            return county.sum != 0
        })

        var barChartCountyDomainArray = []
        var barChartCountyYearArray = []
        var barChartCountyLegislationArray = []

        const singleCountyData = this.props.data[1]
        if (singleCountyData != null) {
            barChartCountyDomainArray = singleCountyData[0]
            barChartCountyYearArray = singleCountyData[1]
            barChartCountyLegislationArray = singleCountyData[2]
        }

        return (
            <div
                id='barChart'
                style={{
                    width: this.state.width,
                    height: this.state.height,
                    ...pageStyle,
                    ...menuLook,
                    overflowY: "hidden",
                    paddingTop: MENU_PADDING,
                    paddingBottom: MENU_PADDING,
                }}>

                {barChartData.length > 1 &&
                    <Tabs>
                        <TabList>
                            <Tab>Suma totală per județ (RON)</Tab>
                            <Tab>Suma medie per ONG per județ (RON)</Tab>
                            <Tab>Numărul de ONG-uri per județ</Tab>
                        </TabList>

                        <div
                            style={{
                                overflowY: "hidden",
                                overflowX: "scroll",
                            }}>
                            <TabPanel>
                                <BarChart width={this.state.graphWidth} height={this.state.height} data={barChartData.slice()}
                                    margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="short" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="sum" fill="#008ece" label={"Sumă"} />

                                </BarChart>
                            </TabPanel>
                            <TabPanel>
                                <BarChart width={this.state.graphWidth} height={this.state.height} data={barChartData.slice()}
                                    margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="short" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="average" fill="#008ece" label={"Medie"} />

                                </BarChart>
                            </TabPanel>
                            <TabPanel>
                                <BarChart width={this.state.graphWidth} height={this.state.height} data={barChartData.slice()}
                                    margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="short" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />

                                </BarChart>
                            </TabPanel>
                        </div>
                    </Tabs>}


                {barChartData.length === 1 && barChartCountyDomainArray != null && barChartCountyLegislationArray != null && barChartCountyYearArray != null &&
                    <Tabs>
                        <TabList>
                            <Tab>Filtrare după domeniu</Tab>
                            <Tab>Filtrare după legislație</Tab>
                            <Tab>Filtrare după an</Tab>
                        </TabList>


                        <TabPanel>
                            <Tabs>
                                <TabList>
                                    <Tab>Suma totală per domeniu (RON)</Tab>
                                    <Tab>Numărul de ONG-uri per domeniu</Tab>
                                </TabList>

                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyDomainArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="sum" fill="#008ece" label={"Sumă"} />
                                    </BarChart>
                                </TabPanel>
                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyDomainArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                                    </BarChart>
                                </TabPanel>
                            </Tabs>
                            {/* <BarChart width={this.state.width} height={this.state.height} data={barChartCountyDomainArray.slice()}
                                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sum" fill="#008ece" label={"Sumă"} />
                                <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                            </BarChart> */}
                        </TabPanel>
                        <TabPanel>
                            <Tabs>
                                <TabList>
                                    <Tab>Suma totală per legislație (RON)</Tab>
                                    <Tab>Numărul de ONG-uri per legislație</Tab>
                                </TabList>

                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyLegislationArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="sum" fill="#008ece" label={"Sumă"} />
                                    </BarChart>
                                </TabPanel>
                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyLegislationArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                                    </BarChart>
                                </TabPanel>
                            </Tabs>
                            {/* <BarChart width={this.state.width} height={this.state.height} data={barChartCountyLegislationArray.slice()}
                                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sum" fill="#008ece" label={"Sumă"} />
                                <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                            </BarChart> */}
                        </TabPanel>
                        <TabPanel>
                            <Tabs>
                                <TabList>
                                    <Tab>Suma totală per an (RON)</Tab>
                                    <Tab>Numărul de ONG-uri per an</Tab>
                                </TabList>

                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyYearArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="sum" fill="#008ece" label={"Suma"} />
                                    </BarChart>
                                </TabPanel>
                                <TabPanel>
                                    <BarChart width={this.state.width} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={barChartCountyYearArray.slice()}
                                        margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                                    </BarChart>
                                </TabPanel>
                            </Tabs>
                            {/* <BarChart width={this.state.width} height={this.state.height} data={barChartCountyYearArray.slice()}
                                margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sum" fill="#008ece" label={"Suma"} />
                                <Bar dataKey="ngoNum" fill="#008ece" label={"Număr ONG-uri"} />
                            </BarChart> */}
                        </TabPanel>
                    </Tabs>}

                {barChartData.length === 0 &&
                    <div style={{
                        display: 'table',
                        margin: '0 auto',
                    }}>
                        <p>Nu există date pentru județul selectat.</p>
                        <p>Selectați alt județ sau extindeți selecția.</p>
                    </div>
                }
            </div>
        )
    }
}

// <Bar dataKey="ngoNum" fill="#006b9b" label="Nr. ONG-uri" />

export default BarChartView;