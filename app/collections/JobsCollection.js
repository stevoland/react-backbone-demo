//var Backfire = require('backfire');
var JobModel = require('../models/JobModel');

var JobsCollection = Backbone.Firebase.Collection.extend({
      model: JobModel,
      firebase: "https://stevoland.firebaseio.com"
    });

module.exports = JobsCollection;