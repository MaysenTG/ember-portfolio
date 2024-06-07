import Component from '@glimmer/component'

export default class ProjectComponent extends Component {
  get project() {
    return this.args.project
  }
}
