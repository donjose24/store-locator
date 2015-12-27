import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement : function() {
    this._super();
    this.loadGoogleMapsScript();
  },
  insertMap : function() {
    let container = this.$('.map-canvas')[0];
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(pos){
         var options = {
          center : new window.google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
          zoom :15
        };       
        new window.google.maps.Map(container, options);
      },function(error){
        var options = {
          center : new window.google.maps.LatLng(10, 10),
          zoom :15
        };
        new window.google.maps.Map(container, options);
      });
    }
  },

  loadGoogleMapsScript : function() {
    let self = this;
    window.map_callback = function() {
      self.insertMap();
    };
    $.getScript( 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=map_callback' );
  }
});
