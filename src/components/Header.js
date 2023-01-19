import { useRef } from 'react'

function Header(props) {
  const searchInput = useRef()

  function handleInput(e) {
    const text = searchInput.current.value

    props.onChange(text)
  }

  function handleClick(e) {
    props.onClick()
  }

  return (
    <header className="header">
      <div className="header__logo">
        {/* <span>Notas</span> */}
        <img src={'logo.png'} alt="logo"></img>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__input"
          placeholder="Procurar nota..."
          onChange={handleInput}
          ref={searchInput}
        ></input>

        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <button className="header__add--note" onClick={handleClick}>
        Criar <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  )
}

export default Header
