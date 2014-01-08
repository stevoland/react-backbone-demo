var React          = require('react/addons');

var JobListItem = React.createClass({
  onClick: function (e) {
    this.props.onChecked(this.props.id);
  },

  render: function () {
    var className = React.addons.classSet({
      "JobListItem": true,
      "selected": this.props.selected
    });

    return (
      <li key={this.props.key} className={className}>
        <input type="checkbox" onClick={this.onClick} checked={this.props.checked} />
        {' '}
        <a href={this.props.url}>
          {this.props.name}
        </a>
      </li>
    );
  }
});

module.exports = JobListItem;