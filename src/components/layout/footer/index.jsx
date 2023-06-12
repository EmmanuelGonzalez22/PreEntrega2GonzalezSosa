import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer__main'>
      <section className='footer__section section__copyright'>
        <Link to='/' className='logo__container'>
          <img src={logo} alt='logo' />
        </Link>
        <h3 className='section__title'>
          Desarrollado por{" "}
          <a
            href='https://github.com/EmmanuelGonzalez22'
            target='_blank'
            rel='noopener noreferrer'
          >
            Emmanuel Gonzalez
          </a>
        </h3>
        <h4 className='section__title'>
          © {currentYear} - Todos los derechos reservados
        </h4>
      </section>
      <section className='footer__section'>
        <h4 className='section__title'>Contáctanos</h4>
        <ul className='section__list__title'>
          <li className='section__list__item'>
            <span className='fw-bold'>- Teléfono:</span> 2944-690230
          </li>
          <li className='section__list__item'>
            <span className='fw-bold'>- Email:</span> megonzalezsosa@hotmail.com
          </li>
          <li className='section__list__item'>
            <span className='fw-bold'>- Dirección:</span> Tiscornia 927
          </li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4 className='section__title'>Medios de pago</h4>
        <ul className='section__list__title'>
          <li className='section__list__item'>- Visa</li>
          <li className='section__list__item'>- Mastercard</li>
          <li className='section__list__item'>- American Express</li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4 className='section__title'>Envíos</h4>
        <ul className='section__list__title'>
          <li className='section__list__item'>- Envíos a todo el país</li>
          <li className='section__list__item'>- Retiro en sucursal</li>
        </ul>
      </section>
      <section className='footer__section'>
        <h4 className='section__title'>Horarios</h4>
        <ul className='section__list__title'>
          <li className='section__list__item'>- Lunes a viernes de 9 a 18hs</li>
          <li className='section__list__item'>- Sábados de 9 a 13hs</li>
        </ul>
      </section>
    </footer>
  );
};
export { Footer };
