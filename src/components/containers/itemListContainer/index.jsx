import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../services/products";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";
import { Loader, ItemList } from "../../../components";
import "./styles.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { category } = useParams();

  const title = category
    ? capitalizeFirstLetter(category)
    : "Bienvenidos a Pet´s BRC";

  /* ----------------------- TRAIGO PRODUCTOS DE FIREBASE ----------------------- */
  useEffect(() => {
    fetchProducts(category, setIsLoading, setProducts, setError);
  }, [category]);

  /* COMPONENTE JSX */
  if (error)
    return (
      <main className='main container'>
        <h2>{error}</h2>
      </main>
    );

  if (!products && !isLoading)
    return (
      <main className='main container'>
        <h2>"No hay productos"</h2>
      </main>
    );

  return (
    <main className='main container'>
      <h1 className='main__title'>{title}</h1>
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </main>
  );
};
export { ItemListContainer };
