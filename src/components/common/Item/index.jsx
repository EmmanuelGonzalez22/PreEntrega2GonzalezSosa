import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../functions/capitalizeLetter";

const Item = ({ id, name, img, price, category }) => {
  return (
    <Card className='cardContainer'>
      <header>
        <h2>{name}</h2>
      </header>
      <picture className='containerImg'>
        <img src={img} alt={name} />
      </picture>
      <section>
        <p>Precio: ${price}</p>
        <p>Categoría: {capitalizeFirstLetter(category)}</p>
      </section>
      <footer className='footerCard'>
        <Link className='button' to={`/item/${id}`}>
          {" "}
          Ver producto
        </Link>
      </footer>
    </Card>
  );
};

export { Item };
