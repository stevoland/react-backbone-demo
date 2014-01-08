var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var JobDetails           = require('../components/JobDetails.jsx');
var JobModel             = require('../models/JobModel');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

var newJobPage = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  handleNewJobSave: function () {
    this.getModel().add(this.newJobModel);
    this.createNewJobModel();
    this.forceUpdate();
  },

  handleNewJobCancel: function () {
    this.controller.navigate('/jobs');
  },

  handleJobNameChange: function (newName) {
    this.getNewJobModel().set('name', newName);
    this.controller.refs.details.forceUpdate();
  },

  createNewJobModel: function () {
      this.newJobModel = new JobModel({
        name: 'New Job',
        discipline: this.props.newJobDiscipline,
        created: Date.now()
      });
  },

  getNewJobModel: function () {
    if (!this.newJobModel) {
      this.createNewJobModel();
    }

    return this.newJobModel;
  },

  render: function () {
    var title = 'New job: ' + this.getNewJobModel().get('name');

    this.setTitle(title);

    return (
      <Layout selected="jobs">
        <div className="page JobPage">
          <JobsSection
            collection={this.getModel()}
            selectedJob={this.getNewJobModel()}
            controller={this.controller}
            onClone={this.handleClone.bind(this)}
            onDelete={this.handleDelete.bind(this)}
            onJobNameChange={this.handleJobNameChange.bind(this)}
            onNewJobSave={this.handleNewJobSave.bind(this)}
            onNewJobCancel={this.handleNewJobCancel.bind(this)}
            newJobDiscipline={this.props.newJobDiscipline}
          />
          <JobDetails ref="details" model={this.getNewJobModel()} />
        </div>
      </Layout>
    );
  }
});

module.exports = newJobPage;