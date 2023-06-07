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
        <article className='cart__container'>
          <h1 className='cart__title'>No hay productos en el carrito</h1>
          <Link to='/' className='button'>
            Ver más productos
          </Link>
        </article>
      </main>
    );

  return (
    <main className='container cart__main'>
      <article className='cart__container'>
        <h1 className='cart__title'>Carrito</h1>
        <div className='separator'></div>
        <ItemList products={cartList} showCartItem={true} />
        <section className='cart__total'>
          <h3>Total: ${total}</h3>
          <div className='cart__total-buttons'>
            <button onClick={clear} className='button'>
              Vaciar carrito
            </button>
            <Link to='/check-out' className='button'>
              Finalizar compra
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
};

export { CartContainer };
