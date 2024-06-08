import Component from '@glimmer/component'
import { action, setProperties } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service'
import environment from 'ember-portfolio/config/environment'

export default class ContactComponent extends Component {
  @service swal
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

      this.sending = false

      this.swal.fire({
        title: 'Form submitted!',
        text: 'Thank you for reaching out. I will get back to you as soon as possible.',
        icon: 'success',
        button: 'Close',
      })
    } catch (error) {
      this.swal.fire({
        title: 'Error!',
        text: 'An error occurred while submitting the form. Please try again later.',
        icon: 'error',
        button: 'Close',
      })
    }

    setProperties(this, {
      email: '',
      name: '',
      message: '',
    })
  }

  emailBody() {
    const { service_id, template_id, user_id } = environment.emailJS

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
