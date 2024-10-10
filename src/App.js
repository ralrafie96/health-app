import logo from './logo.svg';
import './App.css';
import HealthImage from './images/health_image.jpg'

function App() {
  return (
    <div className="App">
      <img className='health_image' src={HealthImage} alt='health_image' />
    </div>
  );
}

export default App;
