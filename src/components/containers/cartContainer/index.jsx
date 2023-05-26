import { useContext } from "react";
import { ItemList } from "../../../components";
import { CartContext } from "../../../contexts";
import "./styles.scss";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cartList, clear, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  {
    if (cartList.length === 0)
      return (
        <main>
          <h2>No hay productos en el carrito</h2>
          <Link to='/' className='btn btn-dark'>
            Ver más productos
          </Link>
        </main>
      );
  }

  return (
    <main>
      <ItemList products={cartList} showCartItem={true} />
      <section>
        <p>Total: ${total}</p>
        <button onClick={clear}>Vaciar carrito</button>
        <button>Finalizar compra</button>
      </section>
    </main>
  );
};

export { CartContainer };
