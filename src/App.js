import React, { Component } from 'react';
import './App.css';
import { Canvas } from './components/canvas';
//import { Menu } from './components/menu';
import { SideMenu } from './components/sidemenu';
import { GraphMenu } from './components/graphmenu';
import ReactTooltip from 'react-tooltip';

//Main page ----- Incorporates main menu, canvas ('map' as default display option), graph menu (for interacting with the canvas)

class App extends Component {
  render() {
    return (
      <div style={{width: "100%", height: "100%", margin: "auto"}}>
        <SideMenu/>
        <div style={{width: "100%", height: "100%", margin: "auto"}}>
         
          <Canvas />
          <ReactTooltip multiline={true}/>
        </div>
      </div>
    );
  }
}

export default App;
