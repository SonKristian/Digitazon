// Components/NavBar.js
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
       <nav className='navigation'> 
        <header>
          <ul className='routing'>
             <li>
                <NavLink to="/">Home</NavLink>
             </li>
             <li>
                <NavLink to="/about">About</NavLink>
             </li>
             <li>
                <NavLink to="/products">Products</NavLink>
             </li>
          </ul>
          </header>
       </nav>
    );
   };

   const MainHome = () =>{
    return(
        <main>
            <NavBar />
        </main>
    )
   }
export default MainHome;