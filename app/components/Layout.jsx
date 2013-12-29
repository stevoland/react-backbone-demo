var React = require('react/addons');
var SideNav = require('./SideNav.jsx');

var Layout = React.createClass({

  getDefaultProps: function () {
    return {
      pages: [
        {
          id: 'project',
          text: 'Project',
          url: '/'
        },
        {
          id: 'jobs',
          text: 'Jobs',
          url: '/jobs'
        }
      ]
    };
  },

  render: function () {
    return (
      <div className="row">
        <div className="col-md-2">
          <SideNav pages={this.props.pages} selected={this.props.selected} />
        </div>
        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Layout;