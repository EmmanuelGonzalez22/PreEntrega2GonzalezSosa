import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./styles.scss";

const CheckOutForm = ({ enviar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    getValues,
  } = useForm();

  const handleChange = (e) => {
    trigger(e.target.name);
    if (e.target.name === "email") {
      trigger("emailConfirm");
    }
  };

  return (
    <section className='form__container'>
      <h1 className='main__title'>Checkout</h1>
      <div className='border__gradient'>
        <form
          className='form'
          id='checkout-form'
          onSubmit={handleSubmit(enviar)}
        >
          <div>
            <label htmlFor='name'></label>
            <input
              className='input'
              type='text'
              id='name'
              placeholder='Ingrese su nombre'
              {...register("name", {
                required: "Ingrese su nombre",
              })}
              onFocus={handleChange}
              onKeyUp={handleChange}
            />
            {errors.name && <span className='red'>{errors.name.message}</span>}
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
              {...register("email", { required: "Ingrese su email" })}
              onFocus={handleChange}
              onKeyUp={handleChange}
            />
            {errors.email && (
              <span className='red'>{errors.email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor='emailConfirm'></label>
            <input
              className='input'
              type='text'
              id='emailConfirm'
              placeholder='Ingrese su email nuevamente'
              {...register("emailConfirm", {
                required: "Confirme su email",
                validate: {
                  matchesEmail: (value) =>
                    value === watch("email") || "Los emails no coinciden",
                },
              })}
              onFocus={handleChange}
              onKeyUp={handleChange}
            />
            {errors.emailConfirm && (
              <span className='red'>{errors.emailConfirm.message}</span>
            )}
          </div>
          <div>
            <label htmlFor='phone'></label>
            <input
              className='input'
              type='text'
              id='phone'
              placeholder='Ingrese su número de teléfono'
              {...register("phone", {
                required: "Ingrese su número de teléfono",
                pattern: {
                  value: /^\d+$/,
                  message: "Ingrese solo números",
                },
              })}
              onFocus={handleChange}
              onKeyUp={handleChange}
            />
            {errors.phone && (
              <span className='red'>{errors.phone.message}</span>
            )}
            <div className='buttons__container'>
              <Link to='/' className='button'>
                Seguir comprando
              </Link>
              <button type='submit' className='button'>
                Finalizar compra
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export { CheckOutForm };
