import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts";
import cart from "./assets/cart.svg";
import "./styles.scss";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  const cartItems = totalItems();

  return (
    <Link
      to='/cart'
      className='cartWidget__container'
      style={{ visibility: cartItems === 0 && "hidden" }}
    >
      <img src={cart} alt='cart' />
      <span id='contadorCarrito'>{cartItems}</span>
    </Link>
  );
};

export { CartWidget };
