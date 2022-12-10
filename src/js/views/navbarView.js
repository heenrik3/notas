class NavbarView {
  _parentEl = document.querySelector('.navbar')

  addHandlerNewNote(handler) {
    this._parentEl.addEventListener('click', function (e) {
      e.preventDefault()

      const btn = e.target.closest('.add-note')
      if (!btn) return

      handler()
    })
  }

  addHandlerThemeChange(handler) {
    this._parentEl.addEventListener('click', function (e) {
      e.preventDefault()

      const btn = e.target.closest('.theme-toggle')
      if (!btn) return

      handler()
    })
  }

  renderSpinner() {
    const spinner = this._parentEl.querySelector('.spinner')
    if (spinner) return

    const markup = `
          <div class="spinner">
            <i class="fas fa-spinner"></i>
          </div>
      `.trim()
    this._parentEl.insertAdjacentHTML('beforeend', markup)
  }

  removeSpinner() {
    const spinner = this._parentEl.childNodes[1].nextElementSibling
    if (!spinner) return

    if (spinner.classList.contains('spinner')) {
      this._parentEl.removeChild(this._parentEl.childNodes[3])
    }
  }
}

export default new NavbarView()
