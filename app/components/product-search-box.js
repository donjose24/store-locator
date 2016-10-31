import Ember from 'ember';

export default Ember.Component.extend({
  searchQuery : '',
  results : null,
  isLoading : false,
  hasResults : function() {
    return this.get("results") !== null;
  }.property('results'),

  api : Ember.inject.service('medisearch-api'),

  actions :  {
    search : function() {
      let self = this;
      this.set('isLoading', true);
      let query = this.get('searchQuery');
      this.get('api').searchProducts(query).then(function(products) {
        console.log(products);
        self.set('isLoading',false);
        self.set('products', products);
      });
    },

    viewProduct : function(product) {
      this.$("#modal").fadeIn();
      this.set("product", product);
    }
  }

});
