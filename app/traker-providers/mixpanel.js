export default Ember.Object.extend({

  trakerRegistry: Ember.inject.service(),

  // This should be the only method that the user has to create
  emit: function(name, payload) {
    console.log("Sending to mixpanel: ", payload);
    // mixpanel.track()
  },


  // These should be in the parent private class
  preProcess: function( context, name, eventName, payload ) {
    let processor = this.container.lookup("traker-processor:" + name);
    if (!processor) { return payload; }
    if (processor) {
      console.log("Processor found for: " + name);
      return processor.process(context, eventName, payload);
    }
  },
  // These should be in the parent private class
  process: function(context, eventName, payload) {
    let key = this._debugContainerKey,
        name = key.split(":")[1];
    payload = this.preProcess(context, name, eventName, payload );
    this.emit(eventName, payload);
    this.get('trakerRegistry').send(name, eventName, payload);
  }

});