// import './App.scss'
import Footer from './Componets/Footer';
import Form from './Componets/Form/Form';
import Information from './Componets/Information';
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
      <div id='pufirain'>
        <PufiRain />
      </div>
      <div id='pufipuff'>
        <PufiPuff />
      </div>
      <div id='puficart'>
        <PufiCart />
      </div>
      <div id='pufinap'>
        <PufiNap />
      </div>
      <Information />
      <Footer />
    </div>
  );
}

export default App;
