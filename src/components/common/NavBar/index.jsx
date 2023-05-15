import { CartWidget } from "../CartWidget";
import logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='logo__container'>
        <img src={logo} alt='logo' />
      </Link>
      <ul className='categorias'>
        <li>
          <NavLink to='/'>INICIO</NavLink>
        </li>
        <li>
          <NavLink to='/category/perro'>PERRO</NavLink>
        </li>
        <li>
          <NavLink to='/category/gato'>GATO</NavLink>
        </li>
        <li>
          <NavLink to='/category/accesorios'>ACCESORIOS</NavLink>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export { NavBar };
