import { Review as ReviewType } from '../../types/data';
import Rating from '../rating/rating';
import Time from '../time/time';

type ReviewProps = ReviewType

function Review({user, rating, comment, date}: ReviewProps): JSX.Element {
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <Rating value={rating} />
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <Time className="reviews__time" date={date} />
      </div>
    </li>
  );
}

export default Review;
