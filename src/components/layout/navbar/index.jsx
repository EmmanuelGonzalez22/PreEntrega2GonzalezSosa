import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { CartWidget } from "../../../components";
import { useServices } from "../../../hooks";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const NavBar = () => {
  const { categories, loadCategories } = useServices();
  const menuRef = useRef(null);
  const toggleMenuRef = useRef(null);

  const handleMenu = () => {
    menuRef.current.classList.toggle("show");
    toggleMenuRef.current.classList.toggle("show");
  };

  const removeShowMenu = () => {
    menuRef.current.classList.remove("show");
    toggleMenuRef.current.classList.remove("show");
  };

  useEffect(() => {
    loadCategories();
    const handleClickOutsideMenu = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !toggleMenuRef.current.contains(event.target)
      ) {
        removeShowMenu();
      }
    };

    document.addEventListener("click", handleClickOutsideMenu);

    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
    // eslint-disable-next-line
  }, []);

  /* COMPONENTE JSX */
  return (
    <header className='header__main'>
      <nav className='nav'>
        <Link to='/' className='logo__container' onClick={removeShowMenu}>
          <img src={logo} alt='logo' />
        </Link>
        <ul className='categorias' ref={menuRef}>
          <li>
            <NavLink to='/' onClick={removeShowMenu}>
              INICIO
            </NavLink>
          </li>
          {categories.map((category) => {
            return (
              <li key={category.id}>
                <NavLink
                  to={`/category/${category.name}`}
                  onClick={removeShowMenu}
                >
                  {category.name.toUpperCase()}
                </NavLink>
              </li>
            );
          })}
        </ul>
        {/* BURGUER MENU */}
        <div id='toggle__menu' onClick={handleMenu} ref={toggleMenuRef}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <CartWidget />
      </nav>
    </header>
  );
};

export { NavBar };
