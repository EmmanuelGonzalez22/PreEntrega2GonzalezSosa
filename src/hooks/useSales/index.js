import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useCart, useServices } from "../../hooks";
import { useNavigate } from "react-router-dom";

const useSales = () => {
  const sales = collection(db, "sales");
  const { cartList, totalPrice, clear } = useCart();
  const { setIsLoading, isLoading } = useServices();
  const [saleId, setSaleId] = useState({ success: null, message: "" });
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

  // Funcion que se encarga de mostrar el mensaje de confirmacion por 5 segundos y luego redirigir al home
  const tempo = (redirection) => {
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      navigate(redirection);
      setSaleId({});
    }, timeLeft * 1000);

    return () => clearInterval(countdown);
  };

  // Envio los datos del comprador y su compra a firebase
  const enviar = async (data) => {
    const newOrder = {
      buyer: {
        name: data.name + " " + data.surname,
        phone: data.phone,
        email: data.email,
      },
      items: cartList.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: totalPrice(),
      date: new Date().toLocaleString(),
      status: "generada",
    };

    if (cartList.length === 0) {
      return setSaleId({
        success: undefined,
        message: "El carrito esta vacio",
      });
    }
    try {
      setIsLoading(true);
      const salesRef = await addDoc(sales, newOrder);
      setSaleId({ success: true, message: salesRef.id });
      clear();
    } catch (e) {
      setSaleId({
        success: false,
        message: e.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // En caso que la operacion tuviera exito, se ejecuta este useEffect
  useEffect(() => {
    // valido si retorno un id de la promesa del addDoc, y si es asi, limpio el formulario ,muestro el mensaje de confirmacion y redirijo al home
    if (saleId && saleId.success) {
      document.getElementById("checkout-form").reset();
      tempo("/");
    }
    if (saleId.success === false) {
      tempo("/check-out");
    }
    if (saleId.success === undefined) {
      tempo("/cart");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saleId, navigate]);
  return { enviar, saleId, isLoading, timeLeft };
};

export { useSales };
