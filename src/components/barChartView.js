import React, { Component } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import BarTab from './barTab'
import TableView from './tableView';
import CustomButton from './customButton';

const diffWidth = MENU_WIDTH + 3 * MENU_MARGIN + 4 * MENU_PADDING;

const lineStyle = {
    display: 'block',
    height: 1,
    width: 100,
    border: 0,
    marginLeft: 0,
    marginTop: -MENU_MARGIN / 2,
    borderTop: '1px solid #bcbcbc',
    padding: 0,
    clear: 'both'
}

export class BarChartView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            graphWidth: Math.max(window.innerWidth - diffWidth, 1500),
            scroll: (window.innerWidth - diffWidth < 1500) ? 1 : 0,
            selectedFilter: 0,
            selectedCategory: 0,
            selectedSubcategory: 0,
        }

    }

    handleResize = e => {
        this.setState({
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

    selectFilter = (id) => {
        this.setState({ selectedFilter: id })
    }

    selectCategory = (id) => {
        this.setState({ selectedCategory: id })
    }

    selectSubcategory = (id) => {
        this.setState({ selectedSubcategory: id })
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

        var filters = [
            {
                id: 0,
                title: "Filtrare după domeniu",
                name: "domeniu",
                data: barChartCountyDomainArray,
            },
            {
                id: 1,
                title: "Filtrare după legislație",
                name: "legislație",
                data: barChartCountyLegislationArray,
            },
            {
                id: 2,
                title: "Filtrare după an",
                name: "an",
                data: barChartCountyYearArray,
            },
        ]

        var categories = [
            {
                id: 0,
                title: "Suma totală per județ (RON)",
                name: "sum",
                label: "Sumă",
            },
            {
                id: 1,
                title: "Suma medie per ONG per județ (RON)",
                name: "average",
                label: "Medie",
            },
            {
                id: 2,
                title: "Numărul de ONG-uri per județ",
                name: "ngoNum",
                label: "Număr ONG-uri",
            },
        ]

        var subCategories = [
            {
                id: 0,
                name: 'sum',
                title: "Suma totală per ",
                label: "Sumă"
            },
            {
                id: 1,
                name: 'ngoNum',
                title: "Numărul de ONG-uri per ",
                label: "Număr ONG-uri",
            }
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
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexFlow: 'column',
                    justifyContent: 'space-between'
                }}>

                {barChartData.length >= 1 &&
                    <div style={{
                        marginTop: MENU_MARGIN,
                        marginBottom: MENU_MARGIN
                    }}>
                        <div>
                            {(barChartData.length === 1 ? filters : categories).map((item) => (
                                <div
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        display: 'inline-block'
                                    }}
                                    onClick={() => barChartData.length === 1 ? this.selectFilter(item.id) : this.selectCategory(item.id)}
                                >
                                    <CustomButton
                                        wide={1}
                                        key={item.id}
                                        id={item.id}
                                        selected={item.id === (barChartData.length === 1 ? this.state.selectedFilter : this.state.selectedCategory) ? 1 : 0}
                                        text={item.title}
                                    /></div>
                            ))}
                        </div>
                        {barChartData.length === 1 &&
                            <div style={{
                                marginTop: MENU_MARGIN
                            }}>
                                <hr style={{ ...lineStyle }} />
                                {subCategories.map((item) => (
                                    <div
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            display: 'inline-block'
                                        }}
                                        onClick={() => this.selectSubcategory(item.id)}
                                    >
                                        <CustomButton
                                            wide={1}
                                            selected={item.id === this.state.selectedSubcategory ? 1 : 0}
                                            text={item.title.concat(filters[this.state.selectedFilter].name)}
                                        />
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                }

                {barChartData.length >= 1 &&
                    <div style={{
                        height: '100%',
                        overflowX: 'auto',
                        overflowY: 'hidden'
                    }}
                    >
                        <div style={{
                            width: this.state.graphWidth,
                            height: '100%',
                        }}>
                            <ResponsiveContainer width='100%' height="100%">
                                <BarChart data={(barChartData.length === 1 ? filters[this.state.selectedFilter].data : barChartData).slice()}
                                    margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey={barChartData.length === 1 ? 'name' : 'short'} />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar
                                        dataKey={(barChartData.length === 1 ? subCategories[this.state.selectedSubcategory].name : categories[this.state.selectedCategory].name)}
                                        fill="#008ece"
                                        label={(barChartData.length === 1 ? subCategories[this.state.selectedSubcategory].label : categories[this.state.selectedCategory].label)}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                }

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

export default BarChartView;