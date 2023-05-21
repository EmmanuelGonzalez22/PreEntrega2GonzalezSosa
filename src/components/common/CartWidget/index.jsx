import cart from "./assets/cart.svg";

const CartWidget = () => {
  return (
    <div className='cartWidget__container'>
      <img src={cart} alt='cart' />
      <span id='contadorCarrito'>3</span>
    </div>
  );
};

export { CartWidget };
