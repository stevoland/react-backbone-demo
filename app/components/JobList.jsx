var React                 = require('react/addons');
var ReactTransitionGroup  = React.addons.TransitionGroup;

var JobListItem           = require('./JobListItem.jsx');

module.exports = React.createClass({
  render: function () {
    var items = [];

    if (this.props.jobs) {
      items = this.props.jobs.map(function (model) {
        return JobListItem({
          key: model.get('id'),
          name: model.get('name'),
          url: '/jobs/' + model.get('id')
        });
      });
    }

    return (
      <ReactTransitionGroup
        transitionName="job"
        component={React.DOM.ul}>
        {items}
      </ReactTransitionGroup>
    );
  }
});