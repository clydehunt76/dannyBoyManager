const tabLabels = ["Events", "Artists", "Venues", "Gigs", "Reports"]
const Col = ReactBootstrap.Col

ReactDOM.render(
  <Col xs={12} md={12}>
    <TabsList labels={tabLabels}/>
  </Col>,
document.getElementById('reactRoot'));
