import Ember from 'ember';

export default Ember.Route.extend({

  api : Ember.inject.service('medisearch-api'),

  model() {
    return this.get('api').getStores();
  }
});
