// import './App.scss'
import Inicio from './Componets/Inicio';
import Navbar from './Componets/Navbar';
import PufiCart from './Componets/PufiCart';
import PufiNap from './Componets/PufiNap';
import PufiPuff from './Componets/PufiPuff';
import PufiRain from './Componets/PufiRain';

function App() {
  return (
    <div className='hola'>      
      <Navbar />
      <h1> Hola Mundo! </h1>
      <Inicio />
      <PufiRain />
      <PufiPuff />
      <PufiCart />
      <PufiNap />
    </div>
  );
}

export default App;
