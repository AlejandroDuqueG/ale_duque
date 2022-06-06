import { useContext, useState } from "react";
import Hijo from "./Hijo";
import { contexto } from "./miContexto";
import Contador from "./Contador";
import { toast } from "react-toastify";

const ItemDetail = ({ producto, id }) => {
  const { addItem } = useContext(contexto);

  const onAdd = (contador) => {
    addItem(contador, producto, id);
    toast.success("Se ha agregado su producto al carrito");
  };

  return (
    <div>
      <p>{producto.Descripcion}</p>
      <img src={producto.imagen} alt="" width={300} />
      <p>Precio : ${producto.Precio}</p>
      <button>Agregar al carrito</button>
      <Contador stock={producto.stock} init={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;