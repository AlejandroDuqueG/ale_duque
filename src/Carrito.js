import { useCallback, useContext, useState } from "react"
import CarritoLista from "./CarritoLista"
import { contexto } from "./miContexto"
import { db } from "./firebase"
import { collection , addDoc } from "firebase/firestore"

const Carrito = () => {

  const {carrito, PriceTotal} = useContext(contexto)
  const [usuarios, setUsuarios] = useState([])
  const [nombre , setNombre] = useState("")
  const [idCompra, setIdCompra] = useState("")


  const handleClick = () => {

    setUsuarios([...usuarios,{
      id : Math.random(),
      nombre : nombre
    }])

  }

  const handleChange = (e) => {
    setNombre(e.target.value)
  }

  const borrarUsuario = (id) => {
    setUsuarios(usuarios.filter(usuario=>usuario.id!=id))
  }

  const borrarUsuarioMemorizada = useCallback(borrarUsuario,[])

  console.log("Nuevo Render Carrito")

  const guardarCompra = () => {
    //Representacion de coleccion en Firebase que no existe y se crea cuando se le guarda un documento dentro
    const ordenesCollection = collection(db,"ordenes")

    const orden = {
      buyer : {
        name : "juan",
        phone : "54555",
        email : "test@test"
      },
      //items : [{id:1,titulo:"Pantalon"}],
      items : carrito,
      date : "",
      total : 10000
    }

    const consulta = addDoc(ordenesCollection,orden)

    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })

  }

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Precio Total: ${PriceTotal()}</h2>
      <button onClick={handleClick}>click</button>
      <input type="text" onChange={handleChange}/>
      {/* <input type="text" onChange={handleChange}/>
      <input type="text" onChange={handleChange}/> */}
      <CarritoLista usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
      <button onClick={guardarCompra}>Finalizar compra</button>
      {idCompra && <h3>Compra guardada con id: {idCompra}</h3>}
      {console.log(carrito)}
    </div>
  )
}

export default Carrito