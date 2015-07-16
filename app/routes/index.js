import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    let Traker = this.get('traker');
    Traker.push(this, "Page View", { id: 1, name: "Kyle" });
  }

});
