var React          = require('react-tools/build/modules/React');
var ReactApp       = require('react-app-controller/alternative');
var Ticks          = require('../components/Ticks.jsx');
var Layout         = require('../components/Layout.jsx');

var MainPage = ReactApp.createPage({
  pageWillMount: function () {
    console.info('pageWillMount');
  },

  pageDidMount: function () {
    console.info('pageDidMount');
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
        </div>
      </Layout>
    );
  }
});

module.exports = MainPage;