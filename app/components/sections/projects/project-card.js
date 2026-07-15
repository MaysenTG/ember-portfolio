import Component from '@glimmer/component'

export default class ProjectComponent extends Component {
  get project() {
    return this.args.project
  }

  skillsList(skillsString) {
    if (!skillsString) return []
    return skillsString.split(',').map(skill => skill.trim())
  }
}
