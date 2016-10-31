import Ember from 'ember';

let applicationUrl = "https://peaceful-everglades-8933.herokuapp.com/";
let storeData = null;

export default Ember.Service.extend({

  init() {

  },

  getStores() {
    return Ember.$.getJSON(applicationUrl + "api/store?callback=?");
  },

  getProducts() {
    return Ember.$.getJSON(applicationUrl + "api/product?callback=?");
  },

  searchProducts(query){
    return Ember.$.getJSON(applicationUrl + 'api/product/search?query=' + query);
  },

  analytics(id, model) {
    return Ember.$.getJSON(applicationUrl + 'api/analytics?model=' + model + '&id=' +id)
  }
});
