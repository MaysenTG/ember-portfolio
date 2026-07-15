import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | component | sections/skills', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a prominent skills section with core strengths', async function (assert) {
    await render(hbs`<Sections::Skills />`);

    assert.dom('[data-test-skills-section]').exists('renders the skills section');
    assert.dom('[data-test-skills-section]').includesText('What I bring to a team');
    assert.dom('[data-test-skills-section]').includesText('SQL & data');
    assert.dom('[data-test-skills-section]').includesText('Git & delivery');
  });
});
