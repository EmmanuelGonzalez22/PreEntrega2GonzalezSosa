import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../../components";
import { useCount, useCart } from "../../../hooks";
import "./styles.scss";

const ItemDetail = ({ item }) => {
  const { id, name, price, stock, img, category, description } = item;

  const { addItem, cartList } = useCart();
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { cantidad, resta, incrementa, reset } = useCount(1, 1, stock);

  const addToCart = () => {
    const itemCart = {
      img,
      id,
      name,
      price,
      category,
    };

    setQuantityAdded(cantidad);

    addItem(itemCart, cantidad);
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantityAdded]);

  return (
    <article className='itemDetail__container'>
      <header className='detail__header'>
        <h4 className='fw-bold'>{name.toUpperCase()}</h4>
        <div>
          <img src={img} alt={name} />
        </div>
      </header>
      <section className='price__section'>
        <h5 className='price__card'>
          <span>${price}</span> con tarjeta
        </h5>
        <h5 className='price__cash'>
          <span className='red'>${price * 0.9}</span> en efectivo
        </h5>
      </section>
      <section className='count__section'>
        <ItemCount
          stock={stock}
          cantidad={cantidad}
          incrementa={incrementa}
          resta={resta}
          onAdd={addToCart}
        />
        {cartList.length > 0 && (
          <Link to='/cart' className='button'>
            Ir al Carrito
          </Link>
        )}
      </section>
      <footer className='detail__footer'>
        <h5>Descripción</h5>
        <div className='separator'></div>
        <p>{description}</p>
      </footer>
    </article>
  );
};
export { ItemDetail };
