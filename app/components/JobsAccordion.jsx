var React          = require('react/addons');

var Collapse       = require('react-bootstrap/lib/Collapse');
var JobList        = require('./JobList.jsx');
var JobListItem    = require('./JobListItem.jsx');

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
        var bundle = model.get('bundle') || 'Unbundled';

        if (!trees[discipline]) {
          trees[discipline] = {};
        }

        if (!trees[discipline][bundle]) {
          trees[discipline][bundle] = [];
        }

        trees[discipline][bundle].push(model);
      }.bind(this));
    }

    console.info(trees);

    // var source = Object.keys(trees).map(function (discipline) {
    //   return {
    //     displayNode: React.DOM.span(
    //       {key: discipline},
    //       this.props.disciplines[discipline]
    //     ),
    //     children: Object.keys(trees[discipline]).map(function (bundle) {
    //       return {
    //         displayNode: React.DOM.span(
    //           {key: bundle},
    //           bundle
    //         ),
    //         children: [{
    //           displayNode: JobList(
    //             {
    //               key: 'children-' + bundle,
    //               jobs: trees[discipline][bundle]
    //             }
    //           )
    //         }]
    //       }
    //     })
    //   };
    // }.bind(this));

    var accordions = Object.keys(trees).map(function (discipline) {
      var disciplineName = this.props.disciplines[discipline]

      return {
        <Collapse headerChildren={disciplineName} key={discipline}>
          {disciplineName + ' test'}
        </Collapse>
      };
    }.bind(this));


    return (
      <div>
        {accordions}
      </div>
    );
  }
});