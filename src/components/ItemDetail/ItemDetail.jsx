import "./ItemDetail.css"
import ItemCount from "../itemcount/itemcount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, nombre, img, category, descripcion, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        const item = { id, img, nombre, category, precio }
        addItem(item, quantity)
    }

    return (
        <article className="Card">
            <div className="izq">
                <header className="Header">
                    <h2 className="ItemHeader">{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="ItemImg" />
                </picture>
            </div>
            <div className="der">
                <section>
                    <p className="Info">Categoria: {category}</p>
                    <p className="Info">Descripcion: {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>
                </section>
                <footer className="ItemFooter">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className="finalizar">Ir al Carrito</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                        )
                    }
                </footer>
                <Link to='/' className="seguir">Seguir viendo productos</Link>
            </div>
        </article>
    )
}

export default ItemDetail