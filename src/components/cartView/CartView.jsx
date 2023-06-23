import "./CartView.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

const CartView = () => {
    const {cart, clearCart, removeItem, cantidadTotal, total} = useContext(CartContext)

    if( cantidadTotal === 0) {
        return(
            <div className="sinproducto">
                <h1 className="principio">Sin productos en su Carrito</h1>
                <h2 className="subtitulo">Por favor vuelva al inicio para ingresar productos</h2>
                <Link to='/'  className="inicio">Inicio</Link>
            </div>
        )
    }else{
        return(
            <div>
                <h3 className="principio">Carrito de Compras</h3>
                <div>
                    {cart.map((item) =>(
                    <ul className="lista" key={item.id}>
                        <li><img className="img" src={item.img}/></li>
                        <li>Producto: {item.nombre}</li>
                        <li>Precio: ${item.precio}</li>
                        <li>Cantidad: {item.quantity}</li>
                        <li>Sub-Total: ${item.quantity*item.precio}</li>
                        <li><button className="quitar" onClick={() => removeItem(item.id)}>X</button></li>
                    </ul>
                    ))}
                </div>
                <div className="final">
                    <h4 className="total">Total a pagar: {total} </h4>
                    <Link to="/checkout" className="checkout">Finalizar Compra</Link>
                    <button onClick={() => clearCart()} className="vaciar">Vaciar Carrito</button>
                </div>
            </div>
        )
}}

export default CartView;