import { CheckOutForm, Loader } from "../../../components";
import { useSales } from "../../../hooks";

const CheckOut = () => {
  const { enviar, saleId, isLoading, showConfirmation, timeLeft } = useSales();

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
