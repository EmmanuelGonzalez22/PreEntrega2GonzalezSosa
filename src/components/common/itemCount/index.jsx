import "./styles.scss";

const ItemCount = ({ cantidad, resta, incrementa, stock, onAdd }) => {
  return (
    <div className='container'>
      <div className='itemCount__container'>
        <button
          onClick={resta}
          disabled={cantidad <= 1 || cantidad === undefined ? true : false}
        >
          -
        </button>
        <h4>{cantidad}</h4>
        <button
          onClick={incrementa}
          disabled={cantidad >= stock || cantidad === undefined ? true : false}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={onAdd} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
