import Component from '@glimmer/component'
import { registerDestructor } from '@ember/destroyable'

export default class NavbarComponent extends Component {
  constructor() {
    super(...arguments)
    this.handleScroll = this.handleScroll.bind(this)
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()

    registerDestructor(this, () => {
      window.removeEventListener('scroll', this.handleScroll)
    })
  }

  handleScroll() {
    const nav = document.querySelector('nav.navbar')
    if (!nav) return

    if (window.scrollY > 100) {
      nav.classList.add('navbar--scrolled')
    } else {
      nav.classList.remove('navbar--scrolled')
    }
  }
}
