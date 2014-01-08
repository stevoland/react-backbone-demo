var React          = require('react/addons');
var Button         = require('react-bootstrap/lib/Button');
var ButtonDropdown = require('react-bootstrap/lib/ButtonDropdown');
var JobsAccordion  = require('./JobsAccordion.jsx');
var Disciplines    = require('../const/Disciplines');

var JobsSection = React.createClass({
  handleCreateClick: function (key) {
    this.props.controller.navigate('/jobs/new/' + key);
  },

  getInitialState: function () {
    return {
      checkedIds: []
    };
  },

  handleChecked: function (ids) {
    var checkedIds = this.state.checkedIds;

    if (typeof ids !== 'object') {
      ids = [ids];
    }

    checkedIds = checkedIds.filter(function (id) {
      var index = ids.indexOf(id);

      if (index > -1) {
        ids.splice(index, 1);
        return false;
      }

      return true;
    });

    checkedIds = checkedIds.concat(ids);

    this.setState({
      checkedIds: checkedIds
    });
  },

  componentWillReceiveProps: function (nextProps) {
    if (nextProps.selectedJob) {
      this.setState({
        checkedIds: [nextProps.selectedJob.get('id')]
      });
    }
  },

  handleCloneClick: function () {
    this.props.onClone(this.state.checkedIds);
    this.setState({
      checkedIds: []
    });
    this.props.controller.navigate('/jobs');
  },

  handleMoreClick: function (operation) {
    switch (operation) {
      case 'delete':
        this.props.onDelete(this.state.checkedIds);
        this.setState({
          checkedIds: []
        });
    }

    this.props.controller.navigate('/jobs');
  },

  render: function () {
    var moreOptions = {'delete': 'Delete'},
        contextButons = this.state.checkedIds.length ?
        (
          <span>
            {' '}<Button onClick={this.handleCloneClick}>Clone</Button>
            {' '}<ButtonDropdown
                  title="More"
                  options={moreOptions}
                  onClick={this.handleMoreClick}
                />
          </span>
        ) : '';

    return (
      <section className="JobsSection">
        <h1>Jobs</h1>
        <div className="buttons">
          <ButtonDropdown
            title="Create"
            primary={true}
            options={Disciplines}
            onClick={this.handleCreateClick}
          />
          {contextButons}
        </div>
        <JobsAccordion
          collection={this.props.collection}
          disciplines={Disciplines}
          checkedIds={this.state.checkedIds}
          selectedJob={this.props.selectedJob}
          onChecked={this.handleChecked}
          onJobNameChange={this.props.onJobNameChange}
          onNewJobSave={this.props.onNewJobSave}
          onNewJobCancel={this.props.onNewJobCancel}
          newJobDiscipline={this.props.newJobDiscipline}
        />
      </section>
    );
  }
});

module.exports = JobsSection;