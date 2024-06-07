import Component from '@glimmer/component'
import { action, computed, setProperties } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service'

export default class ContactComponent extends Component {
  @service swal
  @tracked sending = false

  @computed('email', 'name', 'message')
  get isFormValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(this.email)) {
      return false
    }

    return this.email && this.name && this.message
  }

  @action
  async submitForm() {
    if (!this.isFormValid) return

    this.sending = true

    const data = {
      service_id: 'service_wjf5wfb',
      template_id: 'template_olzhave',
      user_id: 'TiRBbXDxSv2TWXsYW',
      template_params: {
        name: this.name,
        email: this.email,
        message: this.message,
      },
    }

    try {
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      this.sending = false

      this.swal.fire({
        title: 'Form submitted!',
        text: 'Thank you for reaching out. I will get back to you as soon as possible.',
        icon: 'success',
        button: 'Close',
      })
    } catch {
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
}
