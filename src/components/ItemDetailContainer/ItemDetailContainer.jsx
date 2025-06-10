import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getItemData } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getItemData(itemId)
            .then(response => {
                setProductos(response)
            })
    }, [itemId])

    return(
        <div className="ItemDetailCountainer">
            <ItemDetail {...productos} />
        </div>
    )
}

export default ItemDetailContainer