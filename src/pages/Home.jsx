import Banner from '../assets/Banner.png';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';

function Home(){
    const navigate = useNavigate();
    
    return(
        <div className='container'>
            <div>
                 <Navbar/>        
                <div className="green-blob1"></div>
                <div className="purple-blob2"></div>
                <img src= {Banner} alt="Banner" className='banner'/>
                <div className='date-btn-wraper'>
                    <div className='date'>23/08/23 - 25/08/23</div>
                    <button className="buybtn" onClick={()=> navigate('/tickets')}>Compre o Ingresso </button>

                </div>

            </div> 
            
           
        </div>
    );
}
export default Home;