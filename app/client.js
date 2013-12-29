var createController = require('react-app-page');
var JobsPage = require('./pages/JobsPage.jsx');
var HomePage = require('./pages/HomePage.jsx');
var JobPage = require('./pages/JobPage.jsx');
var NewJobPage = require('./pages/NewJobPage.jsx');

var controller = createController({
  routes: {
    '/': HomePage,
    '/jobs': JobsPage,
    '/jobs/:id': JobPage,
    '/jobs/new/:newJobDiscipline': NewJobPage
  },

  onClick: function (e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.navigate(e.target.attributes.href.value);
    }
  },

  componentDidMount: function () {
    window.addEventListener('click', this.onClick);
  },

  componentWillUnmount: function () {
    window.removeEventListener('click', this.onClick);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  controller.render(document.body, window.location.pathname);
});