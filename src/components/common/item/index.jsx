import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";
import "./styles.scss";

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
    <article className={!showCartItem ? "parent" : "parentCart"}>
      <div className={!showCartItem ? "cards" : "cardCart"}>
        <div
          className={!showCartItem ? "content-box" : "containerCart__content"}
        >
          <header className='card-title'>
            <h2>{capitalizeFirstLetter(name)}</h2>
          </header>
          <section
            className={!showCartItem ? "card__price" : "cardCart__price"}
          >
            {!showCartItem ? (
              <h3 className='card-content'>Precio: ${price}</h3>
            ) : (
              <h3>${price}</h3>
            )}
            {showCartItem && (
              <section className='cardCart__subtotal'>
                <h5>Cantidad: {quantity}</h5>
                <h4>Subtotal: ${price * quantity}</h4>
              </section>
            )}
          </section>
          <footer
            className={!showCartItem ? "card__footer" : "cardCart__footer"}
          >
            {showCartItem ? (
              <button className='removeButton button' onClick={handleRemove}>
                X
              </button>
            ) : (
              <Link className='button see-more' to={`/item/${id}`}>
                {" "}
                Ver producto
              </Link>
            )}
          </footer>
        </div>
        <picture className={!showCartItem ? "img-box" : "containerCart__img"}>
          <img src={img} alt={name} />
        </picture>
      </div>
    </article>
  );
};

export { Item };
