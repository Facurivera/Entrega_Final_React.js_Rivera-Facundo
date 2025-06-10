import "./ItemCount.css"
import {useState} from "react"

const ItemCount = ({stock, initial, onAdd})=>{
    const [cantidad, setCantidad] = useState(initial)
    const incremento = () => {
        if(cantidad < stock){
            setCantidad(cantidad+1)
           }
        }
    const decrecimiento = () => {
        if(cantidad > 1){
            setCantidad(cantidad-1)
            }
        }
    return(
        <div className="counter">
            <div className="controls">
                <button className="button" onClick={decrecimiento}>-</button>
                <h4 className="numero">{cantidad}</h4>
                <button className="button" onClick={incremento}>+</button>
            </div>
            <div>
                <button className="Agregar" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</button>
            </div>
        </div>
    )

}

export default ItemCount