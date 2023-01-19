import Header from './Header'

function Layout(props) {
  return (
    <div className="app">
      {/* <div className="wrapper"> */}
      <Header onChange={props.searchNote} onClick={props.createNote} />
      {props.children}
      {/* </div> */}
    </div>
  )
}

export default Layout
