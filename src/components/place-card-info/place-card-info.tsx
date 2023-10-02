import PlaceCardBookmark from '../place-card-bookmark/place-card-bookmark';
import PlaceCardName from '../place-card-name/place-card-name';
import RatingStars from '../rating/rating-stars';
import PlaceCardType from '../place-card-type';
import { PlaceCard } from '../../types/data';
import { ClassName, Url } from '../../types/common';
import cn from 'classnames';

type PlaceCardInfoProps = Pick<PlaceCard, 'price' | 'isFavorite' | 'rating' | 'title' | 'type'> & {
  url: Url;
  className?: ClassName;
}

function PlaceCardInfo({className, price, isFavorite, rating, title, type, url}: PlaceCardInfoProps): JSX.Element {
  return (
    <div className={cn('place-card__info', className)}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <PlaceCardBookmark active={isFavorite}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <RatingStars value={rating}/>
        </div>
      </div>
      <PlaceCardName title={title} url={url} />
      <PlaceCardType value={type}/>
    </div>
  );
}

export default PlaceCardInfo;
