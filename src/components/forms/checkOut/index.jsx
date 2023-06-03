import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CheckOutForm = ({ enviar }) => {
  const { register, handleSubmit } = useForm();

  return (
    <section>
      <h1 className='main__title'>Checkout</h1>
      <form id='checkout-form' onSubmit={handleSubmit(enviar)}>
        <div>
          <label htmlFor='name'></label>
          <input
            type='text'
            id='name'
            placeholder='Ingrese su nombre'
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor='surname'></label>
          <input
            type='text'
            id='surname'
            placeholder='Ingrese su apellido'
            {...register("surname")}
          />
        </div>
        <div>
          <label htmlFor='email'></label>
          <input type='text' id='email' placeholder='Ingrese su email' />
        </div>
        <div>
          <label htmlFor='email-confirm'></label>
          <input
            type='text'
            id='email-confirm'
            placeholder='Ingrese su email nuevamente'
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor='phone'></label>
          <input
            type='text'
            id='phone'
            placeholder='Ingrese su número de teléfono'
            {...register("phone")}
          />
        </div>
        <Link to='/' className='button'>
          Seguir comprando
        </Link>
        <button type='submit' className='button'>
          Finalizar compra
        </button>
      </form>
    </section>
  );
};

export { CheckOutForm };
