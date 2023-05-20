import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../../common";
import { Loader } from "../../layout";
import "./styles.scss";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setIsLoading(true);
        const response = await getProductById(Number(id));
        setItem(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductById();
  }, [id]);

  return (
    <main className='greeting'>
      {item && !isLoading ? <ItemDetail item={item} /> : <Loader />}
    </main>
  );
};

export { ItemDetailContainer };
