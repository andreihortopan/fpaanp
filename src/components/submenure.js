import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MENU_PADDING, MENU_MARGIN, MENU_WIDTH, menuLook } from './graphmenu'
import { listStyle } from './menu'
import { itemStyle } from './menu'

export class SubmenuRE extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  closeMenu = () => {
    this.setState({ show: false })
  }

  render() {
    //return (this.state.show &&
    return (
      <div
        style={{
          ...menuLook,
          marginLeft: -MENU_MARGIN,
          backgroundColor: '#008ece',
          color: '#ffffff',
          boxShadow: '1px 1px 4px 1px #848484'
        }}
      >
        <ul
          style={{
            ...listStyle
          }}
        >
          <li
            style={{
              ...itemStyle
            }}
          >
            <Link to='/membri'>
              <div onClick={this.closeMenu}>
                Membri
              </div></Link>
          </li>
          <li
            style={{
              ...itemStyle
            }}
          >
            <a href='#' onClick={e => { }}>
              <div onClick={this.closeMenu}>
                Activit&#259;&#355;i Re&#355;ea
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SubmenuRE
