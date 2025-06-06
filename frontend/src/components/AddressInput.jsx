import React, { useState, useCallback } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const partnerLocations = [
  {
    id: 1,
    name: "North York Harvest",
    position: { lat: 43.7615, lng: -79.4111 },
    address: "116 Industry St, Toronto, ON M6M 4L8",
    type: "Food Bank & Community Services",
  },
  {
    id: 2,
    name: "Feed Ontario",
    position: { lat: 43.6532, lng: -79.3832 },
    address: "191 New Toronto St, Etobicoke, ON M8V 2E7",
    type: "Food Security Network",
  },
  {
    id: 3,
    name: "Fred Victor",
    position: { lat: 43.6548, lng: -79.3871 },
    address: "145 Queen St E, Toronto, ON M5C 2S8",
    type: "Shelter & Community Outreach",
  },
  {
    id: 4,
    name: "Second Harvest",
    position: { lat: 43.6532, lng: -79.3832 },
    address: "120 The Esplanade, Toronto, ON M5E 1R4",
    type: "Food Rescue Organization",
  },
];

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1rem",
};

const defaultCenter = { lat: 43.6532, lng: -79.3832 };

const PartnerMap = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  // Center the map to fit all markers
  const onMapLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    partnerLocations.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto p-4 bg-white rounded-xl shadow-lg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onMapLoad}
        options={{
          gestureHandling: "cooperative",
          disableDefaultUI: false,
        }}
      >
        {partnerLocations.map((partner) => (
          <Marker
            key={partner.id}
            position={partner.position}
            onClick={() => setSelectedPartner(partner)}
          />
        ))}

        {selectedPartner && (
          <InfoWindow
            position={selectedPartner.position}
            onCloseClick={() => setSelectedPartner(null)}
          >
            <div style={{ maxWidth: "250px" }}>
              <h3 style={{ margin: 0 }}>{selectedPartner.name}</h3>
              <p style={{ margin: "4px 0" }}>{selectedPartner.type}</p>
              <p style={{ margin: 0, fontSize: "0.9em", color: "#555" }}>
                {selectedPartner.address}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default PartnerMap;
