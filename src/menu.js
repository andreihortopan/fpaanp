import React, { Component } from 'react';
import { SubmenuRE } from './submenure';
import { SubmenuFP } from './submenufp';
import { SubmenuE } from './submenue';
import { CSSTransitionGroup } from 'react-transition-group';
import FontAwesome from 'react-fontawesome';

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
  position: "absolute",
  zIndex: 0,
  width: MENU_WIDTH,
  minHeight: "auto",
  marginTop: MENU_MARGIN,
  marginLeft: MENU_MARGIN,
  marginBottom: MENU_MARGIN,
};

//Submenu style, for popups on hover
const submenuStyle = {
  position: "absolute",
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
      showEvenimenteMenu: false,
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

  handleHoverE = (event) => {
    this.setState({ showEvenimenteMenu: true });
  }

  handleLeaveE = (event) => {
    this.setState({ showEvenimenteMenu: false });
  }

  render() {
    return (
      <div>
          <div style={{
            ...menuStyle,
            ...menuLook,
            ...textStyle,
          }}>
            <img src="website_logo4.png" style={{
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
              >
                <div style={{
                  display: 'inline-block',
                  width: 210,
                  height: 35
                }}>
                  <p>Retea Experti</p>
                </div>
                <div style={{
                  display: 'inline-block',
                }}>
                  <FontAwesome name="angle-right"/>
                </div>
              </li>
              <li 
                key="menu-2"
                onMouseEnter = {this.handleHoverFP}
                onMouseLeave = {this.handleLeaveFP}
              >
                <div style={{
                  display: 'inline-block',
                  width: 210,
                  height: 35
                }}>
                  <p>Finantari Publice</p>
                </div>
                <div style={{
                  display: 'inline-block',
                }}>
                  <FontAwesome name="angle-right"/>
                </div>
              </li>
              <li 
                key="menu-3"
                onMouseEnter = {this.handleHoverE}
                onMouseLeave = {this.handleLeaveE}
              >
                <div style={{
                  display: 'inline-block',
                  width: 210,
                  height: 35
                }}>
                  <p>Evenimente</p>
                </div>
                <div style={{
                  display: 'inline-block',
                }}>
                  <FontAwesome name="angle-right"/>
                </div>
              </li>
              <li key="menu-4">
                <p>Stiri</p>
              </li>
            </ul>
          </div>
          <div 
            onMouseEnter = {this.handleHoverRE}
            onMouseLeave = {this.handleLeaveRE}
            style={{
              ...submenuStyle,
              marginTop: MENU_MARGIN + MENU_PADDING + 50,
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
              marginTop: MENU_MARGIN + MENU_PADDING + 90,
          }}>
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              { this.state.showFinantariPubliceMenu && <SubmenuFP key="2"/> }
            </CSSTransitionGroup>
          </div>
          <div 
            onMouseEnter = {this.handleHoverE}
            onMouseLeave = {this.handleLeaveE}
            style={{
              ...submenuStyle,
              marginTop: MENU_MARGIN + MENU_PADDING + 130,
          }}>
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              { this.state.showEvenimenteMenu && <SubmenuE key="3"/> }
            </CSSTransitionGroup>
          </div>
      </div>
    );
  }
}

export { MENU_PADDING };
export { MENU_WIDTH };
export { menuStyle };
export { itemStyle };
export { listStyle };
export { menuLook }; 
export default Menu;
