import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Canvas } from './components/canvas'
import Members from './components/members'
import NetworkActivity from './components/networkActivity'
import Calendar from './components/calendar'
import About from './components/about'
import PublicFundings from './components/publicFundings'
import { SideMenu } from './components/sidemenu'
import ReactTooltip from 'react-tooltip'
import Popup from 'react-popup'
import ReactGA from 'react-ga'
import './App.css'
import './popup.css'

// Main page ----- Incorporates main menu, canvas ('map' as default display option), graph menu (for interacting with the canvas)

class App extends Component {
  constructor(props) {
    super(props)
    this.initializeReactGA()
  }

  initializeReactGA() {
    ReactGA.initialize('UA-149850509-1')
    ReactGA.pageview('/date-si-resurse')
  }

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
            <Route exact path='/activitati-retea' component={NetworkActivity} />
            <Route exact path='/evenimente' component={Calendar} />
            <Route exact path='/despre' component={About} />
            <Route exact path='/legislatie' component={PublicFundings} />
            <Route render={() => <Redirect to='/date-si-resurse/harta' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
