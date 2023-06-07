import { CheckOutForm, Loader } from "../../../components";
import { useSales } from "../../../hooks";
import "./styles.scss";

const CheckOut = () => {
  const { enviar, saleId, isLoading, timeLeft } = useSales();

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

      {saleId.success && (
        <div className='confirmation__container'>
          <h2 className='confirmation__title'>¡Gracias por tu compra!</h2>
          <h3 className='confirmation__text'>
            Tu número de orden es: {saleId.message}
          </h3>
          <h4 className='confirmation__text'>Redireccionando en {timeLeft}</h4>
        </div>
      )}

      {(saleId.success === false || saleId.success === undefined) && (
        <div className='confirmation__container'>
          <h2 className='confirmation__title'>{saleId.message}</h2>
          <p className='confirmation__text'>Por favor, intenta nuevamente</p>
          <h4 className='confirmation__text'>{timeLeft}</h4>
        </div>
      )}
    </main>
  );
};

export { CheckOut };
