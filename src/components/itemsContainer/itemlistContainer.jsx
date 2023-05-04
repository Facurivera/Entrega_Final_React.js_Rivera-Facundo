import "./itemlistContainer.css"

const ItemlistContainer = ({greeting}) => {
  return (
    <div>
      <h1 className="saludo">{greeting}</h1>
    </div>
  )
}

export default ItemlistContainer