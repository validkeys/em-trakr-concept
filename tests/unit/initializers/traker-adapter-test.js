import Ember from 'ember';
import { initialize } from '../../../initializers/traker-adapter';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | traker adapter', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(registry, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
