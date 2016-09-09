import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  api : Ember.inject.service('medisearch-api'),

  isLoading : true,

  didInsertElement : function() {
    let self = this;
    this.get('api').getProducts().then(function(products){
      self.set('isLoading', false);
      self.set('products', products);
    });
  },

  actions : {
    viewProduct : function(product) {
      this.$("#modal").fadeIn();
      this.set("product", product);
    }
  }
});
