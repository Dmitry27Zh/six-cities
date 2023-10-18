import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Offer } from '../../types/data';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import { uniqWith, isEqual } from 'lodash';

function MainScreen(): JSX.Element {
  const [currentOffer, setCurrentOffer] = useState<Offer | null>(null);
  const offers = useSelector((state: RootState) => state.offers);
  const city = useSelector((state: RootState) => state.city);
  const cities = uniqWith(offers.map((offer) => offer.city), (a, b) => isEqual(a, b));

  const offersInCity = offers.filter((offer) => offer.city.name === city.name);
  const points = offersInCity.map(({location}) => location);
  const handleCurrentOfferChange = (offer: Offer | null) => {
    setCurrentOffer(offer);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
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
