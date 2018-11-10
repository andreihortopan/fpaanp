import React, { Component } from 'react';
import './App.css';
import { RomaniaMap } from './romaniaMapRSM';
import { Canvas } from './canvas';
import { Menu } from './menu';
import { GraphMenu } from './graphmenu';

//Main page ----- Incorporates main menu, canvas ('map' as default display option), graph menu (for interacting with the canvas)

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div style={{width: "100%", height: "100%", margin: "auto"}}>
       <Menu />
       <GraphMenu />
       <Canvas />
      </div>
     
    );
  }
}

export default App;
