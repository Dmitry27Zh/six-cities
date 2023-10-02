import { PlaceCard } from '../../types/data';
import PlaceCardBadge from '../place-card-badge';
import PlaceCardImage from '../place-card-image/place-card-image';
import PlaceCardInfo from '../place-card-info/place-card-info';
import { AppRoute } from '../../const';


function NearCard({price, isFavorite, rating, type, previewImage, id, title, isPremium}: PlaceCard): JSX.Element {
  const url = AppRoute.Room.replace('id', `${id}`);

  return (
    <article className="near-places__card place-card">
      <PlaceCardBadge isPremium={isPremium}/>
      <PlaceCardImage className='near-places__image-wrapper' src={previewImage} url={url}/>
      <PlaceCardInfo price={price} isFavorite={isFavorite} rating={rating} title={title} type={type} url={url}/>
    </article>
  );
}

export default NearCard;
