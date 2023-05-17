import { useState } from "react";
import "./styles.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementa = () => {
    if (stock > cantidad) {
      setCantidad(cantidad + 1);
    }
  };

  const resta = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className='container'>
      <div className='itemCount__container'>
        <button onClick={resta} disabled={cantidad === 1 ? true : false}>
          -
        </button>
        <h4>{cantidad}</h4>
        <button
          onClick={incrementa}
          disabled={cantidad === stock ? true : false}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            onAdd(cantidad);
          }}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
