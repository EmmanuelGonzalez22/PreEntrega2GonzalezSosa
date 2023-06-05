import { useEffect, useState } from "react";
import { db } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useCart, useServices } from "../../hooks";
import { useNavigate } from "react-router-dom";

const useSales = () => {
  const sales = collection(db, "sales");
  const { cartList, totalPrice, clear } = useCart();
  const { setIsLoading, isLoading } = useServices();
  const [saleId, setSaleId] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

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

    try {
      setIsLoading(true);
      const salesRef = await addDoc(sales, newOrder);
      setSaleId(salesRef.id);
      clear();
    } catch (e) {
      console.error("Error al realizar la compra: ", e);
      setSaleId("error");
    } finally {
      setIsLoading(false);
    }
  };

  // En caso que la operacion tuviera exito, se ejecuta este useEffect
  useEffect(() => {
    // valido si retorno un id de la promesa del addDoc, y si es asi, limpio el formulario ,muestro el mensaje de confirmacion y redirijo al home
    if (saleId !== "" && saleId !== "error") {
      setShowConfirmation(true);
      document.getElementById("checkout-form").reset();

      const countdown = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      setTimeout(() => {
        setShowConfirmation(false);
        clearInterval(countdown);
        navigate("/");
      }, timeLeft * 1000);

      return () => clearInterval(countdown);
    }
  }, [saleId, navigate, timeLeft]);
  return { enviar, saleId, isLoading, showConfirmation, timeLeft };
};

export { useSales };
