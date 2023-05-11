import { CartWidget } from "../CartWidget";
import logo from "./assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav'>
      <a href='./index.html' className='logo__container'>
        <img src={logo} alt='logo' />
      </a>
      <ul className='categorias'>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to=''>PERROS</NavLink>
        </li>
        <li>
          <NavLink to=''>GATOS</NavLink>
        </li>
        <li>
          <NavLink to=''>ACCESORIOS</NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export { NavBar };
