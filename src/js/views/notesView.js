import { Note } from '../components/Note.js'

class NotesView {
  _parentEl = document.querySelector('.notes__list')
  _data
  _message = 'Nenhuma nota salva. <br>Comece adicionando uma \u{1F642} </br>'

  constructor() {
    this.addHandlerAddAttention()
    this.addHandlerRemoveAttention()
  }

  render(data) {
    this._data = data
    const markup = this._generateMarkup()
    this._clear()
    this._parentEl.insertAdjacentHTML('afterbegin', markup)

    this._loadData()
  }

  _clear() {
    this._parentEl.innerHTML = ''
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <i class="fas fa-spinner"></i>
        </div>
    `
    this._parentEl.insertAdjacentHTML('beforeend', markup)
  }

  _loadData() {
    const allNotes = this._parentEl.querySelectorAll('.note')

    allNotes.forEach((note, i) => {
      note.children[0].value = this._data[i].text
    })
  }

  _loseFocus(note) {
    note.blur()
  }

  _generateMarkup() {
    const m = this._data.map((data) => {
      return Note(data)
    })

    return m.join('')
  }

  renderMessage() {
    const markup = `<h3>${this._message}</h3>`
    this._clear()
    this._parentEl.insertAdjacentHTML('afterbegin', markup)
  }

  addHandlerSaveNote(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const save_btn = e.target.closest('.note__save')
      if (!save_btn) return

      const note = save_btn.parentNode.parentNode

      const data = {
        color: note.classList[1],
        id: parseInt(note.id),
        text: note.querySelector('.note__input').value,
      }

      handler(data)
    })
  }

  addHandlerDeleteNote(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const del_btn = e.target.closest('.note__delete')
      if (!del_btn) return

      const note = del_btn.parentNode.parentNode

      handler(parseInt(note.id))
    })
  }

  addHandlerAddAttention() {
    this._parentEl.addEventListener('focusin', function (e) {
      const input = e.target.closest('.note__input')
      if (!input) return

      const note = input.parentNode
      note.classList.add('note_attention')

      const save_btn = input.parentNode.querySelector('.note__save')
      save_btn.classList.add('attention')
    })
  }

  addHandlerRemoveAttention() {
    this._parentEl.addEventListener('focusout', function (e) {
      const input = e.target.closest('.note__input')
      if (!input) return

      const note = input.parentNode
      note.classList.remove('note_attention')

      const save_btn = input.parentNode.querySelector('.note__save')
      save_btn.classList.remove('attention')
    })
  }
}

export default new NotesView()
