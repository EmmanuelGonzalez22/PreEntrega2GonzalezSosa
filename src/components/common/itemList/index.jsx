import { Item } from "../item";

const ItemList = ({ products, showButtonRemove }) => {
  return (
    <article className='gridProductos'>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            {...product}
            showButtonRemove={showButtonRemove}
          />
        );
      })}
    </article>
  );
};

export { ItemList };
