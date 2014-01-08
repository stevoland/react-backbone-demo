var React                 = require('react/addons');
var ReactTransitionGroup  = React.addons.TransitionGroup;

var JobListItem           = require('./JobListItem.jsx');
var JobListItemEditing    = require('./JobListItemEditing.jsx');

var JobList = React.createClass({
  renderItem: function (model) {
    var id = model.get('id');

    return JobListItem({
      id: id,
      key: id,
      name: model.get('name'),
      url: '/jobs/' + model.get('id'),
      checked: (this.props.checkedIds.indexOf(id) > -1),
      onChecked: this.props.onChecked,
      selected: (this.props.selectedJob && model.get('id') === this.props.selectedJob.get('id'))
    });
  },

  render: function () {
    var items = [],
        newJob = '';

    if (this.props.jobs) {
      items = this.props.jobs.map(this.renderItem);
    }

    if (this.props.addNewJob) {
      newJob = (
        <JobListItemEditing
          name={this.props.selectedJob.get('name')}
          onSave={this.props.onNewJobSave}
          onCancel={this.props.onNewJobCancel}
          onChange={this.props.onJobNameChange}
        />
      );
    }

    return (
      <ReactTransitionGroup
        transitionName="job"
        component={React.DOM.ul}
        className="JobList">
        {items}
        {newJob}
      </ReactTransitionGroup>
    );
  }
});

module.exports = JobList;