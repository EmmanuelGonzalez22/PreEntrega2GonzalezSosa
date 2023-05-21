import { Item } from "../item";

const ItemList = ({ products }) => {
  return (
    <article className='gridProductos'>
      {products.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </article>
  );
};

export { ItemList };
