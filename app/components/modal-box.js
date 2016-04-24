import Ember from 'ember';

export default Ember.Component.extend({ 
  storeChanged : function() {
    this.loadGoogleMapsScript();
  }.observes('store').on('init'),

  insertMap : function() {
    let container = Ember.$('.map-canvas')[0];
    let store = this.get('store');
    navigator.geolocation.getCurrentPosition(function(pos){
      let options = {
        center : new window.google.maps.LatLng(store.lat, store.long),
        zoom :18
      };
      let map = new window.google.maps.Map(container, options);
      new window.google.maps.Marker({
        position : new window.google.maps.LatLng(store.lat, store.long),
        map : map,
        title: store.name
      });
    });
  },

  loadGoogleMapsScript : function() {
    let self = this;
    self.insertMap();
  },

  actions : {
    closeModal : function(){
      this.$("#modal").fadeOut();
    }
  }

});
