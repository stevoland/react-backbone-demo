var Backbone = require('backfire');
var JobModel = require('../models/JobModel');

module.exports = Backbone.Firebase.Collection.extend({
  model: JobModel,
  firebase: 'https://stevoland.firebaseio.com/jobs',

  cloneModelById: function (id) {
    var newModel = this.findWhere({id: id}).clone();
    newModel.set('name', newModel.get('name') + ' 2');
    newModel.unset('id');

    this.add(newModel);
  },

  removeModelById: function (id) {
    this.remove(this.findWhere({id: id}));
  }
});