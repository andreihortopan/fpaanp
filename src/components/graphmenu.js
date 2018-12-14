import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PDF from '../media/dummy.pdf'
import {
  countyDataArray,
  counties,
  legislations,
  funders,
  levels,
  domains,
  years,
  sums,
  data
} from '../docs/data'
import Select, { components } from 'react-select'
import { refreshMap } from './romaniaMapRSM'
import { refreshTable } from './tableView'
import { refreshBarChart } from './barChartView'
import { CSVLink } from 'react-csv'
import '../canvasjs.react'

// Size constants
export const MENU_MARGIN = 20
export const MENU_WIDTH = 240
export const MENU_PADDING = 20

// Menu styling with regards to look and interior styling (eg. padding)
export const menuLook = {
  backgroundColor: '#FFFFFF',
  borderRadius: '2px',
  boxShadow: '1px 1px 4px 1px #bababa',
  padding: MENU_PADDING,
  paddingBottom: MENU_PADDING / 2,
  paddingTop: MENU_PADDING / 2
}

// Menu styling with regards to exterior styling (eg. margin)
export const menuStyle = {
  position: 'fixed',
  zIndex: 100,
  width: MENU_WIDTH,
  height: window.innerHeight - 2 * MENU_MARGIN - 2 * MENU_PADDING,
  marginTop: MENU_MARGIN,
  marginLeft: MENU_MARGIN,
  marginBottom: MENU_MARGIN
}

const logoStyle = {
  maxHeight: 30,
  paddingBottom: 0
}

const graphStyle = {
  maxWidth: 30,
  maxHeight: 30,
  paddingBottom: 0
}

const lineStyle = {
  display: 'block',
  height: 1,
  border: 0,
  margin: 0,
  borderTop: '1px solid #bcbcbc',
  padding: 0,
  clear: 'both'
}

const selectStyle = {
  paddingLeft: 10,
  paddingRight: 10,
  marginBottom: 10
}

const controlStyles = {
  paddingBottom: 10
}

const ControlComponent = props => (
  <div style={controlStyles}>
    <components.Control {...props} />
  </div>
)

const selectionOne = '1｜Județ'
const selectionTwo = '2｜Legislație'
const selectionThree = '3｜Finanțator'
const selectionFour = '4｜Nivel'
const selectionFive = '5｜Domeniu'
const selectionSix = '6｜An'
const selectionSeven = '7｜Sumă'

export var dataArray = data

