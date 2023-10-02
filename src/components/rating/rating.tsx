import { Rating as RatingType } from '../../types/data';
import { MAX_RATING } from '../../const';

type RatingStarsProps = {
  value: RatingType;
}

function RatingStars({value}: RatingStarsProps):JSX.Element {
  const ratingPerc = (value / MAX_RATING) * 100;

  return (
    <>
      <span style={{width: `${ratingPerc}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </>
  );
}

export default RatingStars;
