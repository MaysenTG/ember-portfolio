import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { projects } from 'personal-portfolio/utils/projects'

export default class ProjectsAllComponent extends Component {
  @tracked sending = false

  get allProjects() {
    return null
    return projects
  }
}
