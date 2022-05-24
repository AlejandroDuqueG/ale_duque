import { Link } from "react-router-dom"
import NavBar from "./components/NavBar"

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__titlo">ChocoApp</h1>
      </Link>
      <NavBar nombre="Alejandro" apellido="Duque" footer={false}/>
    </header>
  )
}

export default Header