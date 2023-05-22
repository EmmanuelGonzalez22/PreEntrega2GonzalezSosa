import { Item } from "../item";
import { CartContext } from "../../../contexts";
import { useContext } from "react";

const ItemList = ({ products, showCartItem }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <article className='gridProductos'>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            {...product}
            showCartItem={showCartItem}
            handleRemove={() => {
              removeItem(product.id);
            }}
          />
        );
      })}
    </article>
  );
};

export { ItemList };
