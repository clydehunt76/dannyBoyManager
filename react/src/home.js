var ReactDOM = require('react-dom');
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

require('./home_tabs')

const tabLabels = ["Events", "Artists", "Venues", "Gigs", "Reports"]
const Col = ReactBootstrap.Col

import TabsList from "./home_tabs"
ReactDOM.render(
  <Col xs={12} md={12}>
    <TabsList labels={tabLabels}/>
  </Col>,
document.getElementById('reactRoot'));
