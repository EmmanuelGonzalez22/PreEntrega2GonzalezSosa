import { createContext } from "react";
import { useLocalStorage } from "../../hooks";

const CartContext = createContext({
  cartList: [],
  addItem: () => {},
  removeItem: () => {},
  clear: () => {},
  totalPrice: () => {},
  totalItems: () => {},
});

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useLocalStorage("cart", []);

  /* AGREGAR ITEM AL CARRITO */
  const addItem = (itemCart, quantity) => {
    //valido si el producto ya existe en el carrito
    const isInCart = cartList.find((el) => el.id === itemCart.id);

    if (isInCart) {
      //si ya existe en el carrito, aumenta la propiedad quantity del producto
      const cartUpdate = cartList.map((el) => {
        if (el.id === isInCart.id) {
          return { ...el, quantity: el.quantity + quantity };
        } else return el;
      });
      setCartList(cartUpdate);
    }
    //sino existe, agrego el nuevo producto al array
    else {
      setCartList((prev) => [...prev, { ...itemCart, quantity }]);
    }
  };

  /* REMOVER ITEM DEL CARRITO */
  const removeItem = (itemId) => {
    return setCartList(cartList.filter((el) => el.id !== itemId));
  };

  /* VACIAR EL CARRITO */
  const clear = () => {
    return setCartList([]);
  };

  /* CALCULA PRECIO TOTAL DEL CARRITO */
  const totalPrice = () => {
    return cartList.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
  };

  const totalItems = () => {
    return cartList.reduce((acc, producto) => acc + producto.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartList, addItem, removeItem, clear, totalPrice, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
