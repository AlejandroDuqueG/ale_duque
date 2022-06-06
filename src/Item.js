import { useNavigate } from "react-router-dom"

const Item = ({producto}) => {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/producto/${producto.id}`)
  }

  return (
    <article className="card">
      <h3>{producto.Descripcion}</h3>
      {/* <img src="https://via.placeholder.com/300x300" alt="card"/> */}
      <img src={producto.imagen} alt="card"/>
      <p>Precio : ${producto.Precio}</p>
      <p>Categorias : {producto.categorias}{/*producto.categoria.map(categoria=>{
        return <span>{/*categoria}</span>
      }) */} </p>
      <button onClick={handleClick}>ver mas</button>
    </article>
  )
}
export default Item