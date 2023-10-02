import { MutableRefObject, useEffect, useState } from 'react';
import { City } from '../types/data';
import { Map, TileLayer } from 'leaflet';

type MapRefType<T> = MutableRefObject<T> & {
  isMapInited?: boolean;
};

function useMap(
  mapRef: MapRefType<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (mapElement !== null && !mapRef.isMapInited) {
      const instance = new Map(mapElement, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: 10,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      instance.addLayer(layer);
      mapRef.isMapInited = true;
      setMap(instance);
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
