export default Ember.Object.extend({

  events: {
    "Page View": function(payload) {
      console.log(this.modelFor('application'))
      _.extend(payload, {
        applicationModel: this.modelFor('application').get('length') + " Application Models Present"
      });
      console.log(payload);
      return payload;
    }
  },

  process: function(context, eventName, payload) {
    if (this.events[eventName]) {
      return this.events[eventName].call(context, payload);
    } else {
      return payload;
    }

  }

});