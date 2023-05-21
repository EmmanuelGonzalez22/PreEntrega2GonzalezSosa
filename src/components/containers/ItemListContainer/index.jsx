import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";
import { Loader } from "../../layout";
import { ItemList } from "../../common";
import "./styles.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedProducts = await getProducts();

        if (category) {
          setProducts(fetchedProducts.filter((el) => el.category === category));
        } else {
          setProducts(fetchedProducts);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const tittle = category
    ? capitalizeFirstLetter(category)
    : "Bienvenidos a Pet´s BRC";

  return (
    <main className='greeting'>
      <h1>{tittle}</h1>
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </main>
  );
};

export { ItemListContainer };
