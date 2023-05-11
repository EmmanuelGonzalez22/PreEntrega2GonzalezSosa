import { useEffect, useState } from "react";
import { fetchData } from "../../asyncMock";
import { ItemList } from "../../forms/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='greeting'>
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
};

export { ItemListContainer };
