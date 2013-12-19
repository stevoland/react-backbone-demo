var createController = require('react-app-controller/alternative');
var MainPage = require('./pages/MainPage.jsx');
var AboutPage = require('./pages/AboutPage.jsx');

var controller = createController({
  routes: {
    '/': MainPage,
    '/about': AboutPage
  },

  onClick: function(e) {
    if (e.target.tagName === 'A' && e.target.attributes.href) {
      e.preventDefault();
      this.navigate(e.target.attributes.href.value);
    }
  },

  componentDidMount: function() {
    window.addEventListener('click', this.onClick);
  },

  componentWillUnmount: function() {
    window.removeEventListener('click', this.onClick);
  }
});

//console.info(controller.render.toString());
document.addEventListener('DOMContentLoaded', function () {
  controller.render(document.body, '/');
});

