import "./CartView.css"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"
import { createOrdenes } from "../../services/firebase"
import Swal from "sweetalert2"

const CartView = () => {
    const {cart, clearCart, removeItem, cantidadTotal, total} = useContext(CartContext)

    async function confirmacion () {
    
        const orden = {
            item: cart,
            cliente:{
                nombre: "fulano",
                cel:"1133113",
                email:"a@gmail.com",
            },
            data: new Date(),
            precio: {total}
        }
        const id = await createOrdenes(orden)
        console.log("respuesta", id)
        Swal.fire({
            icon: 'success',
            title: 'compra realizada',
            text: 'Muchas gracias por su compra',
            text: 'el orden de compra es' + id,
            color: "black",
            confirmButtonColor: "rgba(145, 87, 0, 0.795)",
            confirmButtonTextColor: "white",
          })
        clearCart()
    }

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
                    <button onClick={confirmacion} className="checkout">Crear orden de compra</button>
                    <button onClick={() => clearCart()} className="vaciar">Vaciar Carrito</button>
                </div>
            </div>
        )
}}

export default CartView;