import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import ItemlistContainer from "./components/itemsContainer/itemlistContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import CartView from "./components/cartView/CartView"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemlistContainer />}/>
            <Route path="/category/:categoryId" element={<ItemlistContainer />}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<CartView />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>  
    </div>
  );
}

export default App
