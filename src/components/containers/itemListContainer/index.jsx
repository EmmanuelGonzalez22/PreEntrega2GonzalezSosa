import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader, ItemList } from "../../../components";
import { useServices } from "../../../hooks";
import "./styles.scss";

const ItemListContainer = () => {
  const { isLoading, products, msg, category, loadProducts, error } =
    useServices();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line
  }, [category]);

  /* COMPONENTE JSX */
  if (error && !isLoading)
    return (
      <main className='main container'>
        <article className='empty__container'>
          <h2 className='main__title'>{error}</h2>
        </article>
      </main>
    );

  if (products.length === 0 && !isLoading)
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

  return (
    <main className='main container'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1 className='main__title'>{msg}</h1>
          <ItemList products={products} />
        </>
      )}
    </main>
  );
};
export { ItemListContainer };
