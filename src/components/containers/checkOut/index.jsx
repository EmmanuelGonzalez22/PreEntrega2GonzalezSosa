import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckOutForm, Loader } from "../../../components";
import { useSales } from "../../../hooks";

const CheckOut = () => {
  const { enviar, saleId, isLoading } = useSales();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const navigate = useNavigate();

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

  /* COMPONENTE JSX */
  if (isLoading)
    return (
      <main className='main__container'>
        <Loader />
      </main>
    );

  return (
    <main className='main'>
      <CheckOutForm enviar={enviar} saleId={saleId} />

      {showConfirmation && (
        <div>
          <h2>¡Gracias por tu compra!</h2>
          <h3>Tu número de orden es: {saleId}</h3>
          <h4>Redireccionando al Home en {timeLeft}</h4>
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
