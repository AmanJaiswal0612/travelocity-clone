
import './App.css';
import BigGrid from './components/BigGrid';
import Destination from './components/Destination';
import FeatureOffer from './components/FeatureOffer';
import Fotter from './components/Fotter';
import ImageForm from './components/ImageForm';
import Navbar from './components/Navbar';
import Scanner from './components/Scanner';
import Slider1 from './components/Slider1';
import Slider2 from './components/Slider2';
import Video from './components/Video';

function App() {
  return (
    <div>
      <Navbar/>
      <ImageForm/>
      <Slider1/>
      <BigGrid/>
      <Slider2/>
      <FeatureOffer/>
      <Video/>
      <Scanner/>
      <Destination/>
      <Fotter/>
    </div>
  );
}

export default App;
