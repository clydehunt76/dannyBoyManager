"use strict";
var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

const Panel = ReactBootstrap.Panel

export default class MainPanel extends React.Component {
  render() {
    return(
      <Panel>
        Basic panel example
      </Panel>
    );
  }
}
