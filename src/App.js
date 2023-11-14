
import './App.css';
import Home from './componets/Home';
import Navbar from './componets/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './componets/Products';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
   <Routes>
   <Route exact path='/' Component={Home} />
   <Route exact path='/product' Component={Products} />
     
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
