import React, { Component } from 'react';
import { SubmenuRE } from './submenure';
import { SubmenuFP } from './submenufp';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';
import { changeCanvas } from './canvas';
import { resetGraphMenuState } from './graphmenu';
import '../transition.css';

//Size constants
const MENU_MARGIN = 20;
const MENU_WIDTH = 240;
const MENU_PADDING = 20;

//Menu styling with regards to look and interior styling (eg. padding)
const menuLook = {
  backgroundColor: "#FFFFFF",
  borderRadius: "2px",
  boxShadow: "1px 1px 4px 1px #bababa",
  padding: MENU_PADDING,
  paddingBottom: MENU_PADDING/2,
  paddingTop: MENU_PADDING/2,
}

//Menu styling with regards to exterior styling (eg. margin)
const menuStyle = {
  position: "fixed",
  zIndex: 100,
  width: MENU_WIDTH,
  minHeight: "auto",
  marginTop: MENU_MARGIN,
  marginLeft: MENU_MARGIN,
  marginBottom: MENU_MARGIN,
};

//Submenu style, for popups on hover
const submenuStyle = {
  width: 100,
  position: "absolute",
  zIndex: 99,
  width: MENU_WIDTH,
  marginLeft: MENU_WIDTH + 2*MENU_MARGIN + 2*MENU_PADDING,
}

//Menu list styling
const listStyle = {
  listStyleType: "none",
  paddingLeft: 10,
  marginRight: -MENU_MARGIN,
  marginLeft: -MENU_MARGIN,
  paddingLeft: MENU_MARGIN + 10
}

//Menu items styling
const itemStyle = {
  marginBottom: MENU_PADDING - 5,
}

//Text styling -- not yet implemented
const textStyle = {
  //TODO add text styling
}

//Menu -- top left menu
//TODO Fix CSStransitions
//TODO Modularize menu item with a separate component.
export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReteaExpertiMenu: false,
      showFinantariPubliceMenu: false,
    }
  }

  handleHoverRE = (event) => {
    this.setState({ showReteaExpertiMenu: true });
  }

  handleLeaveRE = (event) => {
    this.setState({ showReteaExpertiMenu: false });
  }

  handleHoverFP = (event) => {
    this.setState({ showFinantariPubliceMenu: true });
  }

  handleLeaveFP = (event) => {
    this.setState({ showFinantariPubliceMenu: false });
  }

  render() {
    return (
      <div>
          <div style={{
            ...menuStyle,
            ...menuLook,
            ...textStyle,
          }}>
            <img 
                alt="Logo"
                src="media/website_logo.png"
                style={{
                  paddingTop: MENU_PADDING/2,
                  maxWidth: MENU_WIDTH,
                  marginBottom: -10,
                  //maxHeight: 100,
            }}/>
            <ul style={{
              ...listStyle,
            }}>
              <li 
                key="menu-1"
                onMouseEnter = {this.handleHoverRE} 
                onMouseLeave = {this.handleLeaveRE}
              ><a href="#">
                <div style={{
                  display: 'inline-block',
                  width: 210,
                  height: 35,
                }}>
                  <p>Re&#355;ea Exper&#355;i</p>
                </div>
                <div style={{
                  display: 'inline-block',
                }}>
                  <FontAwesome name="angle-right"/>
                </div>
                </a>
              </li>
              <li 
                key="menu-2"
                onMouseEnter = {this.handleHoverFP}
                onMouseLeave = {this.handleLeaveFP}
              ><a href="#">
                <div style={{
                  display: 'inline-block',
                  width: 210,
                  height: 35
                }}>
                  <p>Finan&#355;&#259;ri Publice</p>
                </div>
                <div style={{
                  display: 'inline-block',
                }}>
                  <FontAwesome name="angle-right"/>
                </div>
                </a>
              </li>
              <li 
                key="menu-3"
                onClick = {() => {changeCanvas("Calendar"); resetGraphMenuState();}}
              ><a href="#">
                <p>Evenimente</p>
                </a>
              </li>
              <li key="menu-4"
                
              ><a href="#">
                <p>&#350;tiri</p>
                </a>
              </li>
            </ul>
          </div>
          <div 
            onMouseEnter = {this.handleHoverRE}
            onMouseLeave = {this.handleLeaveRE}
            style={{
              ...submenuStyle,
              marginTop: MENU_MARGIN + MENU_PADDING + 90,
          }}>
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              { this.state.showReteaExpertiMenu && <SubmenuRE key="1"/> }
            </CSSTransitionGroup>
          </div>
          <div 
            onMouseEnter = {this.handleHoverFP}
            onMouseLeave = {this.handleLeaveFP}
            style={{
              ...submenuStyle,
              marginTop: MENU_MARGIN + MENU_PADDING + 125,
          }}>
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              { this.state.showFinantariPubliceMenu && <SubmenuFP key="2"/> }
            </CSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export { MENU_MARGIN };
export { MENU_PADDING };
export { MENU_WIDTH };
export { menuStyle };
export { itemStyle };
export { listStyle };
export { menuLook }; 
export default Menu;
