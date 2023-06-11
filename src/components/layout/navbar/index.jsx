import { Link, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { CartWidget } from "../../../components";
import { useServices } from "../../../hooks";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const NavBar = () => {
  const { categories, loadCategories } = useServices();

  useEffect(() => {
    loadCategories();
    // eslint-disable-next-line
  }, []);

  /* COMPONENTE JSX */
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
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink to={`/category/${category.name}`}>
                  {category.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};

export { NavBar };
