import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        <p>Categoría: {category}</p>
      </section>
      <footer>
        <Link to={`/item/${id}`}> Ver detalle</Link>
      </footer>
    </Card>
  );
};

export { Item };
