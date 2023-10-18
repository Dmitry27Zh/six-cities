import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import { City } from '../types/data';
import { Map, MapOptions, TileLayer } from 'leaflet';

type MapRefType<T> = MutableRefObject<T> & {
  isMapInited?: boolean;
};

function useMap(
  mapRef: MapRefType<HTMLElement | null>,
  city: City
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const config: MapOptions = useMemo(() => ({
    center: {
      lat: city.location.latitude,
      lng: city.location.longitude,
    },
    zoom: 10,
  }), [city]);

  useEffect(() => {
    const mapElement = mapRef.current;

    if (map && config.center) {
      map.flyTo(config.center, config.zoom);
    }

    if (mapElement !== null && !mapRef.isMapInited) {
      const instance = new Map(mapElement, config);

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
  }, [mapRef, city, map, config]);

  return map;
}

export default useMap;
