import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";

const NavBar = ({ footer, nombre }) => {
  return (
    <nav className="nav">
      {!footer && <Link to="#">{nombre}</Link>}
      <CartWidget />
      <Link to="/productos/chocolateLiquido" className="nav__link">Chocolate Liquido  </Link>
      <Link to="/productos/chocolateBarra" className="nav__link">Chocolate en barra  </Link>
      <Link to="/productos/chocolateMesa" className="nav__link">Chocolate de Mesa  </Link>
    </nav>
  )
};

export default NavBar;
