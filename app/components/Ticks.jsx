var React = require('react');

var Ticks = React.createClass({

  _tick: function () {
    this.setState({
      ticks: this.state.ticks + 1
    });
  },

  getInitialState: function () {
    return {
      ticks: 0
    }
  },

  componentDidMount: function () {
    this.interval = setInterval(this._tick, 1000);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  componentWillReceiveProps: function (newProps) {
  },

  render: function () {
    return (
      <div>{this.state.ticks}</div>
    );
  }
});


module.exports = Ticks;