export class GraphMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      height: window.innerHeight - 2 * MENU_MARGIN - MENU_PADDING,
      selectedCounty: [],
      selectedLegislation: [],
      selectedFunder: [],
      selectedLevel: [],
      selectedDomain: [],
      selectedYear: [],
      selectedSum: []
    }

    this.filterData = this.filterData.bind(this)
    this.isCounty = this.isCounty.bind(this)
    this.isLegislation = this.isLegislation.bind(this)
    this.isFunder = this.isFunder.bind(this)
    this.isLevel = this.isLevel.bind(this)
    this.isDomain = this.isDomain.bind(this)
    this.isYear = this.isYear.bind(this)
    this.isSum = this.isSum.bind(this)

    this.computeCountyDataArray()
  }

  resetThenSet = (id, key) => {
    let temp = JSON.parse(JSON.stringify(this.state[key]))
    temp.forEach(item => (item.selected = false))
    temp[id].selected = true
    this.setState({
      [key]: temp
    })
  }

  setIcon (id) {
    switch (id) {
      case 1:
        if (this.props.tip === 'harta') return '/media/map-selected.png'
        return '/media/map.png'
      case 2:
        if (this.props.tip === 'grafic') return '/media/barchart-selected.png'
        return '/media/barchart.png'
      case 3:
        if (this.props.tip === 'tabel') return '/media/excel-selected.png'
        return '/media/excel.png'
      default:
        return null
    }
  }

  isCounty (ngo) {
    if (this.state.selectedCounty.length === 0) {
      return ngo
    } else {
      return this.state.selectedCounty.map(a => a.value).includes(ngo.county)
    }
  }

  isLegislation (ngo) {
    if (this.state.selectedLegislation.length === 0) {
      return ngo
    } else {
      return this.state.selectedLegislation
        .map(a => a.value)
        .includes(ngo.legislation)
    }
  }

  isFunder (ngo) {
    if (this.state.selectedFunder.length === 0) {
      return ngo
    } else {
      return this.state.selectedFunder.map(a => a.value).includes(ngo.funder)
    }
  }

  isLevel (ngo) {
    if (this.state.selectedLevel.length === 0) {
      return ngo
    } else {
      return this.state.selectedLevel.map(a => a.value).includes(ngo.level)
    }
  }

  isDomain (ngo) {
    if (this.state.selectedDomain.length === 0) {
      return ngo
    } else {
      return this.state.selectedDomain.map(a => a.value).includes(ngo.domain)
    }
  }

  isYear (ngo) {
    if (this.state.selectedYear.length === 0) {
      return ngo
    } else {
      return this.state.selectedYear.map(a => a.value).includes(ngo.year)
    }
  }

  isSum (ngo) {
    // TODO Implement sum logic - it doesn't work as of now.
    if (this.state.selectedLegislation === 0) {
      return ngo
    } else {
      return this.state.selectedSum.filter(
        a => a.min <= ngo.sum && a.max >= ngo.sum
      )
    }
  }

  computeCountyDataArray () {
    // Calculates the values to be displayed on the canvas.
    countyDataArray.forEach(currentCounty => {
      currentCounty.ngoNum = 0
      currentCounty.sum = 0
    })
    dataArray.forEach(ngo => {
      var currentCounty = countyDataArray.find(function (county) {
        if (county != null) {
          return county.name == ngo.county
        } else return null
      })
      currentCounty.sum += parseInt(ngo.sum)
      currentCounty.ngoNum++
    })
  }

  filterData () {
    dataArray = data.filter(this.isCounty)
    dataArray = dataArray.filter(this.isLegislation)
    dataArray = dataArray.filter(this.isFunder)
    dataArray = dataArray.filter(this.isLevel)
    dataArray = dataArray.filter(this.isDomain)
    dataArray = dataArray.filter(this.isYear)
    dataArray = dataArray.filter(this.isSum)
    this.computeCountyDataArray()

    const { tip } = this.props

    if (tip === 'harta') refreshMap(countyDataArray) // TO DO FIX SUM
    if (tip === 'grafic') refreshBarChart(countyDataArray)
    if (tip === 'tabel') refreshTable(dataArray)
  }

  handleChange = data => {
    this.setState(data, () => {
      this.filterData()
    })
  }

  handleCountyChange = selectedCounty => {
    this.setState({ selectedCounty }, () => {
      this.filterData()
    })
  }

  handleLegislationChange = selectedLegislation => {
    this.setState({ selectedLegislation }, () => {
      this.filterData()
    })
  }

  handleFunderChange = selectedFunder => {
    this.setState({ selectedFunder }, () => {
      this.filterData()
    })
  }

  handleLevelChange = selectedLevel => {
    this.setState({ selectedLevel }, () => {
      this.filterData()
    })
  }

  handleDomainChange = selectedDomain => {
    this.setState({ selectedDomain }, () => {
      this.filterData()
    })
  }

  handleYearChange = selectedYear => {
    this.setState({ selectedYear }, () => {
      this.filterData()
    })
  }

  handleSumChange = selectedSum => {
    this.setState({ selectedSum }, () => {
      this.filterData()
    })
  }

  handleResize = e => {
    this.setState(prevState => {
      return {
        height: window.innerHeight - 2 * MENU_MARGIN - MENU_PADDING
      }
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    const {
      selectedCounty,
      selectedLegislation,
      selectedFunder,
      selectedLevel,
      selectedDomain,
      selectedYear,
      selectedSum
    } = this.state

    return (
      <div
        style={{
          position: 'fixed',
          zIndex: 100,
          height: this.state.height,
          width: MENU_WIDTH,
          marginTop: MENU_MARGIN,
          marginLeft: MENU_MARGIN,
          marginBottom: MENU_MARGIN,
          backgroundColor: '#FFFFFF',
          borderRadius: '2px',
          boxShadow: '1px 1px 4px 1px #bababa',
          padding: MENU_PADDING,
          paddingBottom: MENU_PADDING / 2,
          paddingTop: MENU_PADDING / 2
        }}
      >
        <div style={{ paddingLeft: 10 }}>
          <div style={{ float: 'left', marginLeft: 25 }}>
            <p>Meniu</p>
          </div>
          <div style={{ float: 'right' }}>
            <a href='https://clnr.ro/' target='_blank' onClick={e => {}}>
              <img
                onMouseOver={e =>
                  (e.currentTarget.src = '/media/clnr_logo.png')
                }
                onMouseLeave={e =>
                  (e.currentTarget.src = '/media/clnr_logo_bw.png')
                }
                alt='CLNR'
                src='/media/clnr_logo_bw.png'
                data-tip={'Accesează site-ul CLNR'}
                style={{
                  ...logoStyle,
                  marginTop: MENU_MARGIN / 2,
                  marginRight: 5
                }}
              />
            </a>
          </div>
        </div>
        <hr style={{ ...lineStyle }} />
        <div style={{ paddingLeft: 10, clear: 'both' }}>
          <div style={{ float: 'left' }}>
            <p>Date &#351;i resurse</p>
          </div>
          {this.state.selected != 0 && (
            <div
              style={{
                float: 'right'
              }}
            >
              <a href='#' onClick={e => {}}>
                <img
                  onMouseOver={e =>
                    (e.currentTarget.src = '/media/download-selected.png')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.src = '/media/download.png')
                  }
                  alt='Descarc&#259;'
                  src='/media/download.png'
                  data-tip={
                    this.state.selected == 1
                      ? 'Descarcă hartă'
                      : this.state.selected == 2
                        ? 'Descarcă grafic'
                        : 'Descarcă tabel'
                  }
                  style={{
                    ...graphStyle,
                    marginTop: MENU_MARGIN / 2,
                    marginRight: 5
                  }}
                />
              </a>
            </div>
          )}
        </div>

        <div
          style={{
            clear: 'both',
            height: this.state.height - 170,
            overflowY: 'auto'
          }}
        >
          <Select
            value={selectedCounty}
            menuPosition={'absolute'}
            placeholder={selectionOne}
            onChange={selectedCounty => this.handleChange({ selectedCounty })}
            options={counties}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedLegislation}
            menuPosition={'absolute'}
            placeholder={selectionTwo}
            onChange={this.handleLegislationChange}
            options={legislations}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedFunder}
            menuPosition={'absolute'}
            placeholder={selectionThree}
            onChange={this.handleFunderChange}
            options={funders}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedLevel}
            menuPosition={'absolute'}
            placeholder={selectionFour}
            onChange={this.handleLevelChange}
            options={levels}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedDomain}
            menuPosition={'absolute'}
            placeholder={selectionFive}
            onChange={this.handleDomainChange}
            options={domains}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedYear}
            menuPosition={'absolute'}
            placeholder={selectionSix}
            onChange={this.handleYearChange}
            options={years}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />

          <Select
            value={selectedSum}
            menuPosition={'absolute'}
            placeholder={selectionSeven}
            onChange={this.handleSumChange}
            options={sums}
            isMulti
            closeMenuOnSelect={false}
            isSearchable
            components={{ Control: ControlComponent }}
          />
        </div>
        <hr style={{ ...lineStyle }} />
        <div>
          <table
            style={{
              position: 'fixed',
              bottom: 30,
              width: MENU_WIDTH,
              height: 50,
              borderCollapse: 'collapse'
            }}
          >
            <tbody>
              <tr bordertop='0'>
                <td align='center'>
                  <Link data-tip='Afișează hartă' to='/date-si-resurse/harta'>
                    <img
                      onMouseOver={e =>
                        (e.currentTarget.src = '/media/map-selected.png')
                      }
                      onMouseLeave={e => {
                        e.currentTarget.src = this.setIcon(1)
                      }}
                      alt='Hart&#259;'
                      src={this.setIcon(1)}
                      style={{
                        ...graphStyle
                      }}
                    />
                  </Link>
                </td>
                <td align='center'>
                  <Link
                    data-tip='Afișează grafic bară'
                    to='/date-si-resurse/grafic'
                  >
                    <img
                      onMouseOver={e =>
                        (e.currentTarget.src = '/media/barchart-selected.png')
                      }
                      onMouseLeave={e => {
                        e.currentTarget.src = this.setIcon(2)
                      }}
                      alt='Grafic bar&#259;'
                      src={this.setIcon(2)}
                      style={{
                        ...graphStyle
                      }}
                    />
                  </Link>
                </td>
                <td align='center'>
                  <Link data-tip='Afișează tabel' to='/date-si-resurse/tabel'>
                    <img
                      onMouseOver={e =>
                        (e.currentTarget.src = '/media/excel-selected.png')
                      }
                      onMouseLeave={e => {
                        e.currentTarget.src = this.setIcon(3)
                      }}
                      alt='Tabel'
                      src={this.setIcon(3)}
                      style={{
                        ...graphStyle
                      }}
                    />
                  </Link>
                </td>
                <td align='center'>
                  <a data-tip='Descarcă PDF' href={PDF} target='_blank'>
                    <img
                      onMouseOver={e =>
                        (e.currentTarget.src = '/media/pdf-selected.png')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.src = '/media/pdf.png')
                      }
                      alt='Descarc&#259; PDF'
                      src='/media/pdf.png'
                      style={{
                        ...graphStyle
                      }}
                    />
                  </a>
                </td>
                <td align='center'>
                  <CSVLink data={dataArray}>
                    <img
                      onMouseOver={e =>
                        (e.currentTarget.src = '/media/csv-selected.png')
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.src = '/media/csv.png')
                      }
                      alt='Descarc&#259; CSV'
                      src='/media/csv.png'
                      style={{
                        ...graphStyle
                      }}
                    />
                  </CSVLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default GraphMenu
