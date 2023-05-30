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
    <article className={!showCartItem ? "cardUi" : "CardCart"}>
      {!showCartItem && (
        <div
          className='background-img'
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      )}
      <header>
        <h2>{capitalizeFirstLetter(name)}</h2>
      </header>
      <div className={!showCartItem ? "container__img" : "containerCart__img"}>
        <img src={img} alt={name} />
      </div>
      <section className={!showCartItem ? "card__price" : "cardCart__price"}>
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
      <footer className={!showCartItem ? "card__footer" : "cardCart__footer"}>
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
