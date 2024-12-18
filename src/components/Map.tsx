// src/components/Map.tsx

import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapOverlay, MapWrapper, MapCloseButton } from "../styles/MapStyles";

interface MapProps {
  latitude: number;
  longitude: number;
  address: string;
  onClose: () => void;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, address, onClose }) => {
  useEffect(() => {
    const map = L.map("leaflet-map").setView([latitude, longitude], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map).bindPopup(address).openPopup();

    return () => {
      map.remove(); // Usunięcie instancji mapy przy odmontowaniu komponentu
    };
  }, [latitude, longitude, address]);

  return (
    <MapOverlay onClick={onClose}>
      <MapWrapper onClick={(e) => e.stopPropagation()}>
        <MapCloseButton onClick={onClose}>×</MapCloseButton>
        <div id="leaflet-map" style={{ width: "100%", height: "100%" }} />
      </MapWrapper>
    </MapOverlay>
  );
};

export default Map;
