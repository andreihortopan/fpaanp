import React, { Component } from 'react';
import './App.css';
import { Canvas } from './components/canvas';
import { Menu } from './components/menu';
import { GraphMenu } from './components/graphmenu';

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
