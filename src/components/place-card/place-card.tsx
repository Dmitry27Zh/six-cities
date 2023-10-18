import { AppRoute } from '../../const';
import { Offer } from '../../types/data';
import { OnPlaceCardMouseLeave, OnPlaceCardMouseOver } from '../../types/handlers';
import PlaceCardBadge from '../place-card-badge';
import PlaceCardImage from '../place-card-image/place-card-image';
import PlaceCardInfo from '../place-card-info/place-card-info';


type PlaceCardProps = Offer & {
  onMouseOver: OnPlaceCardMouseOver;
  onMouseLeave: OnPlaceCardMouseLeave;
}

function PlaceCard({onMouseOver, onMouseLeave, ...offer }: PlaceCardProps): JSX.Element {
  const {id, price, isFavorite, type, previewImage, title, rating, isPremium} = offer;
  const url = AppRoute.Room.replace('id', `${id}`);

  return (
    <article className="cities__card place-card" onMouseOver={(): void => onMouseOver(offer)} onMouseLeave={onMouseLeave}>
      <PlaceCardBadge isPremium={isPremium}/>
      <PlaceCardImage src={previewImage} url={url}/>
      <PlaceCardInfo price={price} isFavorite={isFavorite} rating={rating} title={title} type={type} url={url}/>
    </article>
  );
}

export default PlaceCard;
