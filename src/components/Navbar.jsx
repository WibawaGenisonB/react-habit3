import reactIcon from "../assets/react.svg"

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--icon" src={reactIcon} width="100" alt=""></img>
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React course - Project 1</h4>
    </nav>
  )
}

export default Navbar
