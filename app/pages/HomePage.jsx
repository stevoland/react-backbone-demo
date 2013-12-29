var React          = require('react/addons');
var ReactApp       = require('react-app-page');
var Layout         = require('../components/Layout.jsx');

module.exports = ReactApp.createPage({
  componentDidMount: function () {
    this.setTitle('Project');
  },

  render: function () {
    return (
      <Layout selected="project">
        <section className="HomePage">
            <h1>Project</h1>
            <a href="/jobs">Jobs</a>
        </section>
      </Layout>
    );
  }
});