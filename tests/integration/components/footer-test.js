import { module, test } from 'qunit'
import { setupRenderingTest } from 'personal-portfolio/tests/helpers'
import { render } from '@ember/test-helpers'
import { hbs } from 'ember-cli-htmlbars'

module('Integration | Component | footer', function (hooks) {
  setupRenderingTest(hooks)

  test('it renders', async function (assert) {
    await render(hbs`<Footer />`)

    assert.dom('[data-test-label="home-link"]').exists()
    assert.dom('[data-test-label="home-link"]').hasText('Maysen Greenwood')
  })
})
