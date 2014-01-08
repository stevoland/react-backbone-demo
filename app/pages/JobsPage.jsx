var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

var JobsPage = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  componentDidMount: function () {
    this.setTitle('Jobs');
  },

  render: function () {
    return (
      <Layout selected="jobs">
        <div className="page JobsPage">
          <JobsSection
            collection={this.getModel()}
            controller={this.controller}
            onClone={this.handleClone.bind(this)}
            onDelete={this.handleDelete.bind(this)}
          />
        </div>
      </Layout>
    );
  }
});

module.exports = JobsPage;