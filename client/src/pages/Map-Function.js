import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import geoJson from "./markers.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGF2aWJlbnRpbSIsImEiOiJjbDg1MzRnOGIwbHMwM3VvMGhvbHR0cTVnIn0.A6SKNZZkRWUzuwFFM80gBw";

const Map = () => {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-98.5556199, 39.8097343],
      zoom: 3.5,
    });

    // Create default markers
    geoJson.features.map((feature) =>
      new mapboxgl.Marker().setLngLat(feature.geometry.coordinates).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;