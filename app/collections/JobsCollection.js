var Backfire = require('backfire');
var JobModel = require('../models/JobsModel');

var JobsCollection = Backfire.Collection.extend({
    model: JobModel,
    firebase: "https://stevoland.firebaseio.com"
  });

module.exports = JobsCollection;