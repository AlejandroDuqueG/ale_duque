import { useContext, useState } from 'react'
import Hijo from './Hijo';
import { contexto } from './miContexto';

const ItemDetail = ({producto}) => {

  const [nombre, setNombre] = useState('');
  const { agregarProducto } = useContext(contexto)

  const handleClickDefault = (e) => {
    e.preventDefault()
  }

  const handleClick = (numeroDelContadorDelHijo) => {
    console.log("Click del padre")
  }

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setNombre(e.target.value)
    }
  }

  const handleFocus = () => {
  }

  const handleBlur = () => {
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
    console.log(nombre)
  }

  const handleAddCarrito = () => {
    agregarProducto({
      id: 1,
      nombre : "Producto 1",
      precio : 100,
      cantidad : 1
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {}
        <a href="http://google.com" onClick={handleClickDefault}>ir a Google!</a>
        <input type="text" name="username" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
        <button onClick={handleClick}>click</button>
        <Hijo onClick={handleClick} />
      </form>


      <h1>{producto.titulo}</h1>
      <p>
        {producto.descripcion}
      </p>
      <img src={producto.imagen} alt="" width={300}/>
      <p>Precio : ${producto.precio}</p>

      <button onClick={handleAddCarrito}>terminar mi compra</button>
    </div>
  )
}

export default ItemDetail