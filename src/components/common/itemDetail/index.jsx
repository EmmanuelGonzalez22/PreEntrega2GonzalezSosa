import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../../../components";
import { useCount } from "../../../hooks";
import { CartContext } from "../../../contexts";
import "./styles.scss";

const ItemDetail = ({ item }) => {
  const { id, name, price, stock, img, category } = item;

  const { addItem, cartList } = useContext(CartContext);
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
    console.log(cartList);
  }, [cartList]);

  useEffect(() => {
    reset();
  }, [quantityAdded]);

  return (
    <div className='itemDetail__container'>
      <header>
        <picture>
          <img src={img} alt={name} />
        </picture>
        <h4>{name}</h4>
      </header>
      <section>
        <p>Precio: ${price}</p>
        <p>Stock: {stock}</p>
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
