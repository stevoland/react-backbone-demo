var React          = require('react/addons');

var CollapsePanel  = require('react-bootstrap/lib/CollapsePanel');
var JobList        = require('./JobList.jsx');


module.exports     = React.createClass({
  getInitialState: function () {
    return {
      trees: {}
    };
  },

  openFlags: {},

  renderDisciplineAccordion: function (id) {
    var disciplineName = this.props.disciplines[id];

    var bundles = Object.keys(this.state.trees[id]).map(
      function (bundleName) {
        return this.renderBundleAccordion(id, bundleName);
      }.bind(this)
    );

    return (
      <CollapsePanel
        headingChildren={disciplineName}
        key={id}
        id={id}
        default={true}
        isStateful={true}
        isOpen={true}>
        <div className="panel-group">
          {bundles}
        </div>
      </CollapsePanel>
    );
  },

  renderBundleAccordion: function (disciplineId, bundleName) {
    var id = disciplineId + '-' + bundleName,
        headingChildren = (
          //<span><input type="checkbox" onClick={this.handleCheckboxClick} />{' '}{bundleName}</span>
          bundleName
        ),
        hasNewJob = (this.props.newJobDiscipline === disciplineId && bundleName === 'Unbundled');

    return (
      <CollapsePanel
        headingChildren={headingChildren}
        key={bundleName}
        default={true}
        isStateful={true}
        isOpen={true}>
          <JobList
            jobs={this.state.trees[disciplineId][bundleName]}
            checkedIds={this.props.checkedIds}
            onChecked={this.props.onChecked}
            selectedJob={this.props.selectedJob}
            addNewJob={hasNewJob}
            onJobNameChange={this.props.onJobNameChange}
            onNewJobSave={this.props.onNewJobSave}
            onNewJobCancel={this.props.onNewJobCancel}
          />
      </CollapsePanel>
    );
  },

  handleCheckboxClick: function (e) {
    e.stopPropagation();
  },

  componentWillMount: function () {
    this.configureState(this.props);
  },

  componentWillReceiveProps: function (nextProps) {
    this.configureState(nextProps);
  },

  configureState: function (props) {
    var trees = {};

    if (props.collection) {
      props.collection.forEach(function (model) {
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

    if (this.props.newJobDiscipline && !trees[this.props.newJobDiscipline]) {
      trees[this.props.newJobDiscipline] = {
        'Unbundled': []
      };
    }

    this.setState({
      trees: trees
    });
  },

  render: function () {
    var accordions = Object.keys(this.state.trees).map(
      this.renderDisciplineAccordion
    );

    return (
      <div className="panel-group">
        {accordions}
      </div>
    );
  }
});