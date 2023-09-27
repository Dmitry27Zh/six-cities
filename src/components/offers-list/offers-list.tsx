/* eslint-disable no-console */
import PlaceCard from '../place-card/place-card';
import { Offer, Offers } from '../../types/data';
import { useEffect, useState } from 'react';

type OffersListProps = {
  offers: Offers;
}

function OffersList({offers}: OffersListProps):JSX.Element {
  const [currentOffer, setCurrentOffer] = useState<Offer>();
  const handleCurrentOfferChange = (offer: Offer) => {
    setCurrentOffer(offer);
  };
  useEffect(() => console.log(currentOffer), [currentOffer]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onMouseOver={handleCurrentOfferChange} />)}
    </div>
  );
}

export default OffersList;
