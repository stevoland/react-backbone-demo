var React          = require('react');
var ReactApp       = require('react-app-controller/alternative');
var Ticks          = require('../components/Ticks.jsx');
var Layout         = require('../components/Layout.jsx');
var JobsCollection = require('../collections/JobsCollection');

var MainPage = ReactApp.createPage({
  pageWillMount: function () {
    console.info('pageWillMount');
  },

  pageDidMount: function () {
    console.info('pageDidMount');

    this.collection = new JobsCollection();
    this.collection.on('change', this.render.bind(this));
  },

  pageWillUnmount: function () {
    console.info('pageWillUnmount');
  },

  pageDidUnmount: function () {
    console.info('pageDidUnmount');
  },

  render: function () {
    return (
      <Layout selected="main">
        <div className='MainPage'>
          <div>MainPage</div>
          <Ticks />
          <a href="/about">About</a>
          <div></div>
        </div>
      </Layout>
    );
  }
});

module.exports = MainPage;