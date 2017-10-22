"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ReactRouter = require('react-router-dom');

const Tab = ReactBootstrap.Tab
const Tabs = ReactBootstrap.Tabs

require('./home_main')

import MainPanel from "./home_main"

import { withRouter } from 'react-router-dom';

class TabsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0_Events};
  }

  handleSelect(key) {
    console.log("Key:", key);
    this.setState({activeTab: key);
    var path = "/" + key.split('_')[1]
    console.log("Path:", path);
    this.props.history.push({path})
  }

  render() {
    const tabItems = this.props.labels.map((label, idx) => {
      var evtKey = idx + "_" + label;
      console.log("evtKey:", evtKey);
      return <Tab key={idx} eventKey={evtKey} title={label}><MainPanel routePath={label} /></Tab>
    })
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">{tabItems}</Tabs>
    );
  }
}

export default TabsList
