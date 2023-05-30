import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts";
import { ItemCount } from "../../../components";
import { useCount } from "../../../hooks";
import "./styles.scss";

const ItemDetail = ({ item }) => {
  const { id, name, price, stock, img, category, description } = item;

  const { addItem } = useContext(CartContext);
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
      <header>
        <div>
          <img src={img} alt={name} />
        </div>
        <h4>{name}</h4>
      </header>
      <section className='price__section'>
        <h5 className='fw-bold'>${price} con tarjeta</h5>
        <h5 className='fw-bold'>
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
        {quantityAdded > 0 && (
          <Link to='/cart' className='button'>
            Ir al Carrito
          </Link>
        )}
      </section>
      <footer>
        <p>{description}</p>
      </footer>
    </article>
  );
};
export { ItemDetail };
