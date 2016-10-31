import Ember from 'ember';

export default Ember.Component.extend({

  seniorCitizenPrice: Ember.computed('product.{price}', function() {
    let price = this.get('product.price');
    return (price * 0.90).toFixed(2);
  }),

  actions : {
    closeModal : function(){
      this.$("#modal").fadeOut();
    }
  },

  didInsertElement : function() {
    console.log(this.get('product'));
  }
});

