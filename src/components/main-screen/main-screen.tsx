import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Offer } from '../../types/data';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import { uniqWith, isEqual } from 'lodash';
import Sort from '../sort/sort';
import { SortTypes } from '../../types/common';
import { SORT_TYPES } from '../../const';

function MainScreen(): JSX.Element {
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const offers = useSelector((state: RootState) => state.offers);
  const city = useSelector((state: RootState) => state.city);
  const cities = uniqWith(offers.map((offer) => offer.city), (a, b) => isEqual(a, b));
  const [sortBy, setSortBy] = useState<SortTypes>(SORT_TYPES[0]);

  const offersInCity = offers
    .filter((offer) => offer.city.name === city.name)
    .sort((a, b) => {
      switch(sortBy) {
        case 'Popular':
          return 0;
        case 'Price: low to high':
          return a.price - b.price;
        case 'Price: high to low':
          return b.price - a.price;
        case 'Top rated first':
          return b.rating - a.rating;
        default:
          throw new Error('Unknown sort type!');
      }
    });
  const points = offersInCity.map(({location}) => location);
  const handleCurrentOfferChange = (offer: Offer | null) => {
    setCurrentOffer(offer);
  };
  const handleSortByChange = (newSortBy: SortTypes) => {
    setSortBy(newSortBy);
  };

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersInCity.length} places to stay in {city.name}</b>
              <Sort current={sortBy} onChange={handleSortByChange} />
              <OffersList offers={offersInCity} onCurrentOfferChange={handleCurrentOfferChange}/>
            </section>
            <div className="cities__right-section">
              <Map className="cities__map" points={points} city={city} selectedPoint={currentOffer?.location}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
