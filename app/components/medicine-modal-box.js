import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement : function() {
    console.log('pogi ako');
  },

  actions : {
    closeModal : function(){
      this.$("#modal").fadeOut();
    }
  }

});
