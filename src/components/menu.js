import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import { SubmenuRE } from './submenure'
import { SubmenuFP } from './submenufp'
import { CSSTransitionGroup } from 'react-transition-group'
import FontAwesome from 'react-fontawesome'
import '../transition.css'
import Popup from 'react-popup'

// Size constants
const MENU_MARGIN = 20
const MENU_WIDTH = 240
const MENU_PADDING = 20

// Menu styling with regards to look and interior styling (eg. padding)
const menuLook = {
  backgroundColor: '#FFFFFF',
  // borderRadius: "2px",
  // boxShadow: "1px 1px 4px 1px #bababa",
  padding: MENU_PADDING,
  paddingBottom: MENU_PADDING / 2,
  paddingTop: MENU_PADDING / 2
}

// Menu styling with regards to exterior styling (eg. margin)
const menuStyle = {
  position: 'fixed',
  zIndex: 100,
  width: MENU_WIDTH + 20,
  height: window.innerHeight
  // height: window.innerHeight - 2*MENU_MARGIN - 2*MENU_PADDING,
  // marginTop: MENU_MARGIN,
  // marginLeft: MENU_MARGIN,
  // marginBottom: MENU_MARGIN,
}

// Submenu style, for popups on hover
const submenuStyle = {
  position: 'absolute',
  zIndex: 99,
  width: MENU_WIDTH,
  marginLeft: MENU_WIDTH + 2 * MENU_MARGIN + 2 * MENU_PADDING
}

// Menu list styling
const listStyle = {
  listStyleType: 'none',
  marginRight: -MENU_MARGIN,
  marginLeft: -MENU_MARGIN,
  paddingLeft: MENU_MARGIN + 10
}

// Menu items styling
const itemStyle = {
  marginBottom: MENU_PADDING - 5
}

// Text styling -- not yet implemented
const textStyle = {
  // TODO add text styling
}

const lineStyle = {
  display: 'block',
  height: 1,
  border: 0,
  margin: 0,
  marginRight: MENU_MARGIN + MENU_PADDING,
  marginTop: MENU_PADDING,
  borderTop: '1px solid #bcbcbc',
  padding: 0,
  clear: 'both'
}

// Menu -- top left menu
// TODO Fix CSStransitions
// TODO Modularize menu item with a separate component.
export class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showReteaExpertiMenu: false,
      showFinantariPubliceMenu: false
    }
  }

  handlePopupClick = () => {
    Popup.create({
      title: 'Cum se citează',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut lacinia mi, ut eleifend purus. Suspendisse odio risus, mollis eu est et, efficitur dapibus dolor. Suspendisse a dignissim nunc, sit amet hendrerit lacus. Curabitur semper nunc nec dictum dictum. In eleifend interdum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing.',
      buttons: {
        left: [
          {
            text: 'Închide',
            className: 'danger',
            action: function () {
              Popup.close()
            }
          }
        ],
        right: [
          {
            text: 'Copiază',
            action: function () {
              var textArea = document.createElement('textarea')
              textArea.value =
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut lacinia mi, ut eleifend purus. Suspendisse odio risus, mollis eu est et, efficitur dapibus dolor. Suspendisse a dignissim nunc, sit amet hendrerit lacus. Curabitur semper nunc nec dictum dictum. In eleifend interdum posuere. Lorem ipsum dolor sit amet, consectetur adipiscing.'
              document.body.appendChild(textArea)
              textArea.focus()
              textArea.select()

              try {
                var successful = document.execCommand('copy')
                var msg = successful ? 'successful' : 'unsuccessful'
                console.log('Fallback: Copying text command was ' + msg)
              } catch (err) {
                console.error('Fallback: Oops, unable to copy', err)
              }

              document.body.removeChild(textArea)
            }
          }
        ]
      }
    })
  }

  handleHoverRE = event => {
    this.setState({ showReteaExpertiMenu: true })
  }

  handleLeaveRE = event => {
    this.setState({ showReteaExpertiMenu: false })
  }

  handleHoverFP = event => {
    this.setState({ showFinantariPubliceMenu: true })
  }

  handleLeaveFP = event => {
    this.setState({ showFinantariPubliceMenu: false })
  }

  render () {
    return (
      <div>
        <div
          style={{
            ...menuStyle,
            ...menuLook,
            ...textStyle
          }}
        >
          <Link to='/date-si-resurse'>
            <img
              alt='Logo'
              src='/media/fpaan.png'
              style={{
                paddingTop: MENU_PADDING / 2,
                maxWidth: MENU_WIDTH,
                marginBottom: -10
                // maxHeight: 100,
              }}
            />
          </Link>
          <ul
            style={{
              ...listStyle
            }}
          >
            <li
              key='menu-1'
              onMouseEnter={this.handleHoverRE}
              onMouseLeave={this.handleLeaveRE}
            >
              <a href='#'>
                <div
                  style={{
                    display: 'inline-block',
                    width: 210,
                    height: 35
                  }}
                >
                  <p>Re&#355;ea Exper&#355;i</p>
                </div>
                <div
                  style={{
                    display: 'inline-block'
                  }}
                >
                  <FontAwesome name='angle-right' />
                </div>
              </a>
            </li>
            <li
              key='menu-2'
              // onMouseEnter={this.handleHoverFP}
              // onMouseLeave={this.handleLeaveFP}
            >
              <Link to='/finantari-publice'>
                {/* <div
                  style={{
                    display: 'inline-block',
                    width: 210,
                    height: 35
                  }} */}
                <p>Finan&#355;&#259;ri Publice</p>
                {/* </div>
                <div
                  style={{
                    display: 'inline-block'
                  }}
                >
                  <FontAwesome name='angle-right' />
                </div> */}
              </Link>
            </li>
            <li key='menu-3' onClick={() => {}}>
              <Link to='/evenimente'>
                <p>Evenimente</p>
              </Link>
            </li>
            <li key='menu-4'>
              <a href='#'>
                <p>&#350;tiri</p>
              </a>
            </li>
            <li key='menu-0' onClick={() => {}}>
              <Link to='/date-si-resurse'>
                <p>Date &#351;i resurse</p>
              </Link>
            </li>
            <hr style={{ ...lineStyle }} />
            <li key='menu-5' onClick={this.handlePopupClick}>
              <a href='#'>
                <p>Cum se citeaz&#259;</p>
              </a>
            </li>
            <li key='menu-6'>
              <Link to='/despre'>
                <p>Despre proiect</p>
              </Link>
            </li>
            <hr style={{ ...lineStyle }} />
          </ul>
          <img
            alt='Parteneri'
            src='/media/logos.png'
            style={{
              paddingTop: 0,
              maxWidth: MENU_WIDTH + MENU_MARGIN
              // maxHeight: 100,
            }}
          />
        </div>
        <div
          onMouseEnter={this.handleHoverRE}
          onMouseLeave={this.handleLeaveRE}
          style={{
            ...submenuStyle,
            marginTop: MENU_MARGIN + MENU_PADDING + 70
          }}
        >
          <CSSTransitionGroup
            transitionName='slide'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.showReteaExpertiMenu && <SubmenuRE key='1' />}
          </CSSTransitionGroup>
        </div>
        <div
          onMouseEnter={this.handleHoverFP}
          onMouseLeave={this.handleLeaveFP}
          style={{
            ...submenuStyle,
            marginTop: MENU_MARGIN + MENU_PADDING + 105
          }}
        >
          <CSSTransitionGroup
            transitionName='slide'
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.showFinantariPubliceMenu && <SubmenuFP key='2' />}
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export { itemStyle }
export { listStyle }
export default Menu
