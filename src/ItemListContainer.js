import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productosIniciales from "./productos.json"
import BeatLoader from "react-spinners/BeatLoader";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import { collection , getDoc , doc , getDocs , addDoc , query , where, orderBy } from "firebase/firestore"



const ItemListContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [productos,setProductos] = useState([])
  const {nombreCategoria,test} = useParams()

  console.log(nombreCategoria)

  useEffect(()=>{
  
    setCargando(true)

    
    const productosCollection = collection(db,"productos")

    const consulta = getDocs(productosCollection)
    

    consulta
      .then((resultado)=>{
      
        const productos = resultado.docs.map(doc=>{
          
          console.log(doc.id)
          const productoConId = doc.data()
          productoConId.id = doc.id
          

          return productoConId
        }) 

      

        setProductos(productos)
        setCargando(false)
 
      })
      .catch((error)=>{
        console.log(error)
      })
      .finally(()=>{

      })


  },[nombreCategoria])

  return (
    <>
      {cargando ? <BeatLoader /> : <ItemList productos={productos} />}
    </>
  )
}

export default ItemListContainer