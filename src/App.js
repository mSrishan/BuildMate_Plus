import logo from './logo.svg';
import './App.css';
import { Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div >
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
