import HeaderDown from "./HeaderDown"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Searchbar from "./SearchBar";

const Header = ({Search}) => {

  return (
    <header >
        <nav className="bg-slate-950">
            <div className="flex items-center">
            <a href="https://www.amazon.it">
            <img src=".\src\assets\logo.png" alt="logo" className="w-[70px] m-[2rem]"/>
          </a>
            </div>
              <Searchbar Search={Search}/>
              <div className="form">
          <a href="login.html">
            <button className="btn-container-form" type="button">Login</button>
          </a>
          <a href="register.html">
            <button className="btn-container-form" type="button">Registrazioni</button>
          </a>
        </div>
        <div className="cart">
        <button className="btn-container" type="button"><ShoppingCartIcon /></button>
        </div>
        </nav>
       
        <HeaderDown />
    </header>

  )
}

export default Header