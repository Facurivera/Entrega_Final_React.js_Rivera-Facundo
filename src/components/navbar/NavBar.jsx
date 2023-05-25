import "./NavBar.css";
import Cardwidget from "../cardwidget/cardwitget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
        <nav>
          <div className="navbar">
            <Link to="/" className="linea">
              <h1 className="navbar-titulo">CompuMundoHiperMegaRed</h1>
            </Link>
            <Cardwidget />
          </div>
          <div className="categorias">
            <NavLink to={"/category/computadoras-de-escritorio"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Computadora de escritorio</NavLink>
            <NavLink to={"/category/Notebooks"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Notebooks</NavLink>
            <NavLink to={"/category/Telefonos"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Telefonos</NavLink>
            <NavLink to={"/category/Tablets"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Tablets</NavLink>
            <NavLink to={"/category/Accesorios"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Accesorios</NavLink>
          </div>
        </nav>
    </div>
  )
}

export default NavBar