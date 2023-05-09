import { useState } from "react";

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
      <div>
        <button onClick={incrementa}>+</button>
        <h4>{cantidad}</h4>
        <button onClick={resta}>-</button>
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
