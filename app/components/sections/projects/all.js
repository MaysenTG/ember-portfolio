import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'

export default class ProjectsAllComponent extends Component {
  @tracked loadingProjects = true
  // @tracked projects

  constructor() {
    super(...arguments)

    setTimeout(() => {
      this.loadingProjects = false
    }, 1000)

    this.getProjects()
  }

  getProjects() {
    this.projects = null
  }
}
