import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";
import { Loader, ItemList } from "../../../components";
import "./styles.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DEL ASYNCMOCK ----------------------- */
  /* useEffect(() => {
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
  }, [category]); */

  const tittle = category
    ? capitalizeFirstLetter(category)
    : "Bienvenidos a Pet´s BRC";

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DE FIREBASE ----------------------- */
  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");
    getDocs(productsCollection).then((querySnapshot) => {
      setProducts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      if (querySnapshot.size > 0) {
        setIsLoading(false);
      }
    });
  }, []);

  console.log(products[0]);

  if (!products) return <h2>No hay productos</h2>;

  return (
    <main className='greeting'>
      <h1>{tittle}</h1>
      {isLoading ? <Loader /> : <ItemList products={products} />}
    </main>
  );
};
export { ItemListContainer };
