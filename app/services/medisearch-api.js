import Ember from 'ember';

let applicationUrl = "https://peaceful-everglades-8933.herokuapp.com/";
let storeData = null;

export default Ember.Service.extend({

  init() {

  },

  getStores() {
    return new Promise(function(resolve, reject){
      if(storeData) {
        resolve(storeData);
      } else {
        Ember.$.getJSON(applicationUrl + "api/store?callback=?")
        .then((stores) => {
          storeData = stores;
          resolve(storeData);
        });
      }
    });
  }
});
