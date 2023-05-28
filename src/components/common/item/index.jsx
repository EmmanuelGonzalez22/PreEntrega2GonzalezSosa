import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";

const Item = ({
  id,
  name,
  img,
  price,
  description,
  categoryId,
  handleRemove,
  showCartItem,
  quantity,
}) => {
  return (
    <Card className='cardContainer'>
      <header>
        <h2>{name}</h2>
      </header>
      <picture className='containerImg'>
        <img src={img} alt={name} />
      </picture>
      <section>
        <h5>Precio: ${price}</h5>
        {!showCartItem && <p>Categoría: {capitalizeFirstLetter(categoryId)}</p>}
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
    </Card>
  );
};

export { Item };
