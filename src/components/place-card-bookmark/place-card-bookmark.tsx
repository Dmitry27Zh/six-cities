import cn from 'classnames';
import { PlaceCard } from '../../types/data';

type PlaceCardBookmarkProps = {
  active: PlaceCard['isFavorite'];
}

function PlaceCardBookmark({active}: PlaceCardBookmarkProps): JSX.Element {
  return (
    <button className={cn('place-card__bookmark-button', 'button', {'place-card__bookmark-button--active': active})} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default PlaceCardBookmark;
