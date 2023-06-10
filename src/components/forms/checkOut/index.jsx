import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { FormInput } from "../../common";
import "./styles.scss";

const CheckOutForm = ({ enviar }) => {
  const methods = useForm();
  const { handleSubmit } = methods;

  return (
    <section className='form__container'>
      <h1 className='main__title'>Checkout</h1>
      <div className='border__gradient'>
        <FormProvider {...methods}>
          <form
            className='form'
            id='checkout-form'
            onSubmit={handleSubmit(enviar)}
          >
            <FormInput
              className='input'
              id={"name"}
              placeholder={"Ingrese su nombre"}
              type={"text"}
              required={true}
              pattern={/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/}
              errorMessage={"Ingrese solo letras"}
            />
            <FormInput
              className='input'
              id={"surname"}
              placeholder={"Ingrese su apellido"}
              type={"text"}
              pattern={/^[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/}
              errorMessage={"Ingrese solo letras"}
            />
            <FormInput
              className='input'
              id='email'
              placeholder={"Ingrese su email"}
              type={"text"}
              required={true}
              pattern={/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}
              errorMessage={"Ingrese un email válido"}
            />
            <FormInput
              className='input'
              id={"emailConfirm"}
              placeholder={"Confirme su email"}
              type={"text"}
              required={true}
              errorMessage={"Los emails no coinciden"}
              match={"email"}
            />
            <FormInput
              className='input'
              id={"phone"}
              placeholder={"Ingrese su número de teléfono"}
              type={"text"}
              required={true}
              pattern={/^\d+$/}
              errorMessage={"Ingrese solo números"}
              minLength={8}
            />
            <div className='buttons__container'>
              <Link to='/' className='button'>
                Seguir comprando
              </Link>
              <button type='submit' className='button'>
                Finalizar compra
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export { CheckOutForm };
