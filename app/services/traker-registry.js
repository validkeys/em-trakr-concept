import Ember from 'ember';

export default Ember.Object.extend({

  _registry: {},

  on: function(trakerName, eventName, fnc) {
    console.log("Registering hook for " + eventName);
    this._registry[trakerName] = this._registry[trakerName] || {};
    this._registry[trakerName][eventName] = this._registry[trakerName][eventName]  || [];
    this._registry[trakerName][eventName].push(fnc);
    console.log(this._registry);
  },

  bulkOn: function(trakerName, events) {
    _.each(events, (fnc, key) => {
      this.on(trakerName, key, fnc);
    });
  },

  send: function(trackerName, eventName, payload) {
    console.log("Registry send method called with", arguments);
    let _registry = this.get('_registry');
    if (_registry[trackerName] && _registry[trackerName][eventName]) {
      _.each(_registry[trackerName][eventName], function(fnc) {
        fnc.call(null, payload);
      })
    }
  }
});