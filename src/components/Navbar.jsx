import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {setNavOpen(!navOpen);};

    return(
        <div className='navwraper'>
            <nav className={`navbar ${navOpen ? 'active' : ''}`}>
                
                <div className='logo'>東京都</div>

                
                    <div className="navlinks">
                        <Link to='/'>Início</Link>
                        <Link to='/lineup'>Atrações</Link>
                        <Link to='/tickets'>Ingressos</Link>
                        <Link to='/signin'>Cadastro</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                

                
                <div className="hamburger" onClick={toggleNav}>
                    {navOpen ? '✖' : '☰'}
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
