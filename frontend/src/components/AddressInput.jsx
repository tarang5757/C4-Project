import React, { useRef } from "react";
import {
  useJsApiLoader,
  Autocomplete,
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

// Simple map configuration
const mapConfig = {
  containerStyle: {
    width: "100%",
    height: "300px",
    marginTop: "1rem",
    borderRadius: "0.5rem",
  },
  defaultCenter: { lat: 43.6532, lng: -79.3832 }, // Toronto
  defaultZoom: 15,
  mapOptions: {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  },
};

const AddressInput = ({ label, value, onChange, required, error }) => {
  const autocompleteRef = useRef(null);

  // Debug logging
  console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  console.log("All env variables:", import.meta.env);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const handlePlaceSelected = () => {
    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();
    if (!place.geometry) return;

    const { lat, lng } = place.geometry.location;
    const components = place.address_components;

    // Helper function to get address component
    const getComponent = (type) => {
      const component = components.find((c) => c.types.includes(type));
      return component ? component.long_name : "";
    };

    // Get address components
    const locationData = {
      address: `${getComponent("street_number")} ${getComponent(
        "route"
      )}`.trim(),
      city: getComponent("locality"),
      state:
        components.find((c) => c.types.includes("administrative_area_level_1"))
          ?.short_name || "",
      zipCode: getComponent("postal_code"),
      latitude: lat(),
      longitude: lng(),
      formattedAddress: place.formatted_address,
    };

    onChange(locationData);
  };

  if (!isLoaded) {
    return (
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
          placeholder="Loading address input..."
          disabled
        />
      </div>
    );
  }

  const getBorderClass = () => (error ? "border-red-500" : "border-gray-300");
  const getMapCenter = () => {
    if (value?.latitude && value?.longitude) {
      return { lat: value.latitude, lng: value.longitude };
    }
    return mapConfig.defaultCenter;
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceSelected}
        restrictions={{ country: "ca" }}
        fields={["address_components", "geometry", "formatted_address"]}
      >
        <input
          type="text"
          className={`w-full px-4 py-3 border ${getBorderClass()} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
          placeholder="Enter your address"
          defaultValue={value?.formattedAddress || ""}
          onChange={(e) => {
            if (!value || e.target.value !== value.formattedAddress) {
              onChange({ formattedAddress: e.target.value });
            }
          }}
          required={required}
        />
      </Autocomplete>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}

      {value && (
        <>
          <div className="mt-2 text-sm text-gray-600">
            <p>Selected Address:</p>
            <p className="font-medium">
              {value.address}, {value.city}, {value.state} {value.zipCode}
            </p>
          </div>

          <GoogleMap
            mapContainerStyle={mapConfig.containerStyle}
            center={getMapCenter()}
            zoom={mapConfig.defaultZoom}
            options={mapConfig.mapOptions}
          >
            {value.latitude && value.longitude && (
              <Marker
                position={{ lat: value.latitude, lng: value.longitude }}
              />
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
};

export default AddressInput;
