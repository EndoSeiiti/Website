import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import Lineup from './pages/Lineup.jsx'
import Login from './pages/Login.jsx'
import Signin from './pages/Sign-in.jsx'
import Tickets from './pages/Tickets.jsx'

function App() {

return(
  <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/lineup" element= {<Lineup/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/signin" element= {<Signin/>}/>
      <Route path="/tickets" element= {<Tickets/>}/>
    </Routes>
  </BrowserRouter>
)
}

export default App
