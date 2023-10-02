import { PlaceCard } from '../types/data';

type PlaceCardBadgeProps = Pick<PlaceCard, 'isPremium'>

function PlaceCardBadge({isPremium}: PlaceCardBadgeProps): JSX.Element | null {
  if (isPremium) {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  } else {
    return null;
  }
}

export default PlaceCardBadge;
