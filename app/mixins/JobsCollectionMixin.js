var JobsCollection       = require('../collections/JobsCollection');

module.exports = {
  getModel: function () {
    // Store instance so it persists between page changes
    if (!this.controller.jobs) {
      this.controller.jobs = new JobsCollection();
    }

    return this.controller.jobs;
  }
};