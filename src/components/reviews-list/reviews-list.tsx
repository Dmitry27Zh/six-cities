import { Reviews } from '../../types/data';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: Reviews;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => <Review key={review.id} {...review} />)}
    </ul>
  );
}

export default ReviewsList;
