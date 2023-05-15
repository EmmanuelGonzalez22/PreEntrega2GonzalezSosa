import { ItemCount } from "../ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className='itemDetail__container'>
      <picture>
        <img src={item.img} alt={item.name} />
      </picture>
      <h4>{item.name}</h4>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <ItemCount
        stock={item.stock}
        initial={1}
        onAdd={(cantidad) =>
          console.log("Agregaste " + cantidad + " al carrito")
        }
      />
    </div>
  );
};
export { ItemDetail };
