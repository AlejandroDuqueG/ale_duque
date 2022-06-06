import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { db } from "./firebase"
import { getDoc , doc , collection  } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})
  const {id} = useParams()

  useEffect(()=>{


    const productoCollection = collection(db,"productos")
    const resultadoDelDoc = doc(productoCollection,id)
    const consulta = getDoc(resultadoDelDoc)
    
    consulta
      .then((resultado)=>{
        setProducto(resultado.data())
        setCargando(false)
      })
      .catch((error)=>{
        console.log(error)
        setCargando(false)
      })
  },[id])

  if(cargando){
    return (
      <p>Cargando...</p>
    )
  }else{
    return (
      <>
        <ItemDetail producto={producto} id ={id}/>
        {console.log(producto)}
      </>
    )
  }
}

export default ItemDetailContainer