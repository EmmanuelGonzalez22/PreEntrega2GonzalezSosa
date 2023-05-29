import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ItemDetail, Loader } from "../../../components";
import "./styles.scss";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DEL ASYNCMOCK ----------------------- */

  /* useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await getProductById(Number(id));
        setItem(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [id]); */

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DE FIREBASE ----------------------- */

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const db = getFirestore();
        const productRef = doc(db, "products", id);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [id]);

  /* COMPONENTE JSX */
  return (
    <main className='main container'>
      {item && !isLoading ? <ItemDetail item={item} /> : <Loader />}
    </main>
  );
};

export { ItemDetailContainer };
