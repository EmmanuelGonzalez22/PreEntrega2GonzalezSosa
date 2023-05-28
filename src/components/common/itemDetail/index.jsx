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
    <div className='itemDetail__container'>
      <header>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <h4>{name}</h4>
        <p>{description}</p>
      </header>
      <section>
        <h5>Precio: ${price}</h5>
        <h5>Stock: {stock}</h5>
      </section>
      <footer>
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
      </footer>
    </div>
  );
};
export { ItemDetail };
