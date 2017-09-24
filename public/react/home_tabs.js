"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = ReactBootstrap.Tab;
var Tabs = ReactBootstrap.Tabs;

var TabsList = function (_React$Component) {
  _inherits(TabsList, _React$Component);

  function TabsList() {
    _classCallCheck(this, TabsList);

    return _possibleConstructorReturn(this, (TabsList.__proto__ || Object.getPrototypeOf(TabsList)).apply(this, arguments));
  }

  _createClass(TabsList, [{
    key: "render",
    value: function render() {
      var tabItems = this.props.labels.map(function (label, idx) {
        return React.createElement(
          Tab,
          { key: idx, eventKey: idx, title: label },
          "Content Goes Here"
        );
      });
      return (
        // <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        React.createElement(
          Tabs,
          { defaultActiveKey: 0, id: "primary-tabs" },
          tabItems
        )
      );
    }
  }]);

  return TabsList;
}(React.Component);