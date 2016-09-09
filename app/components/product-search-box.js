import Ember from 'ember';

export default Ember.Component.extend({
  searchQuery : '',

  actions :  {
    search : function() {
      console.log(this.get('searchQuery'));
    }
  }

});
