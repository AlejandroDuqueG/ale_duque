import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productosIniciales from "./productos.json"
import { db } from "./firebase"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{
    const resultado = productosIniciales.filter((producto)=>{
      return producto.id == id
    })[0]
    setProducto(resultado)
    setCargando(false)
  })

  if(cargando){
    return (
      <p>Cargando...</p>
    )
  }else{
    return (
      <>
        <ItemDetail/>
      </>
    )
  }
}

export default ItemDetailContainer