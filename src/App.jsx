 
import './App.css'
import Navbar from './components/Navbar/Navbar';
import VideoBanner from './components/VideoBanner/VideoBanner';

function App() {
 

  return (
    <div className="bg-[#f5f5f5] px-6">
      <div className=''>
        <Navbar></Navbar>
        <VideoBanner></VideoBanner>
      </div>
      <h1>Welcome to Floka</h1>
    </div>
  );
}

export default App
