import Component from '@glimmer/component'

export default class SkillsComponent extends Component {
  skillGroups = [
    {
      title: 'Systems thinking',
      icon: '🔍',
      summary: 'Digging past the surface to understand constraints, bottlenecks, and tradeoffs. Thoughtful design choices that compound over time.',
      items: ['Finding and eliminating bottlenecks', 'Anticipating failure modes early', 'Building for scale and resilience'],
    },
    {
      title: 'Code clarity & collaboration',
      icon: '🤝',
      summary: 'Making things reviewable, testable, and easy to hand off. Process that brings the best out of your team.',
      items: ['Code that\'s easy to review and validate', 'Streamlined workflows for faster shipping', 'Clear communication across boundaries'],
    },
    {
      title: 'Product engineering',
      icon: '⚡',
      summary: 'A practical mix of product sense, API design, and polished implementation from idea to launch.',
      items: ['Full-stack delivery across web apps', 'Thoughtful API and UX decisions', 'Shipping with reliability in mind'],
    },
  ]
}
