import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./styles.scss";

const CheckOutForm = ({ enviar }) => {
  const { register, handleSubmit } = useForm();

  return (
    <section className='form__container'>
      <h1 className='main__title'>Checkout</h1>
      <form className='form' id='checkout-form' onSubmit={handleSubmit(enviar)}>
        <div>
          <label htmlFor='name'></label>
          <input
            className='input'
            type='text'
            id='name'
            placeholder='Ingrese su nombre'
            {...register("name")}
          />
        </div>
        <div>
          <label htmlFor='surname'></label>
          <input
            className='input'
            type='text'
            id='surname'
            placeholder='Ingrese su apellido'
            {...register("surname")}
          />
        </div>
        <div>
          <label htmlFor='email'></label>
          <input
            className='input'
            type='text'
            id='email'
            placeholder='Ingrese su email'
          />
        </div>
        <div>
          <label htmlFor='email-confirm'></label>
          <input
            className='input'
            type='text'
            id='email-confirm'
            placeholder='Ingrese su email nuevamente'
            {...register("email")}
          />
        </div>
        <div>
          <label htmlFor='phone'></label>
          <input
            className='input'
            type='text'
            id='phone'
            placeholder='Ingrese su número de teléfono'
            {...register("phone")}
          />
        </div>
        <div className='buttons__container'>
          <Link to='/' className='button'>
            Seguir comprando
          </Link>
          <button type='submit' className='button'>
            Finalizar compra
          </button>
        </div>
      </form>
    </section>
  );
};

export { CheckOutForm };
