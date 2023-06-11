import { useContext } from "react";
import { CartContext } from "../../contexts";
import { UsePopUp } from "../usePopUp";

const useCart = () => {
  const { cartList, setCartList } = useContext(CartContext);
  const { addPopUp } = UsePopUp();

  /* AGREGAR ITEM AL CARRITO */
  const addItem = (itemCart, quantity) => {
    //busco el indice del producto en el carrito
    const index = cartList.findIndex((el) => el.id === itemCart.id);

    if (index !== -1) {
      //si ya existe en el carrito, aumenta la propiedad quantity del producto
      const newCartList = [...cartList];
      newCartList[index].quantity += quantity;
      setCartList(newCartList);
    }
    //sino existe, agrego el nuevo producto al array
    else {
      setCartList((prev) => [...prev, { ...itemCart, quantity }]);
    }

    const msg = `Se ${quantity === 1 ? "agregó" : "agregaron"} ${quantity} ${
      itemCart.name
    } al carrito`;
    addPopUp(msg, "add");
  };

  /* REMOVER ITEM DEL CARRITO */
  const removeItem = (itemId) => {
    const msg = `Se eliminó ${
      cartList.find((el) => el.id === itemId).name
    } del carrito`;
    addPopUp(msg, "remove");

    return setCartList(cartList.filter((el) => el.id !== itemId));
  };

  /* VACIAR EL CARRITO */
  const clear = (msg) => {
    addPopUp(msg, "clear");

    return setCartList([]);
  };

  /* CALCULA PRECIO TOTAL DEL CARRITO */
  const totalPrice = () => {
    return cartList.reduce(
      (acc, producto) => acc + producto.price * producto.quantity,
      0
    );
  };

  /* CALCULA CANTIDAD DE PRODUCTOS EN EL CARRITO */
  const totalItems = () => {
    return cartList.reduce((acc, producto) => acc + producto.quantity, 0);
  };

  const addToCart = (img, id, name, price, cantidad) => {
    const itemCart = {
      img,
      id,
      name,
      price,
    };

    addItem(itemCart, cantidad);
  };

  return {
    addItem,
    clear,
    removeItem,
    totalPrice,
    totalItems,
    cartList,
    addToCart,
  };
};

export { useCart };
