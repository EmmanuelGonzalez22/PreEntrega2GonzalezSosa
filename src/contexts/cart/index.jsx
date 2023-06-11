import { createContext } from "react";
import { useLocalStorage } from "../../hooks";

const CartContext = createContext({
  cartList: [],
  setCartList: () => {},
});

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
