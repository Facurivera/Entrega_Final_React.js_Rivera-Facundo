
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemlistContainer = () => {
  const [productos, setProductos] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const asynFunc = categoryId ? getProductsByCategory : getProducts

    asynFunc(categoryId)
      .then(response => {
        setProductos(response)
      }) 
      .catch(error => {
        console.error(error)
      })
  }, [categoryId])

  return (
    <div>
      <ItemList productos={productos}/>
    </div>
  )
}

export default ItemlistContainer