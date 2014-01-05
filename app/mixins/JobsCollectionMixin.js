var JobsCollection       = require('../collections/JobsCollection');

module.exports = {
  getModel: function () {
    // Store instance so it persists between page changes
    if (!this.controller.jobs) {
      this.controller.jobs = new JobsCollection();
    }

    return this.controller.jobs;
  },

  handleClone: function (ids) {
    if (Object.prototype.toString.call(ids) === '[object Array]' ) {
      ids.forEach(function (id) {
        this.handleClone(id);
      }.bind(this));

      return;
    }

    this.getModel().cloneModelById(ids);
  },

  handleDelete: function (ids) {
    if (Object.prototype.toString.call(ids) === '[object Array]' ) {
      ids.forEach(function (id) {
        this.handleDelete(id);
      }.bind(this));

      return;
    }
    this.getModel().removeModelById(ids);
  }
};