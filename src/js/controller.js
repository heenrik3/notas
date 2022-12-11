'use strict'
import * as model from './model.js'
import navbarView from './views/navbarView.js'
import notesView from './views/notesView.js'
import notifyView from './views/notifyView.js'

async function controlAddNote() {
  model.increaseNoteCount()
  notesView.render(model.state.notes)
  notifyView.newNotification('success', 'Nota criada.')
}

async function controlDeleteNote(index) {
  model.decreaseNoteCount(index)

  notesView.render(model.state.notes)

  notifyView.newNotification('error', 'Nota excluída.')
}

async function controlSaveNote(data) {
  model.increaseNoteCount(data)
  notifyView.newNotification('success', 'Nota salva.')
}

async function controlTheme() {
  const root = document.querySelector('.root')
  root.classList.toggle('dark')
}

function start() {
  navbarView.addHandlerNewNote(controlAddNote)
  navbarView.addHandlerThemeChange(controlTheme)
  notesView.addHandlerSaveNote(controlSaveNote)
  notesView.addHandlerDeleteNote(controlDeleteNote)

  notesView.render(model.state.notes)
}

start()
