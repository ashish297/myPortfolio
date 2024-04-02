import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';

function App() {
  return (
    <div className='bg-[#0e1630] w-screen overflow-x-hidden'>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
