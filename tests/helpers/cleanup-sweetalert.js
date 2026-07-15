import Swal from 'sweetalert2'

export function cleanupSweetAlert() {
  Swal.close()
  document.querySelectorAll('.swal2-container').forEach((container) => {
    container.remove()
  })
}

export function setupSweetAlertCleanup(hooks) {
  hooks.afterEach(function () {
    cleanupSweetAlert()
  })
}
