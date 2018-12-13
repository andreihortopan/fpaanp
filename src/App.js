import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import './App.css'
import { Canvas } from './components/canvas'
import Members from './components/members'
import Calendar from './components/calendar'
import About from './components/about'
import PublicFundings from './components/publicFundings'
// import { Menu } from './components/menu';
import { SideMenu } from './components/sidemenu'
import { GraphMenu } from './components/graphmenu'
import ReactTooltip from 'react-tooltip'
import Popup from 'react-popup'
import './popup.css'

// Main page ----- Incorporates main menu, canvas ('map' as default display option), graph menu (for interacting with the canvas)

class App extends Component {
  render () {
    return (
      <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
        <SideMenu />
        <div style={{ width: '100%', height: '100%', margin: 'auto' }}>
          <ReactTooltip multiline />
          <Popup />

          {/* Route '/' will show About us page
              In the meantime, we redirect to map page */}

          <Switch>
            <Route path='/date-si-resurse/:tip' component={Canvas} />
            <Route path='/date-si-resurse' component={Canvas} />
            <Route path='/membri' component={Members} />
            <Route path='/evenimente' component={Calendar} />
            <Route path='/despre' component={About} />
            <Route path='/finantari-publice' component={PublicFundings} />
            <Route render={() => <Redirect to='/date-si-resurse' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
