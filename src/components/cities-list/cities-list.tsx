import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { City } from '../../types/data';
import { changeCity } from '../../store/city';

type CitiesListProps = {
  cities: City[];
}

function CitiesList({cities}: CitiesListProps): JSX.Element {
  const dispatch = useDispatch();
  const handleCityClick = (city: City) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => {
        const key = `${city.name}-${index}`;

        return (
          <li className="locations__item" key={key}>
            <a className="locations__item-link tabs__item" href='/' onClick={(event: MouseEvent) => {
              event.preventDefault();
              handleCityClick(city);
            }}
            >
              <span>{city.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default CitiesList;
