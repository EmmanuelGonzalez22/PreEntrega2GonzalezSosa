import { Link } from "react-router-dom";
import { useCart } from "../../../hooks";
import cart from "./assets/cart.svg";
import "./styles.scss";

const CartWidget = () => {
  const { totalItems } = useCart();
  const cartItems = totalItems();

  return (
    <Link to='/cart' className='cartWidget__container'>
      <img src={cart} alt='cart' />
      <span id='contadorCarrito'>{cartItems}</span>
    </Link>
  );
};

export { CartWidget };
