import Component from '@glimmer/component'
import { action, setProperties } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import Swal from 'sweetalert2'
import ENV from 'ember-portfolio/config/environment'

export default class ContactComponent extends Component {
  @tracked sending = false
  @tracked email = ''
  @tracked name = ''
  @tracked message = ''

  get isFormValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(this.email) && this.email && this.name && this.message
  }

  @action
  async submitForm() {
    if (!this.isFormValid) return

    this.sending = true

    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.emailBody()),
      })

      Swal.fire({
        title: 'Form submitted!',
        text: 'Thank you for reaching out. I will get back to you as soon as possible.',
        icon: 'success',
      })
    } catch (error) {
      console.log(error)

      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while submitting the form. Please try again later.',
        icon: 'error',
      })
    }

    setProperties(this, {
      email: '',
      name: '',
      message: '',
      sending: false,
    })
  }

  emailBody() {
    const { service_id, template_id, user_id } = ENV.EMAIL_JS

    return {
      service_id,
      template_id,
      user_id,
      template_params: {
        name: this.name,
        email: this.email,
        message: this.message,
      },
    }
  }
}
