"use strict";

var tabLabels = ["Events", "Artists", "Venues", "Gigs", "Reports"];
var Col = ReactBootstrap.Col;

ReactDOM.render(React.createElement(
  Col,
  { xs: 12, md: 12 },
  React.createElement(TabsList, { labels: tabLabels })
), document.getElementById('reactRoot'));