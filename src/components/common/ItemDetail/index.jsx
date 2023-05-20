import { useEffect, useState } from "react";
import { ItemCount } from "../itemCount";
import { useCount } from "../../../hooks/useCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {
  const [stock, setStock] = useState(item.stock);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { cantidad, resta, incrementa, reset } = useCount(0, 1, stock);

  const addToCart = () => {
    setQuantityAdded(cantidad);
    setStock((prevStock) => prevStock - cantidad);
  };

  useEffect(() => {
    reset();
  }, [stock]);

  return (
    <div className='itemDetail__container'>
      <header>
        <picture>
          <img src={item.img} alt={item.name} />
        </picture>
        <h4>{item.name}</h4>
      </header>
      <section>
        <p>Precio: ${item.price}</p>
        <p>Stock: {stock}</p>
      </section>
      <footer>
        {quantityAdded > 0 ? (
          <Link to='/cart'>Ir al Carrito</Link>
        ) : (
          <ItemCount
            stock={stock}
            cantidad={cantidad}
            incrementa={incrementa}
            resta={resta}
            onAdd={addToCart}
          />
        )}
      </footer>
    </div>
  );
};
export { ItemDetail };
