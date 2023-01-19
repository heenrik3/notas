import Note from './Note'

function NotesList(props) {
  const { notes } = props

  return (
    <div className="notes">
      <div className="notes__list">
        {notes.length ? (
          notes.map((note, index) => (
            <Note
              note={note}
              key={index}
              onChange={props.onChange}
              onDelete={props.onDelete}
            />
          ))
        ) : (
          <h2>Crie uma nota! 😃</h2>
        )}
      </div>
    </div>
  )
}

export default NotesList
