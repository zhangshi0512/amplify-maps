import "./App.css";
import { HikeCard, Hikes } from "./ui-components";
import { MapView } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { Hike } from "./models";
import { DataStore } from "aws-amplify";
import { Marker, Popup } from "react-map-gl";

function MarkerWithPopup({ hike, latitude, longitude }) {
  const [showPopup, setShowPopup] = useState(false);

  // event listener that toggles whether the popup is displayed
  const handleMarkerClick = ({ originalEvent }) => {
    originalEvent.stopPropagation();
    setShowPopup(true);
  };

  // render the marker and the popup, render the CardB again within the popup.
  return (
    <>
      <Marker
        latitude={latitude}
        longitude={longitude}
        onClick={handleMarkerClick}
      />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          offset={{ bottom: [0, -40] }}
          onClose={() => setShowPopup(false)}
          maxWidth="95%"
          closeOnMove
        >
          <HikeCard hike={hike} />
        </Popup>
      )}
    </>
  );
}

function App() {
  // at the top of App.js pull all the hikes and store them in state
  const [hikes, setHikes] = useState([]);
  useEffect(() => {
    const getHikes = async () => {
      const hikes = await DataStore.query(Hike);
      setHikes(hikes);
    };
    getHikes();
  }, []);

  return (
    <div className="container">
      <Hikes />
      <MapView
        initialViewState={{
          latitude: 39.113014,
          longitude: -105.358887,
          zoom: 7,
        }}
      >
        {hikes.map((hike) => (
          <MarkerWithPopup
            latitude={hike.lat}
            longitude={hike.long}
            hike={hike}
            key={hike.id}
          />
        ))}
      </MapView>
    </div>
  );
}

export default App;
