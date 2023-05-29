import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, getDocs, collection, getDoc } from "firebase/firestore";
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

  const title = category
    ? capitalizeFirstLetter(category)
    : "Bienvenidos a Pet´s BRC";

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DE FIREBASE ----------------------- */

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const db = getFirestore();
        const productsRef = collection(db, "products");
        const querySnapshot = await getDocs(productsRef);

        if (querySnapshot.size > 0) {
          const productsCollection = querySnapshot.docs.map(async (doc) => {
            const data = doc.data();
            const categorySnapshot = await getDoc(data.categoryId);

            if (categorySnapshot.exists()) {
              const categoryName = categorySnapshot.data().name;
              data.categoryId = categoryName;
            }
            return { id: doc.id, ...data };
          });

          if (category) {
            const filteredProducts = await Promise.all(productsCollection);
            setProducts(
              filteredProducts.filter((el) => el.categoryId === category)
            );
          } else {
            setProducts(await Promise.all(productsCollection));
          }
        }
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  /* COMPONENTE JSX */
  if (!products)
    return (
      <main className='main container'>
        <h2>No hay productos</h2>
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
