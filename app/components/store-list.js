import Ember from 'ember';

export default Ember.Component.extend({
  actions : {
    viewStore : function(store) {
      this.set("store", store);
    }
  }

});
