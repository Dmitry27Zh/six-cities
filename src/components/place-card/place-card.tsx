import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offer } from '../../types/data';
import Rating from '../rating/rating';
import _ from 'lodash';

type PlaceCardProps = {
  offer: Offer;
  onMouseOver: (offer: Offer) => void;
}

function PlaceCard({offer, onMouseOver}: PlaceCardProps): JSX.Element {
  const {id, price, isFavorite, type, previewImage, title, rating} = offer;
  const offerUrl = AppRoute.Room.replace('id', `${id}`);

  return (
    <article className="cities__card place-card" onMouseOver={() => onMouseOver(offer)}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="preview"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <Rating value={rating} />
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{_.capitalize(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
