import { useContext } from "react";
import { ItemList } from "../../../components";
import { CartContext } from "../../../contexts";

const CartContainer = () => {
  const { cartList, clear, totalPrice } = useContext(CartContext);
  const total = totalPrice();

  return (
    <main>
      <ItemList products={cartList} showCartItem={true} />
      {cartList.length > 0 && (
        <section>
          <p>Total: ${total}</p>
          <button onClick={clear}>Vaciar carrito</button>
          <button>Finalizar compra</button>
        </section>
      )}
    </main>
  );
};

export { CartContainer };
