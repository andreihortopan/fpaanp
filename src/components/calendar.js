import moment from 'moment'
import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import { Event } from './event'
import { events } from '../docs/events'

import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)

const graphMenuHeight = 250

const pageStyle = {
  position: 'absolute',
  right: 0,
  margin: MENU_MARGIN,
  overflowY: 'scroll',
  overflowX: 'hidden'
}

// const diffWidth = MENU_WIDTH + MENU_MARGIN + 2*MENU_PADDING;
const diffWidth = 0
const diffHeight = 0

export class Calendar extends Component {
  constructor (props) {
    super(props)

    this.selectEvent = this.selectEvent.bind(this)

    this.state = {
      width: window.innerWidth - diffWidth,
      height: window.innerHeight - diffHeight,
      selectedEvent: 0,
      events: events
    }
  }

  handleResize = e => {
    this.setState(prevState => {
      return {
        width: window.innerWidth - diffWidth,
        height: window.innerHeight - diffHeight
      }
    })
  }

  selectEvent (id) {
    this.setState({ selectedEvent: id })
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <div
        style={{
          width: this.state.width,
          height: this.state.height,
          ...pageStyle,
          padding: 0,
          margin: 0,
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: this.state.width / 2 - 2 * MENU_MARGIN - 4 * MENU_PADDING,
            height:
              this.state.height - graphMenuHeight - MENU_MARGIN - MENU_PADDING,
            ...menuLook,
            paddingBottom: MENU_PADDING,
            paddingTop: MENU_PADDING,
            marginLeft: MENU_MARGIN,
            marginTop: MENU_MARGIN,
            overflow: 'hidden',
            display: 'inline-block',
            float: 'left'
          }}
        >
          <h1 style={{ marginLeft: 40, marginTop: -5 }}>
            {this.state.events[this.state.selectedEvent].name}
          </h1>
          <div
            style={{
              marginLeft: 40,
              maxWidth: 600
            }}
          >
            <p>{this.state.events[this.state.selectedEvent].description}</p>
          </div>
        </div>

        <div
          style={{
            width: this.state.width / 2 - MENU_MARGIN,
            height:
              this.state.height - graphMenuHeight - MENU_MARGIN - MENU_PADDING,
            ...menuLook,
            paddingBottom: MENU_PADDING,
            paddingTop: MENU_PADDING,
            marginRight: MENU_MARGIN,
            marginTop: MENU_MARGIN,
            overflow: 'hidden',
            display: 'inline-block',
            float: 'right'
          }}
        >
          <BigCalendar
            selected={events[this.state.selectedEvent]}
            localizer={localizer}
            defaultDate={new Date()}
            defaultView='month'
            titleAccessor='name'
            tooltipAccessor='name'
            startAccessor='start'
            endAccessor='end'
            events={this.state.events}
            style={{ height: this.height }}
            onSelectEvent={event => this.selectEvent(event.id)}
            // formats={formats}
          />
        </div>

        <div
          style={{
            minWidth: this.state.width,
            height: graphMenuHeight - MENU_MARGIN - MENU_PADDING,
            overflowX: 'auto',
            overflowY: 'hidden',
            display: 'flex'
          }}
        >
          <Event onClick={this.selectEvent} list={this.state.events} />
        </div>
      </div>
    )
  }
}

export default Calendar
