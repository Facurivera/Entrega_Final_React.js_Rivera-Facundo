import {createOrdenes } from "../../services/firebase"



async function confirmacion () {
    const orden = {
        item: cart,
        cliente:{
            nombre: "fulano",
            cel:"1133113",
            email:"a@gmail.com",
        },
        data: new Date(),
        precio: {total}
    }
    const id = await createOrdenes(orden)
    console.log("respuesta", id)
    clearCart()
}




const Formulario = () =>{
    return(
        <div className="container">
            <h5>Rellene los datos para finalizar la compra</h5>
            <input placeholder="Nombre" />
            <input placeholder="Email" />
            <input placeholder="Celular" />
            <button onClick={confirmacion} className="terminar">Crear orden de compra</button>
        </div>
    )
}
export default Formulario