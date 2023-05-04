import NavBar from "./components/navbar/NavBar"
import ItemlistContainer from "./components/itemsContainer/itemlistContainer"

function App(props) {
  return (
    <>
      <NavBar />
      <ItemlistContainer  greeting={"bienvenidos"}/>
    </>
  )
}

export default App
