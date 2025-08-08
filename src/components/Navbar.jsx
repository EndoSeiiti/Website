import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{setIsOpen(!isOpen);};

    return(
        <div className='navwraper'>
            <nav className='navbar'>
                <div className='logo'>東京都</div>
                <div className={`navlinks ${isOpen ? 'active' : ''}`}>
                    <Link to = '/'>Inicio</Link>
                    <Link to = '/lineup'>Atrações</Link>
                    <Link to = '/tickets'>Ingressos</Link>
                    <Link to = '/signin'>Cadastro</Link>
                    <Link to = '/login'>Login</Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                
            </nav>
        </div>
    );
}
export default Navbar;