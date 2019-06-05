import React, { Component } from 'react'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import '../calendar.css'

const eventStyle = {
  width: MENU_WIDTH,
  height: 250 - 2 * MENU_MARGIN - 2 * MENU_PADDING - 5,
  ...menuLook,
  marginRight: MENU_MARGIN,
  marginTop: MENU_MARGIN,
  overflow: 'hidden'
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

export class Event extends Component {
  render() {
    const { list, startEvent } = this.props

    return (
      <div
        style={{
          display: 'flex',
          marginLeft: MENU_MARGIN
        }}
      >
        {list.map(item => (
          <div
            onClick={() => this.props.onClick(item.id)}
            style={{
              ...eventStyle
            }}
            key={item.id}
          >
            <a href='#'>
              <p>{item.displayDate}</p>
              <hr style={{ ...lineStyle }} />
              <h3>{item.name}</h3>
            </a>
          </div>
        ))}
      </div>
    )
  }
}

export default Event
