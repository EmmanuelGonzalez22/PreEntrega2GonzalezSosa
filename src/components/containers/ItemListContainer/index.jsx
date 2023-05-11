import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../../forms/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export { ItemListContainer };
