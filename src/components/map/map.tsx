import { useEffect, useRef } from 'react';
import { City, Location, Locations } from '../../types/data';
import useMap from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import 'leaflet/dist/leaflet.css';
import cn from 'classnames';

type MapProps = {
  points: Locations;
  city: City;
  selectedPoint?: Location;
  className?: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({className, points, city, selectedPoint}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            point.latitude === selectedPoint?.latitude &&
            point.longitude === selectedPoint?.longitude ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return <section ref={mapRef} className={cn('map', className)}></section>;
}

export default Map;
