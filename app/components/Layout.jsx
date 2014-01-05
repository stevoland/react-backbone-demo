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
      <div className="flex-container">
        <div className="flex-leftbar">
          <SideNav pages={this.props.pages} selected={this.props.selected} />
        </div>
        <div className="flex-content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Layout;