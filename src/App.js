import { useState } from 'react'

import Header from './components/Header'
import NotesList from './components/NotesList'
import Modal from './components/Modal'

import './sass/main.sass'
import Footer from './components/Footer'

let notes = []

// const notesColors = [
//   'red',
//   'pink',
//   'purple',
//   'deep-purple',
//   'indigo',
//   'blue',
//   'light-blue',
//   'cyan',
//   'teal',
//   'green',
//   'light-green',
//   'lime',
//   'yellow',
//   'amber',
//   'orange',
//   'deep-orange',
//   'brown',
//   'blue-grey',
// ]

function createId() {
  while (true) {
    const id = Math.round(Math.random() * (notes.length + 1))

    if (!notes.some((note) => note.id === id)) return id
  }
}

// for (let index = 0; index < 20; index++) {
//   const i = Math.floor(Math.random() * notesColors.length)

//   notes.push({ text: ' ', id: createId(), color: notesColors[i] })
// }

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes))
}

function loadNotes() {
  const storage = localStorage.getItem('notes')
  if (storage) notes = JSON.parse(storage)
}

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [changed, setChanged] = useState(false)
  const [searchText, setSearchText] = useState('')

  loadNotes()

  function handleSearchNote(text) {
    setSearchText(text)
  }

  function handleCreateNote() {
    setModalIsOpen(true)
  }

  function handleDeleteNote(id) {
    notes = notes.filter((note) => id !== note.id)
    saveNotes()
    setChanged(!changed)
  }

  function handleModalConfirm(data) {
    if (data.text) {
      data.id = createId()
      notes.push(data)

      saveNotes()
    }

    setModalIsOpen(false)
  }

  function handleModalCancel() {
    setModalIsOpen(false)
  }

  function parseNotes() {
    return searchText !== ''
      ? notes.filter((note) => note.text.includes(searchText))
      : notes
  }

  return (
    <div className="app">
      <Header onChange={handleSearchNote} onClick={handleCreateNote} />
      <NotesList notes={parseNotes()} onDelete={handleDeleteNote} />
      {modalIsOpen && (
        <Modal onConfirm={handleModalConfirm} onCancel={handleModalCancel} />
      )}
      <Footer />
    </div>
  )
}

export default App
