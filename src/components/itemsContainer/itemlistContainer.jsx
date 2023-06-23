
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { getData, getcategoryData } from "../../services/firebase"

const ItemlistContainer = () => {
  const [productos, setProductos] = useState([])

  const {categoryId} = useParams()

  const Data = categoryId === undefined? getData : getcategoryData

  useEffect(() => {
    Data(categoryId)
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