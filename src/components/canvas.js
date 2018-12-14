import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { RomaniaMap } from './romaniaMapRSM'
import { BarChartView } from './barChartView'
import { TableView } from './tableView'
import { GraphMenu } from './graphmenu'

const canvasStyle = {
  display: 'flex',
  padding: 0,
  margin: 0
}

export class Canvas extends Component {
  render () {
    return (
      <div style={{ canvasStyle }}>
        <GraphMenu tip={this.props.match.params.tip} />
        <Switch>
          <Route exact path='/date-si-resurse/harta' component={RomaniaMap} />
          <Route exact path='/date-si-resurse/tabel' component={TableView} />
          <Route
            exact
            path='/date-si-resurse/grafic'
            component={BarChartView}
          />
          <Route render={() => <Redirect to='/date-si-resurse/harta' />} />
        </Switch>
      </div>
    )
  }
}

export default Canvas
