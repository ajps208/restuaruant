import './App.css';
import Footer from './components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import View from './pages/View';

function App() {
  return (
    <>
    <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/view/:id' element={<View/>}/>

      </Routes>
    <Footer/>
    </>
  );
}

export default App;
