import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import environment from 'ember-portfolio/config/environment'

export default class ProjectsAllComponent extends Component {
  @tracked loadingProjects = true
  @tracked projects = []

  constructor() {
    super(...arguments)

    setTimeout(() => {
      this.loadingProjects = false
    }, 1000)

    this.getProjects()
  }

  apiUrl() {
    return environment.APP.apiUrl
  }

  apiHeaders() {
    return {
      'Content-Type': 'application/json',
      apikey: environment.APP.apiKey,
      Authorization: `Bearer ${environment.APP.apiAuthToken}`,
    }
  }

  async getProjects() {
    const projects = await fetch(`${this.apiUrl()}?select=*&order=position`, {
      headers: this.apiHeaders(),
    })

    const data = await projects.json()

    this.projects = data
  }
}
