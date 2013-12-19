// var Backfire = require('backfire');

var JobModel = Backbone.Firebase.Model.extend({
      idAttribute: "url",
      firebase: "https://stevoland.firebaseio.com"
    });

module.exports = JobModel;