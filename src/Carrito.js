import { useCallback, useContext, useState } from "react"
import CarritoLista from "./CarritoLista"
import { contexto } from "./miContexto"
import { db } from "./firebase"

const Carrito = () => {

  const { precio_total, carrito, vaciarCarrito } = useContext(contexto)
  const [usuarios, setUsuarios] = useState([])
  const [nombre , setNombre] = useState("")


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

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Precio Total: ${precio_total}</h2>
      <button onClick={handleClick}>click</button>
      <input type="text" onChange={handleChange}/>
      <CarritoLista usuarios={usuarios} borrarUsuario={borrarUsuarioMemorizada}/>
    </div>
  )
}

export default Carrito