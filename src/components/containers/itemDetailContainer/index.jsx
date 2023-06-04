import { useEffect } from "react";
import { ItemDetail, Loader } from "../../../components";
import { useServices } from "../../../hooks";

const ItemDetailContainer = () => {
  const { item, error, isLoading, msg, id, loadProduct } = useServices();

  useEffect(() => {
    loadProduct();
    // eslint-disable-next-line
  }, [id]);

  /* COMPONENTE JSX */

  if (error) {
    return (
      <main className='main container'>
        <h2 className='main__title'>{error}</h2>
      </main>
    );
  }

  if (!item && !isLoading) {
    return (
      <main className='main container'>
        <h2 className='main__title'>{msg}</h2>
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
