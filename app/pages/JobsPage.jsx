var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

module.exports = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  componentDidMount: function () {
    this.setTitle('Jobs');
  },

  render: function () {
    return (
      <Layout selected="jobs">
        <div className="JobsPage">
          <JobsSection
            collection={this.getModel()}
            controller={this.controller}
          />
        </div>
      </Layout>
    );
  }
});