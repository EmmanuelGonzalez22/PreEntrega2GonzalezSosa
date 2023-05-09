import { CartWidget } from "../CartWidget";
import logo from "./assets/logo.png";

const NavBar = () => {
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

export { NavBar };
