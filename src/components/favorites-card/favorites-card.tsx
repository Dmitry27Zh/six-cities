import { AppRoute } from '../../const';
import { Offer } from '../../types/data';
import PlaceCardBadge from '../place-card-badge';
import PlaceCardImage from '../place-card-image/place-card-image';
import PlaceCardInfo from '../place-card-info/place-card-info';

type FavoritesCardProps = {
  offer: Offer;
}

function FavoritesCard({offer}: FavoritesCardProps):JSX.Element {
  const {id, isPremium, isFavorite, price, type, previewImage, title, rating} = offer;
  const url = AppRoute.Room.replace('id', `${id}`);

  return (
    <article className="favorites__card place-card">
      <PlaceCardBadge isPremium={isPremium}/>
      <PlaceCardImage className="favorites__image-wrapper" src={previewImage} url={url}/>
      <PlaceCardInfo className="favorites__card-info" price={price} isFavorite={isFavorite} rating={rating} title={title} type={type} url={url}/>
    </article>
  );
}

export default FavoritesCard;
