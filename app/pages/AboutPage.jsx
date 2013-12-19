var React          = require('react-tools/build/modules/React');
var ReactApp       = require('react-app-controller/alternative');
var Ticks          = require('../components/Ticks.jsx');
var Layout         = require('../components/Layout.jsx');

var AboutPage = ReactApp.createPage({

  render: function () {
    return (
      <Layout selected="about">
        <div className='AboutPage'>
          <div>AboutPage</div>
          <Ticks />
          <a href="/">Main</a>
        </div>
      </Layout>
    );
  }
});

module.exports = AboutPage;