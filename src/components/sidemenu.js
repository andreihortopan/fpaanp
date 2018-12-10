import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import MyMenu from './menu';

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '15px',
      height: '15px',
      left: '45px',
      top: '50px'
    },
    bmBurgerBars: {
      background: '#bcbcbc'
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


export class SideMenu extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu styles={styles}>
        <MyMenu/>
      </Menu>
    );
  }
}

export default SideMenu;