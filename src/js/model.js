export const state = {
  notes: [],
}
const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'gray', 'pink']

const Note = () => {
  return {
    color: colors[Math.floor(Math.random() * colors.length)],
    id: state.notes.length,
    text: '',
  }
}

export async function increaseNoteCount(data) {
  if (data) {
    state.notes[data.id].text = data.text
  } else {
    const emptyNote = Note()

    state.notes.push(emptyNote)
  }

  persistNotes()
}

export async function decreaseNoteCount(index) {
  state.notes.splice(index, 1)

  state.notes.forEach((item, index) => {
    item.id = index
  })

  persistNotes()
}

async function persistNotes() {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

async function start() {
  const storage = localStorage.getItem('notes')
  if (storage) state.notes = JSON.parse(storage)
}

start()
