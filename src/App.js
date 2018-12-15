import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Canvas } from './components/canvas'
import Members from './components/members'
import Calendar from './components/calendar'
import About from './components/about'
import PublicFundings from './components/publicFundings'
import { SideMenu } from './components/sidemenu'
import ReactTooltip from 'react-tooltip'
import Popup from 'react-popup'
import './App.css'
import './popup.css'

// Main page ----- Incorporates main menu, canvas ('map' as default display option), graph menu (for interacting with the canvas)

class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
        <SideMenu />
        <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
          <ReactTooltip multiline />
          <Popup />

          <Switch>
            <Route exact path='/date-si-resurse/:tip' component={Canvas} />
            <Route exact path='/membri' component={Members} />
            <Route exact path='/evenimente' component={Calendar} />
            <Route exact path='/despre' component={About} />
            <Route exact path='/finantari-publice' component={PublicFundings} />
            <Route render={() => <Redirect to='/date-si-resurse/harta' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
