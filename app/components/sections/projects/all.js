import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { projects } from 'ember-portfolio/utils/projects'

export default class ProjectsAllComponent extends Component {
  @tracked projects = projects
}
