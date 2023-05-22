import { useContext } from "react";
import { ItemList } from "../../../components";
import { CartContext } from "../../../contexts/cart";

const CartContainer = () => {
  const { cartList } = useContext(CartContext);

  return (
    <main>
      <ItemList products={cartList} showButtonRemove={true} />
    </main>
  );
};

export { CartContainer };
