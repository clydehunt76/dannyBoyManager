"use strict";

var _home_tabs = require("./home_tabs");

var _home_tabs2 = _interopRequireDefault(_home_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabLabels = ["Events", "Artists", "Venues", "Gigs", "Reports"];
var Col = ReactBootstrap.Col;

ReactDOM.render(React.createElement(
  Col,
  { xs: 12, md: 12 },
  React.createElement(_home_tabs2.default, { labels: tabLabels })
), document.getElementById('reactRoot'));