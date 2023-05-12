import { Card } from "react-bootstrap";

const Item = ({ id, name, img, price, stock }) => {
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
        <p>Stock disponible: {stock}</p>
      </section>
      <footer>
        <button>Ver detalle</button>
      </footer>
    </Card>
  );
};

export { Item };
