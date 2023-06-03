import { useState } from "react";
import { db } from "../../services/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { useCart } from "../../hooks";

const useSales = () => {
  const sales = collection(db, "sales");
  const { cartList, totalPrice, clear } = useCart();
  const [saleId, setSaleId] = useState("");

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
      const salesRef = await addDoc(sales, newOrder);
      setSaleId(salesRef.id);
      clear();
    } catch (e) {
      console.error("Error al realizar la compra: ", e);
      setSaleId("error");
    }
  };
  return { enviar, saleId };
};

export { useSales };
