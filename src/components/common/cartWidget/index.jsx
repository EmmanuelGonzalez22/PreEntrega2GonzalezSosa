import { useContext } from "react";
import { CartContext } from "../../../contexts";
import cart from "./assets/cart.svg";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const cartItems = totalItems();

  return (
    <div className='cartWidget__container'>
      <img src={cart} alt='cart' />
      <span id='contadorCarrito'>{cartItems}</span>
    </div>
  );
};

export { CartWidget };
