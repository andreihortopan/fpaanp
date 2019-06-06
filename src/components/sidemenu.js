import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MyMenu from './menu';

export function setOpacity(value) {
  this.setState({ opacity: value })
}

// var button = (
//   <div style={{ position: 'relative' }}>
//     <div style={{ position: 'absolute' }}>
//       <img style={{ width: 80 }} src="/media/meniu.png" />
//     </div>
//     <div style={{ position: 'absolute', right: 0, marginRight: 5, marginTop: -10 }}>
//       <p style={{ color: 'white' }}>Meniu</p>
//     </div>
//   </ div >)

export class SideMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      opacity: 1,
    }

    setOpacity = setOpacity.bind(this)
  }

  showSettings(event) {
    event.preventDefault();
  }

  closeMenu = () => {
    this.setState({ isOpen: false })
  }

  render() {
    let styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '100px',
        left: '45px',
        top: '40px',
        opacity: this.state.opacity
      },
      bmBurgerBars: {
        background: '#bcbcbc',
        width: '15px',
      },
      bmCrossButton: {
        height: '24px',
        width: '24px',
        zIndex: 100,
      },
      bmCross: {
        background: '#bcbcbc'
      },
      bmMenu: {
        //background: '#FFFFFF',
        //padding: '2.5em 1.5em 0',
        //fontSize: '1.15em'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        //color: '#b8b7ad',
        //padding: '0.8em'
      },
      bmItem: {
        display: 'inline-block'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
      }
    }
    return (
      <Menu customBurgerIcon={<img src='/media/meniu.png' />} styles={styles} isOpen={this.state.isOpen}>
        <MyMenu closeFunc={this.closeMenu} />
      </Menu>
    );
  }
}

export default SideMenu;