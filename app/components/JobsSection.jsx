var React          = require('react/addons');
var ButtonDropdown = require('react-bootstrap/lib/ButtonDropdown');
var JobTree        = require('./JobTree.jsx');
var Disciplines    = require('../const/Disciplines');

var Jobs           = React.createClass({
  handleCreateClick: function (key) {
    this.props.controller.navigate('/jobs/new/' + key);
  },

  render: function () {
    return (
      <section>
        <h1>Jobs</h1>
        <div>
          <ButtonDropdown
            title="Create"
            primary={true}
            options={Disciplines}
            onClick={this.handleCreateClick}
          />
        </div>
        <JobTree
          collection={this.props.collection}
          disciplines={Disciplines}
        />
      </section>
    );
  }
});

module.exports = Jobs;