import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";

const Item = ({
  id,
  name,
  img,
  price,
  handleRemove,
  showCartItem,
  quantity,
}) => {
  return (
    <article
      className='cardContainer cardUi'
      style={{ backgroundImage: `url(${img})` }}
    >
      <header>
        <h2>{capitalizeFirstLetter(name)}</h2>
      </header>
      <div className='containerImg'>
        <img src={img} alt={name} />
      </div>
      <section>
        <h5>Precio: ${price}</h5>
      </section>
      {showCartItem && (
        <section>
          <h5>
            Cantidad de {name}: {quantity} unidades
          </h5>
          <h4>Subtotal: ${price * quantity}</h4>
        </section>
      )}
      <footer className='footerCard'>
        {showCartItem ? (
          <button className='removeButton' onClick={handleRemove}>
            X
          </button>
        ) : (
          <Link className='button' to={`/item/${id}`}>
            {" "}
            Ver producto
          </Link>
        )}
      </footer>
    </article>
  );
};

export { Item };
