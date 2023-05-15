import { ItemCount } from "../ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <picture>
        <img src={item.img} alt={item.name} />
      </picture>
      <h4>{item.name}</h4>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <div>
        <ItemCount
          stock={item.stock}
          initial={1}
          onAdd={(cantidad) =>
            console.log("Agregaste " + cantidad + " al carrito")
          }
        />
      </div>
    </div>
  );
};
export { ItemDetail };
