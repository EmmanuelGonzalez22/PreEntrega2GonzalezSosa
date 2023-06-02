import { Link } from "react-router-dom";
import { useCart } from "../../../hooks";
import { ItemList } from "../../../components";
import "./styles.scss";

const CartContainer = () => {
  const { cartList, clear, totalPrice } = useCart();
  const total = totalPrice();

  if (cartList.length === 0)
    return (
      <main className='container cart__main'>
        <h2>No hay productos en el carrito</h2>
        <Link to='/' className='button'>
          Ver más productos
        </Link>
      </main>
    );

  return (
    <main className='container cart__main'>
      <h1 className='cart__title'>Carrito</h1>
      <ItemList products={cartList} showCartItem={true} />
      <section>
        <h3>Total: ${total}</h3>
        <button onClick={clear} className='button'>
          Vaciar carrito
        </button>
        <Link to='/check-out' className='button'>
          Finalizar compra
        </Link>
      </section>
    </main>
  );
};

export { CartContainer };
