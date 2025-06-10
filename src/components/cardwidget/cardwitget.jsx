import imagen from "./assets/imagen.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"



const Cardwidget = () => {

  const {cantidadTotal} = useContext(CartContext)

  return(
    
    <Link to='/cart' >
        <img src={imagen} alt="cart-widget" className="seecarrito"/>
        <span className="itemscart">{cantidadTotal}</span>
    </Link>
    
  )}
  export default Cardwidget