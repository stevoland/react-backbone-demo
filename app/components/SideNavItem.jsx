var React = require('react/addons');

var SideNavItem = React.createClass({
  getDefaultProps: function () {
    return {
      url: '#'
    };
  },

  render: function () {
    var className = this.props.selected ? 'active' : null;

    return (
      <li className={className} key={this.props.key}>
        <a href={this.props.url}>
          {this.props.text}
        </a>
      </li>
    );
  }
});

module.exports = SideNavItem;