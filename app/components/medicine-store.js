import Ember from 'ember';

export default Ember.Component.extend({

  location : {},

  proximityStore: Ember.computed('stores.@each', function(){
    var that = this;
    return this.get('stores').map(function(store){
      return {
        'distance': that.getDistance(store.lat, store.long, that.location.latitude, that.location.longitude).toFixed(2)
      };
    });
  }),

  deg2rad: function (deg) {
    return deg * (Math.PI/180)
  },

  getDistance: function (lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  },

  didInsertElement : function() {
    var that = this;
    navigator.geolocation.getCurrentPosition(function(pos){
      that.set('location', {latitude : pos.coords.latitude, longitude : pos.coords.longitude});
    });
  },

  didUpdate : function() {
    console.log(this.get('proximityStore'));
  }
});
