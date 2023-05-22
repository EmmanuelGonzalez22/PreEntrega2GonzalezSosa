import { createContext } from "react";
import { useLocalStorage } from "../../hooks";

const CartContext = createContext({
  cartList: [],
  addItem: () => {},
  removeItem: () => {},
});

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  const addItem = (itemCart, quantity) => {
    setCartList((prev) => [...prev, { ...itemCart, quantity }]);
  };

  const removeItem = (itemId) => {
    return setCartList(cartList.filter((el) => el !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
