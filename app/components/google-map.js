import Ember from 'ember';

export default Ember.Component.extend({

  api : Ember.inject.service('medisearch-api'),

  didInsertElement : function() {
    this._super();
    this.loadGoogleMapsScript();
  },

  insertMap : function() {
    let container = this.$('.map-canvas')[0];
    this.get('api').getStores().then(function(stores){
      navigator.geolocation.getCurrentPosition(function(pos){
        let options = {
          center : new window.google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          zoom :12
        };
        let map = new window.google.maps.Map(container, options);
        for(let index = 0; index < stores.length; ++index ) {
          new window.google.maps.Marker({
            position : new window.google.maps.LatLng(stores[index].lat, stores[index].long),
            map : map,
            title: stores[index].name
          });
        }
      });

    });
  },

  loadGoogleMapsScript : function() {
    let self = this;
    self.insertMap();
  }
});
