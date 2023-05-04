import "./NavBar.css";
import Cardwidget from "../cardwidget/cardwitget";

const NavBar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
          <ul>
            <h1 className="navbar-titulo">CompuMundoHiperMegaRed</h1>
            <a href=""  className="navbar-list">Productos</a>
          </ul>
          <Cardwidget />
        </nav>
    </div>
  )
}

export default NavBar