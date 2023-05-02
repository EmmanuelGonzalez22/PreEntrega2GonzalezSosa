import logo from "./assets/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import "../../sass/main.css";

export const NavBar = () => {
  return (
    <nav className='nav'>
      <a href='./index.html' className='logo__container'>
        <img src={logo} alt='logo' />
      </a>
      <ul className='categorias'>
        <li>
          <a href=''>PERROS</a>
        </li>
        <li>
          <a href=''>GATOS</a>
        </li>
        <li>
          <a href=''>ACCESORIOS</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
