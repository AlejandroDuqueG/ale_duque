import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const contexto = createContext();
const { Provider } = contexto;

const MiCustomProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (contador, producto, id) => {
    let cartProduct = { producto, contador, id };

    let cartAux = [];

    if (isInCart(id)) {
      cartProduct = carrito.find((item) => item.id === id);

      cartProduct.contador = cartProduct.contador + contador;

      cartAux = [...cartProduct];
    } else {
      cartAux = [cartProduct, ...carrito];
    }
    setCarrito(cartAux);
  };

  const IconCart = () => {
    return carrito.reduce((acum, i) => acum + i.contador, 0);
  };

  const PriceTotal = () => {
    return carrito.reduce((acum, i) => acum + i.contador * i.producto.Precio, 0);
  };

  const removeItem = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCarrito([]);
  };
  const isInCart = (id) => {
    return carrito && carrito.some((item) => item.producto.id === id);
  };

  const valorDelContexto = {
    carrito,
    addItem,
    removeItem,
    clearCart,
    IconCart,
    PriceTotal
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiCustomProvider;