export const state = {
  notes: [],
}

const Note = (data) => {
  return {
    id: data.id,
    color: data.color,
    text: data.text,
  }
}

export const addNote = (data) => {
  state.notes.push(Note(data))
}

export async function increaseNoteCount(data) {
  if (data) {
    state.notes[data.id]['text'] = data['text']
  } else {
    const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'gray', 'pink']
    const new_data = {
      color: colors[Math.floor(Math.random() * colors.length)],
      id: state.notes.length,
      text: '',
    }
    state.notes.push(new_data)
  }

  persistNotes()
}

export async function decreaseNoteCount(index) {
  state.notes.splice(index, 1)

  for (var i = index; i < state.notes.length; i++) {
    state.notes[i]['id'] -= 1
  }

  persistNotes()
}

function persistNotes() {
  localStorage.setItem('notes', JSON.stringify(state.notes))
}

function clearNotes() {
  localStorage.clear('notes')
}

function start() {
  const storage = localStorage.getItem('notes')
  if (storage) state.notes = JSON.parse(storage)
}

start()
