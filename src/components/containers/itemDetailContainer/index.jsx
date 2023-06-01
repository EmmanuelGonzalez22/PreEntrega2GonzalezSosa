import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail, Loader } from "../../../components";
import { fetchProductById } from "../../services/products";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  /* ----------------------- LOGICA PARA TRAER PRODUCTOS DE FIREBASE ----------------------- */

  useEffect(() => {
    fetchProductById(id, setItem, setIsLoading, setError);
  }, [id]);

  /* COMPONENTE JSX */

  if (error) {
    return (
      <main className='main container'>
        <h2>{error}</h2>
      </main>
    );
  }

  if (!item && !isLoading) {
    return (
      <main className='main container'>
        <h2>"No hay productos"</h2>
      </main>
    );
  }

  return (
    <main className='main container'>
      {item && !isLoading ? <ItemDetail item={item} /> : <Loader />}
    </main>
  );
};

export { ItemDetailContainer };
