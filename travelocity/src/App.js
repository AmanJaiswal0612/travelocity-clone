import "./App.css";
import DetailsPage from "./componants/DetailsPage";
import Photos from "./componants/Photos";
import Roomdetails from "./componants/RoomDetails";
import Rooms from "./componants/Rooms";

function App() {
  return (
    <div className="App">
      <Photos />
      <DetailsPage />
      <Roomdetails />
      <Rooms />
    </div>
  );
}

export default App;
