import Banner from '../assets/Banner.png';
import Sobrenos from '../assets/Sobrenos.png';
import Crowd from '../assets/Crowd.png';

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
                <img src={Sobrenos} alt= "sobrenos" className='sobrenos'/>
                <div className='aboutWraper'>
                    <img src={Crowd} alt='crowd' className='crowd'/>
                    <div className='abouttext'></div>
                    <div className='logo2'></div>
                </div>
            </div> 
            
           
        </div>
    );
}
export default Home;