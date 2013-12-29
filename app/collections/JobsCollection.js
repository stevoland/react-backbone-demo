var Backbone = require('backfire');
var JobModel = require('../models/JobModel');

module.exports = Backbone.Firebase.Collection.extend({
  model: JobModel,
  firebase: 'https://stevoland.firebaseio.com/jobs'
});