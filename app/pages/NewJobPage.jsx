var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var JobDetails           = require('../components/JobDetails.jsx');
var JobModel             = require('../models/JobModel');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

module.exports = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  render: function () {
    var collection = this.getModel();
        model = new JobModel({
          name: 'New Job',
          discipline: this.props.newJobDiscipline
        }),
        title = 'Job:' + model.get('name');

    this.setTitle(title);

    return (
      <Layout selected="jobs">
        <div className="JobPage">
          <JobsSection
            collection={collection}
            model={model}
            controller={this.controller}
          />
          <JobDetails model={model} />
        </div>
      </Layout>
    );
  }
});