import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className='footer__main'>
      <Link to='/' className='logo__container'>
        <img src={logo} alt='logo' />
      </Link>
    </footer>
  );
};
export { Footer };
