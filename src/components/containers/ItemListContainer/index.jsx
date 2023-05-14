import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList, Loader } from "../../forms";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [tittle, setTittle] = useState("Bienvenidos a Pet´s BRC");
  const [isLoading, setIsLoading] = useState(true);
  const category = useParams().category;

  useEffect(() => {
    async function fetchProducts() {
      try {
        if (category) {
          setIsLoading(true);
          setTittle(capitalizeFirstLetter(category));
          const products = await getProducts();
          setProducts(products.filter((el) => el.category === category));
        } else {
          setIsLoading(true);
          setTittle("Bienvenidos a Pet´s BRC");
          const products = await getProducts();
          setProducts(products);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [category]);

  return (
    <div className='greeting'>
      <h1>{tittle}</h1>
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </div>
  );
};

export { ItemListContainer };
