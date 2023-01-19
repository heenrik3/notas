import { useState } from 'react'

const notesColors = [
  'red',
  'pink',
  'purple',
  'deep-purple',
  'indigo',
  'blue',
  'light-blue',
  'cyan',
  'teal',
  'green',
  'light-green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'deep-orange',
  'brown',
  'blue-grey',
]

function Modal(props) {
  const [text, setText] = useState('')
  const [color, setColor] = useState(notesColors[0])

  const handleConfirm = (e) => {
    e.preventDefault()

    props.onConfirm({
      text,
      color,
    })
  }
  const handleCancel = (e) => {
    props.onCancel()
  }

  return (
    <div className="modal">
      <div className="modal__bg" onClick={handleCancel}>
        &nbsp;
      </div>
      <div className="modal__content">
        <h3>Digite o texto da nota...</h3>
        <textarea
          className="modal__text"
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <div className="modal__actions">
          <div className="modal__options">
            <span>Cores</span>
            <form className="modal__colors" onSubmit={handleConfirm}>
              {notesColors.map((color, i) => (
                <div className="modal__colors--item" key={i}>
                  <label
                    htmlFor={'color' + i}
                    className={'modal__preview ' + color}
                  ></label>

                  <input
                    type="radio"
                    id={'color' + i}
                    name="color"
                    value={color}
                    defaultChecked={i === 0 ? true : false}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              ))}

              <button className="modal__btn" type="submit">
                Criar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
