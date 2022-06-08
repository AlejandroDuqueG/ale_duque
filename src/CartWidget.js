import { useState, createContext, useContext } from "react";
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);
import { Link } from "react-router-dom"
import { contexto } from "./miContexto"


const ESTADO_INICIAL = {
  addedItems: [{ name: "Chocolate liquido", quantity: 1 }],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(ESTADO_INICIAL);

  const addItem = (item) => {
    if (cart.addedItems.some((addedItem) => addedItem.name === item.name)) {
      return;
    }

    const newAddedItems = cart.addedItems.map((product) => {
      if (product.name === "Chocolate liquido") return { product, quantity: 2 };

      return product;
    });
    setCart({ cart, addedItems: newAddedItems });
  };

  const clear = () => {
    setCart(ESTADO_INICIAL);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartWidget





