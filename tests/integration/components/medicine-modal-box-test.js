import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('medicine-modal-box', 'Integration | Component | medicine modal box', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{medicine-modal-box}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#medicine-modal-box}}
      template block text
    {{/medicine-modal-box}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
