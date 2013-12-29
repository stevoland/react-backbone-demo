var Backbone = require('backfire');

// An example generic Mixin that you can add to any component that should react
// to changes in a Backbone component. The use cases we've identified thus far
// are for Collections -- since they trigger a change event whenever any of
// their constituent items are changed there's no need to reconcile for regular
// models. One caveat: this relies on getModel() to always return the
// same model instances throughout the lifecycle of the component. If you're
// using this mixin correctly (it should be near the top of your component
// hierarchy) this should not be an issue.

var BackboneMixin = {
  componentDidMount: function () {
    var model = this.getModel();

    if (model instanceof Backbone.Collection) {
      model.on('add remove reset sort', function () {
        this.forceUpdate();
      }, this);
    } else if (model) {
      var changeOptions = this.changeOptions || 'change';
      model.on(changeOptions, (this.onModelChange || function () {
        this.forceUpdate();
      }), this);
    }
  },

  componentWillUnmount: function () {
    // Ensure that we clean up any dangling references when the component is destroyed.
    var model = this.getModel();
    if (!!model) {
      model.off(null, null, this);
    }
  }
};

module.exports = BackboneMixin;