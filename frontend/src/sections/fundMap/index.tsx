import { useEffect, useState } from 'react';
import './style.css';

const FundMap = () => {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    // Завантажуємо Leaflet CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    // Завантажуємо Leaflet JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = () => {
      // @ts-ignore
      const L = window.L;

      const mapInstance = L.map('map').setView([50.4501, 30.5234], 15); // Координати Києва

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstance);

      // Додаємо маркер для адреси
      L.marker([50.4501, 30.5234], {
        icon: L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      })
        .addTo(mapInstance)
        .bindPopup('Європейський Фонд Допомоги<br>вул. Хорива, 7, Київ');

      setMap(mapInstance);
    };

    document.head.appendChild(script);

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <div className="fund-map">
      <div className="map-container">
        <div id="map" className="map"></div>
      </div>
    </div>
  );
};

export default FundMap;