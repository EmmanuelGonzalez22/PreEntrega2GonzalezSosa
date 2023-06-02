import { useCart } from "../../../hooks";
import { Item } from "../item";

const ItemList = ({ products, showCartItem }) => {
  const { removeItem } = useCart();

  return (
    <section className='gridProductos'>
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
    </section>
  );
};

export { ItemList };
