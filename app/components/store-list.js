import Ember from 'ember';
import $ from 'jquery'

export default Ember.Component.extend({

  api: Ember.inject.service('medisearch-api'),

  isLoading : true,

  didInsertElement : function() {
    let self = this;
    this.get('api').getStores().then(function(stores){
      self.set('isLoading', false);
      self.set('stores', stores);
    });
  },

  actions : {
    viewStore : function(store) {
      this.$("#modal").fadeIn();
      this.set("store", store);
    }
  }

});
