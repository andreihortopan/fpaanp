import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import BarTab from './barTab'

const BAR_CHART_DOUBLE_DIFF = 50
const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING;
const diffHeight = 2 * MENU_MARGIN + 6 * MENU_PADDING;

export class BarChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            graphWidth: Math.max(window.innerWidth - diffWidth, 1500),
            scroll: (window.innerWidth - diffWidth < 1500) ? 1 : 0,
        }

    }

    handleResize = e => {
        this.setState({
            width: window.innerWidth - diffWidth,
            height: window.innerHeight - diffHeight,
            graphWidth: Math.max(window.innerWidth - diffWidth, 1500),
            scroll: (window.innerWidth - diffWidth < 1500) ? 1 : 0,
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

        const filters = [
            {
                name: "domeniu",
                data: barChartCountyDomainArray
            },
            {
                name: "legislație",
                data: barChartCountyLegislationArray
            },
            {
                name: "an",
                data: barChartCountyYearArray
            },
        ]

        const categories = [
            {
                title: "Suma totală per județ (RON)",
                name: "sum",
                label: "Sumă"
            },
            {
                title: "Suma medie per ONG per județ (RON)",
                name: "average",
                label: "Medie"
            },
            {
                title: "Numărul de ONG-uri per județ",
                name: "ngoNum",
                label: "Număr ONG-uri"
            },
        ]

        return (
            <div
                id='barChart'
                style={{
                    width: '100%',
                    height: '100%',
                    ...menuLook,
                    paddingBottom: 0,
                    paddingTop: 0,
                    marginLeft: MENU_MARGIN,
                    overflow: "hidden",
                    position: 'relative',
                }}>
                <div style={{ marginTop: MENU_MARGIN, marginBottom: MENU_MARGIN }}>
                    {barChartData.length > 1 &&
                        <Tabs>
                            <TabList>
                                {categories.map((item) => (
                                    <Tab>{item.title}</Tab>
                                ))}
                            </TabList>

                            <div
                                style={{
                                    overflowY: "hidden",
                                    overflowX: "auto",
                                }}>
                                {categories.map((item) => (
                                    <TabPanel>
                                        <BarTab width={this.state.graphWidth} height={this.state.height} data={barChartData} xDataKey="short" barDataKey={item.name} label={item.label} scroll={this.state.scroll} />
                                    </TabPanel>
                                ))}
                            </div>
                        </Tabs>}


                    {barChartData.length === 1 && barChartCountyDomainArray != null && barChartCountyLegislationArray != null && barChartCountyYearArray != null &&
                        <Tabs>
                            <TabList>
                                {filters.map((item) => (
                                    <Tab>Filtrare după {item.name}</Tab>
                                ))}
                            </TabList>

                            {filters.map((item) => (
                                <TabPanel>
                                    <Tabs>
                                        <TabList>
                                            <Tab>Suma totală per {item.name} (RON)</Tab>
                                            <Tab>Numărul de ONG-uri per {item.name}</Tab>
                                        </TabList>

                                        <div
                                            style={{
                                                overflowY: "hidden",
                                                overflowX: "auto",
                                            }}>
                                            <TabPanel>
                                                <BarTab width={this.state.graphWidth} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={item.data} xDataKey="name" barDataKey="sum" label={"Sumă"} scroll={this.state.scroll} />
                                            </TabPanel>
                                            <TabPanel>
                                                <BarTab width={this.state.graphWidth} height={this.state.height - BAR_CHART_DOUBLE_DIFF} data={item.data} xDataKey="name" barDataKey="ngoNum" label={"Număr ONG-uri"} scroll={this.state.scroll} />
                                            </TabPanel>
                                        </div>
                                    </Tabs>
                                </TabPanel>
                            ))}
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
            </div>

        )
    }
}

export default BarChartView;