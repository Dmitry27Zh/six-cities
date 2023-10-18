import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types/data';

type OffersListProps = {
  offers: Offers;
  onCurrentOfferChange: (offer: Offer | null) => void;
}

function OffersList({offers, onCurrentOfferChange}: OffersListProps):JSX.Element {
  const handlePlaceCardMouseOver = (offer: Offer) => {
    onCurrentOfferChange(offer);
  };
  const handlePlaceCardMouseLeave = () => {
    onCurrentOfferChange(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} onMouseOver={handlePlaceCardMouseOver} onMouseLeave={handlePlaceCardMouseLeave} {...offer} />)}
    </div>
  );
}

export default OffersList;
