"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

const Tab = ReactBootstrap.Tab
const Tabs = ReactBootstrap.Tabs

require('./home_main')

import MainPanel from "./home_main"

class TabsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

  handleSelect(key) {
    this.setState({activeTab: key});
  }

  render() {
    const tabItems = this.props.labels.map((label, idx) => {
      return <Tab key={idx} eventKey={idx} title={label}>{label}</Tab>
    })
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect.bind(this)} id="controlled-tab-example">{tabItems}</Tabs>
    );
  }
}

export default TabsList
