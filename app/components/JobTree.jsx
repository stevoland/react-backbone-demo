var React          = require('react/addons');

var JobList        = require('./JobList.jsx');
var JobListItem    = require('./JobListItem.jsx');
var Treeview       = require('./Treeview.jsx');
var CollapsePanel  = require('react-bootstrap/lib/CollapsePanel');

module.exports     = React.createClass({
  getDefaultProps: function () {
    return {
      collection: [],
      disciplines: []
    };
  },

  render: function () {
    var trees = {};

    if (this.props.collection) {
      this.props.collection.forEach(function (model) {
        var discipline = model.get('discipline');
        var bundle = model.get('bundle');

        if (!trees[discipline]) {
          trees[discipline] = {};
        }

        if (!trees[discipline][bundle]) {
          trees[discipline][bundle] = [];
        }

        trees[discipline][bundle].push(model);
      }.bind(this));
    }

    var source = Object.keys(trees).map(function (discipline) {
      return {
        displayNode: React.DOM.span(
          {key: discipline},
          this.props.disciplines[discipline]
        ),
        children: Object.keys(trees[discipline]).map(function (bundle) {
          return {
            displayNode: React.DOM.span(
              {key: bundle},
              bundle
            ),
            children: [{
              displayNode: JobList(
                {
                  key: 'children-' + bundle,
                  jobs: trees[discipline][bundle]
                }
              )
            }]
          }
        })
      };
    }.bind(this));

    var onclick = function (e) {
      e.stopPropagation();
      console.info(e);
    }

    var headingChildren = (
      <span><input type="checkbox" onClick={onclick} /> Test</span>
    );

    return (
      <div>
        <Treeview source={source} />
        <CollapsePanel headingChildren={headingChildren} default={true}>
          Test content
        </CollapsePanel>
      </div>
    );
  }
});