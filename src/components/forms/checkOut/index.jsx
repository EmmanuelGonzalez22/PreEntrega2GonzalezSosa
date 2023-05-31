const CheckOutForm = () => {
  return (
    <div className='checkout-form'>
      <h1>Checkout</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nombre</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='form-group'>
          <label htmlFor='surname'>Apellido</label>
          <input type='text' name='surname' id='surname' />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='text' />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Teléfono</label>
          <input type='text' />
        </div>
      </form>
    </div>
  );
};

export { CheckOutForm };
