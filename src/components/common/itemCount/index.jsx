import "./styles.scss";

const ItemCount = ({ cantidad, resta, incrementa, stock, onAdd }) => {
  return (
    <div>
      <div className='itemCount__container'>
        <button
          className={`button ${cantidad <= 1 && "disabled"}`}
          onClick={resta}
        >
          -
        </button>
        <h4>{cantidad}</h4>
        <button
          className={`button ${cantidad >= stock && "disabled"}`}
          onClick={incrementa}
        >
          +
        </button>
      </div>
      <div>
        <button onClick={onAdd} disabled={!stock} className='button'>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export { ItemCount };
