import { useContext } from "react";
import { CartContext } from "../../../contexts";
import { Item } from "../item";

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
