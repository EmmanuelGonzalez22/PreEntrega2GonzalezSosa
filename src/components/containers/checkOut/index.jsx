import { useEffect } from "react";
import { CheckOutForm } from "../../forms";
import { useSales } from "../../../hooks";

const CheckOut = () => {
  const { enviar, saleId } = useSales();

  useEffect(() => {
    // valido si retorno un id de la promesa del addDoc, y si es asi, limpio el formulario
    if (saleId !== "") {
      document.getElementById("checkout-form").reset();
    }
  }, [saleId]);

  /* COMPONENTE JSX */

  return (
    <main className='main'>
      <CheckOutForm enviar={enviar} saleId={saleId} />

      {/* Si saleId es distinto de vacio y de error, muestro el mensaje de confirmacion */}
      {saleId !== "" && saleId !== "error" && (
        <div>
          <h2>¡Gracias por tu compra!</h2>
          <p>Tu número de orden es: {saleId}</p>
        </div>
      )}
      {/* si saleId es error, muestro mensaje de error */}
      {saleId === "error" && (
        <div>
          <h2>¡Ups! Algo salió mal</h2>
          <p>Por favor, intenta nuevamente</p>
        </div>
      )}
    </main>
  );
};

export { CheckOut };
