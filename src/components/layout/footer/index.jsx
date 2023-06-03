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
        <h4>Contáctanos</h4>
        <ul>
          <li>Teléfono:</li>
          <li>Email:</li>
          <li>Dirección:</li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4>Medios de pago</h4>
        <ul>
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4>Envíos</h4>
        <ul>
          <li>Envíos a todo el país</li>
          <li>Retiro en sucursal</li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4>Horarios</h4>
        <ul>
          <li>Lunes a viernes de 9 a 18hs</li>
          <li>Sábados de 9 a 13hs</li>
        </ul>
      </section>
    </footer>
  );
};
export { Footer };
