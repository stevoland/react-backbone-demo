var React                = require('react/addons');
var Button               = require('react-bootstrap/lib/Button');

var JobDetails = React.createClass({
  render: function () {
    return (
      <div className="JobDetails">
        <h2>{this.props.model ? this.props.model.get('name') : ''}</h2>
        <Button href="/jobs" primary={true}>Close</Button>
      </div>
    );
  }
});

module.exports = JobDetails;