import cart from "./assets/cart.svg"
import "../../sass/main.css"

const CartWidget = () => {
    return (
        <div className="cartWidget__container">
                <img src={cart} alt="cart"/>
                <span id="contadorCarrito">3</span>
        </div>
    )
}

export default CartWidget