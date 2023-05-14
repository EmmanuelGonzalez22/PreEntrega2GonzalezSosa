import { useEffect, useState } from "react";
import { ItemDetail } from "../../forms/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await getProductById(Number(id));
        setItem(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductById();
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export { ItemDetailContainer };
