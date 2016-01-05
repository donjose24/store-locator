import Ember from 'ember';

let applicationUrl = "https://peaceful-everglades-8933.herokuapp.com/";

export default Ember.Service.extend({

  init() {

  },

  getStores() {
    return Ember.$.getJSON(applicationUrl + "api/store?callback=?");
  }
});
