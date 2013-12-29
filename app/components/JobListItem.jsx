var React          = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <li key={this.props.key}>
        <a href={this.props.url}>{this.props.name}</a>
      </li>
    );
  }
});