// import './App.scss'
import Footer from './Componets/Footer';
import Information from './Componets/Information';
import Inicio from './Componets/Inicio';
import PufiCart from './Componets/PufiCart';
import PufiNap from './Componets/PufiNap';
import PufiPuff from './Componets/PufiPuff';
import PufiRain from './Componets/PufiRain';

function App() {
  return (
    <div className='hola'>
      {/* <Navbar /> */}
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
