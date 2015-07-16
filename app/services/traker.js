import Ember from 'ember';
import ENV from 'dynamic-injection/config/environment';

let trakerConfig = ENV.traker;

export default Ember.Service.extend({

  push: function(context, eventName, payload, excludes) {
    let providers = _.keys(trakerConfig.providers);
    let arr = _.map(providers, (providerName) => {
      return this.container.lookup('traker-provider:' + providerName);
    });
    arr.invoke('process', context, eventName, payload, excludes);
  }

});
