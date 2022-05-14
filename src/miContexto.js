import { createContext, useState } from "react"
import { toast } from "react-toastify"

export const contexto = createContext()
const { Provider } = contexto


const MiCustomProvider = ({children}) => {

  const [carrito,setCarrito] = useState([])
  const [cantidadTotal,setCantidadTotal] = useState(0)
  const [precioTotal,setPrecioTotal] = useState(0)
  

  const agregarProducto = (producto) => {
    if(estaEnCarrito(producto.id)){
      toast.info("El producto ya está en el carrito!")
    }else{
      setCantidadTotal(cantidadTotal + producto.cantidad)
      setPrecioTotal(precioTotal + producto.precio)
      setCarrito([...carrito,producto])
    }
  }

  const eliminarProducto = (id) => {
    
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  const estaEnCarrito = (id) => {
    return carrito.find(productoCarrito=>productoCarrito.id == id)
  }

  const valorDelContexto = {
    cantidadTotal ,
    precioTotal ,
    carrito ,
    agregarProducto ,
    eliminarProducto , 
    vaciarCarrito ,
    estaEnCarrito
  }

  return (
    <Provider value={valorDelContexto} >
      {children}
    </Provider>
  )
}

export default MiCustomProvider