"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

const Tab = ReactBootstrap.Tab
const Tabs = ReactBootstrap.Tabs


export default class TabsList extends React.Component {
  render() {
    const tabItems = this.props.labels.map((label, idx) => {
      return <Tab key={idx} eventKey={idx} title={label}>Content Goes Here</Tab>
    })
    return (
      // <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
      <Tabs defaultActiveKey={0} id="primary-tabs">{tabItems}</Tabs>
    );
  }
}
