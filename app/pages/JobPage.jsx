var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var JobDetails           = require('../components/JobDetails.jsx');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

var JobPage = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  render: function () {
    var collection = this.getModel(),
        model = collection.findWhere({id: this.props.id}),
        title = model ? 'Job: ' + model.get('name') : 'Job';

    this.setTitle(title);

    return (
      <Layout selected="jobs">
        <div className="page JobPage">
          <JobsSection
            collection={collection}
            selectedJob={model}
            controller={this.controller}
            onClone={this.handleClone.bind(this)}
            onDelete={this.handleDelete.bind(this)}
          />
          <JobDetails model={model} />
        </div>
      </Layout>
    );
  }
});

module.exports = JobPage;