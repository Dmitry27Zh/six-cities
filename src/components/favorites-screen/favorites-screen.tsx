import Header from '../header/header';
import { Offers } from '../../types/data';
import LocationItem from '../location-item/location-item';
import _ from 'lodash';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const offersGroupByLocation = _.groupBy(offers, (offer) => offer.city.name);
  const locations = Object.keys(offersGroupByLocation);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {locations.map((location) => <LocationItem key={location} location={location} offers={offersGroupByLocation[location]} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
