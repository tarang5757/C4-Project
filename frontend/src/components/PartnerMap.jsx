import React, { useState, useCallback } from "react";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  OverlayView,
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

  {
    id: 5,
    name: "Scott Mission",
    position: { lat: 43.655932, lng: -79.409106 },
    address: "502 Spadina Ave., Toronto, ON M5S 2H1",
    type: "Non-profit, Christian Organization",
  },
];

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "1rem",
};

const PartnerMap = () => {
  const [selectedPartner, setSelectedPartner] = useState(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const onMapLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    partnerLocations.forEach(({ position }) => {
      if (position) bounds.extend(position);
    });
    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
    } else {
      map.setCenter({ lat: 43.6532, lng: -79.3832 });
      map.setZoom(11);
    }
  }, []);

  if (loadError)
    return <div className="text-red-600 text-center">Error loading maps</div>;
  if (!isLoaded)
    return <div className="text-center text-gray-500">Loading Maps...</div>;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200">
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onMapLoad}
        options={{
          gestureHandling: "cooperative",
          disableDefaultUI: true,
        }}
        onClick={() => setSelectedPartner(null)} // Close overlay when clicking map
      >
        {partnerLocations.map((partner) => (
          <Marker
            key={partner.id}
            position={partner.position}
            onClick={() => setSelectedPartner(partner)}
          />
        ))}

        {selectedPartner && (
          <OverlayView
            position={selectedPartner.position}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className="relative -translate-x-1/2 -translate-y-full">
              <div className="rounded-lg bg-gray-900 bg-opacity-90 backdrop-blur-sm border border-orange-400 border-opacity-40 p-4 w-72 text-gray-100 font-sans shadow-md">
                <button
                  onClick={() => setSelectedPartner(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-orange-400 transition-colors duration-200 text-lg font-semibold"
                  aria-label="Close popup"
                >
                  ✕
                </button>
                <h3 className="text-lg font-bold mb-1 text-orange-300 truncate">
                  {selectedPartner.name}
                </h3>
                <span className="inline-block bg-orange-500 bg-opacity-80 text-gray-100 text-xs font-medium px-3 py-1 rounded-full mb-2 shadow-sm uppercase tracking-wide">
                  {selectedPartner.type}
                </span>
                <p className="text-sm text-gray-300 truncate font-semibold">
                  {selectedPartner.address}
                </p>
              </div>
            </div>
          </OverlayView>
        )}
      </GoogleMap>
    </div>
  );
};

export default PartnerMap;
