import "./ItemDetail.css"
import ItemCount from "../itemcount/itemcount"

const ItemDetail = ({id, nombre, img, category, descripcion, precio, stock}) =>{
    return(
        <article className="Card">
            <div className="izq">
                <header className="Header">
                    <h2 className="ItemHeader">{nombre}</h2>
                </header>
                <picture>
                    <img src={img} alt={nombre} className="ItemImg"/>
                </picture>
            </div>
            <div className="der">
                <section>
                    <p className="Info">Categoria: {category}</p>
                    <p className="Info">Descripcion: {descripcion}</p>
                    <p className="Info">Precio: ${precio}</p>
                </section>
                <footer className="ItemFooter">
                    <ItemCount initial={1} stock={100} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)} />
                </footer>
            </div>
        </article>
    )
}

export default ItemDetail