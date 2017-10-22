"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ReactRouterDom = require('react-router-dom')

import { BrowserRouter, Switch, Route } from 'react-router-dom'
const Panel = ReactBootstrap.Panel

require('./home_main')

import Events from "./home_events"


export default class MainPanel extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Panel>
          Basic panel example for {this.props.routePath}
          <Switch>
             <Route path='/events' component={Events}/>
             <Route path='/artists' component={Events}/>
             <Route path='/venues' component={Events}/>
             <Route path='/gigs' component={Events}/>
             <Route path='/reports' component={Events}/>
           </Switch>
        </Panel>
        </BrowserRouter>
    );
  }
}
