import Component from '@glimmer/component'

export default class NavbarComponent extends Component {
  constructor() {
    super(...arguments)
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    window.onscroll = function () {
      if (window.scrollY <= 100) {
        document.querySelector('nav.navbar').style.backdropFilter = 'blur(0px)'
        document.querySelector('nav.navbar').style.background = null
      } else {
        document.querySelector('nav.navbar').style.backdropFilter = 'blur(5px)'
        document.querySelector('nav.navbar').style.background = 'rgba(5, 10, 48, 0.7)'
      }
    }
  }
}
