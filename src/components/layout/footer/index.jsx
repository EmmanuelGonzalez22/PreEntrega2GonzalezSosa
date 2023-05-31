import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer__main'>
      <Link to='/' className='logo__container'>
        <img src={logo} alt='logo' />
      </Link>
      <section>
        <h4>© {currentYear} - Todos los derechos reservados</h4>
      </section>
      <section className='footer__section'>
        <h4>Información</h4>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/'>Productos</Link>
          </li>
          <li>
            <Link to='/'>Contacto</Link>
          </li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4>Redes sociales</h4>
        <ul>
          <li>
            <Link to='/'>Facebook</Link>
          </li>
          <li>
            <Link to='/'>Instagram</Link>
          </li>
          <li>
            <Link to='/'>Twitter</Link>
          </li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4>Contáctanos</h4>
        <ul>
          <li>
            <Link to='/'>Teléfono</Link>
          </li>
          <li>
            <Link to='/'>Email</Link>
          </li>
          <li>
            <Link to='/'>Dirección</Link>
          </li>
        </ul>
      </section>
      <section>
        <h4>Medios de pago</h4>
        <ul>
          <li>
            <Link to='/'>Visa</Link>
          </li>
          <li>
            <Link to='/'>Mastercard</Link>
          </li>
          <li>
            <Link to='/'>American Express</Link>
          </li>
        </ul>
      </section>
      <section>
        <h4>Envíos</h4>
        <ul>
          <li>
            <Link to='/'>Envíos a todo el país</Link>
          </li>
          <li>
            <Link to='/'>Retiro en sucursal</Link>
          </li>
        </ul>
      </section>
      <section>
        <h4>Horarios</h4>
        <ul>
          <li>
            <Link to='/'>Lunes a viernes de 9 a 18hs</Link>
          </li>
          <li>
            <Link to='/'>Sábados de 9 a 13hs</Link>
          </li>
        </ul>
      </section>
      <section>
        <h4>Newsletter</h4>
        <ul>
          <li>
            <Link to='/'>Suscribite</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};
export { Footer };
