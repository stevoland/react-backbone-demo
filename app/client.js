var createController = require('react-app-page');
var JobsPage = require('./pages/JobsPage.jsx');
var HomePage = require('./pages/HomePage.jsx');
var JobPage = require('./pages/JobPage.jsx');
var NewJobPage = require('./pages/NewJobPage.jsx');

// Only required to get react-devtools to work:
// https://github.com/facebook/react-devtools#the-react-tab-doesnt-show-up
window.React = require('react/addons');

var controller = createController({
  routes: {
    '/': HomePage,
    '/jobs': JobsPage,
    '/jobs/:id': JobPage,
    '/jobs/new/:newJobDiscipline': NewJobPage
  },

  onClick: function (e) {
    var current = e.target,
        href;

    while (current) {
      if (current.tagName === 'A') {
        href = current.attributes.href && current.attributes.href.value;
        if (href && href.indexOf('#') !== 0) {
          e.preventDefault();
          this.navigate(href);
        }
      }

      current = current.parentNode;
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