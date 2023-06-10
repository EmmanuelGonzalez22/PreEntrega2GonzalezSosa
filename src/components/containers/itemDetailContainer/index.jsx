import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ItemDetail, Loader } from "../../../components";
import { useServices } from "../../../hooks";

const ItemDetailContainer = () => {
  const { item, isLoading, msg, id, loadProduct, error } = useServices();

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line
  }, [id]);

  /* COMPONENTE JSX */

  if (error && !isLoading) {
    return (
      <main className='main container'>
        <h2 className='main__title'>{error}</h2>
      </main>
    );
  }

  if (!item && !isLoading) {
    return (
      <main className='main container'>
        <article className='empty__container'>
          <h2 className='main__title'>{msg}</h2>
          <Link to='/' className='button'>
            Ver más productos
          </Link>
        </article>
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
