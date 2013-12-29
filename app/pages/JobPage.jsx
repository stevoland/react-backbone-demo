var React                = require('react/addons');
var ReactApp             = require('react-app-page');
var Layout               = require('../components/Layout.jsx');
var JobsSection          = require('../components/JobsSection.jsx');
var JobDetails           = require('../components/JobDetails.jsx');
var BackboneMixin        = require('../mixins/BackboneMixin');
var JobsCollectionMixin  = require('../mixins/JobsCollectionMixin');

module.exports = ReactApp.createPage({
  mixins: [JobsCollectionMixin, BackboneMixin],

  render: function () {
    var collection = this.getModel(),
        model = collection.findWhere({id: this.props.id}),
        title = model ? 'Job: ' + model.get('name') : 'Job';

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