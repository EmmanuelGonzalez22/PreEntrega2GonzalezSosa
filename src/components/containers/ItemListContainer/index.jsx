import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../../forms";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        setProducts(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export { ItemListContainer };
