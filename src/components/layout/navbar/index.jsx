import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../../common/cartWidget";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const NavBar = () => {
  return (
    <header className='header__main'>
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
    </header>
  );
};

export { NavBar };
