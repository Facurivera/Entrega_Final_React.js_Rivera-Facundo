import cart from "./assets/cart.svg"

const Cardwidget = () => {
    return (
      <div className="seecarrito">
            <img src={cart} alt="#"/>
            <span className="itemscart">1</span>
      </div>
    )
  }
  
  export default Cardwidget