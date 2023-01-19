import { useRef } from 'react'

function Note(props) {
  const { note } = props

  const noteText = useRef()

  function handleOnChange(e) {
    const text = noteText.current.value

    props.onChange(text)
  }

  function handleOnDelete(e) {
    const button = e.target.closest('.note__delete')
    if (!button) return
    console.log(button.parentNode.parentNode.id)

    props.onDelete(+button.parentNode.parentNode.id)
  }

  return (
    <div className={'note ' + note.color} id={note.id}>
      {/* <h2 className="note__title">{note.title}</h2> */}
      {/* <textarea
        className="note__text"
        defaultValue={note.text}
        onChange={handleOnChange}
        ref={noteText}
      ></textarea> */}
      <span
        className="note__text"
        // defaultValue={note.text}
        // onChange={handleOnChange}
        // ref={noteText}
      >
        {note.text}
      </span>

      <div className="note__actions">
        <button className="note__delete" onClick={handleOnDelete}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  )
}

export default Note
