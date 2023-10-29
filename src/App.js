
import './App.css';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>

      <Navbar/>
      <Home/> 
    </BrowserRouter>
    </>
  );
}

export default App;
