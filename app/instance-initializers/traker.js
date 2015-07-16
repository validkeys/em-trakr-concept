import ENV from 'dynamic-injection/config/environment';

export function initialize(application) {

  let trackerRegistry = application.container.lookup("service:traker-registry");

  // Setup all of the hooks
  let customTrakers = _.keys(ENV.traker.providers);
  _.each(customTrakers, function(customTrakerName) {
    let hook = application.container.lookup("traker-hook:" + customTrakerName);
    if (hook) {
      trackerRegistry.bulkOn(customTrakerName, hook.get('hooks'));
    }
  });

  // Inject the traker service
  application.registry.injection("route", "traker", "service:traker");
}

export default {
  name: 'traker',
  initialize: initialize
};