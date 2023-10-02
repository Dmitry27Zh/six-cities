import { Link } from 'react-router-dom';
import { Url } from '../../types/common';
import { PlaceCard } from '../../types/data';

type PlaceCardNameProps = Pick<PlaceCard, 'title'> & {
  url: Url;
}

function PlaceCardName({url, title}: PlaceCardNameProps): JSX.Element {
  return (
    <h2 className="place-card__name">
      <Link to={url}>{title}</Link>
    </h2>
  );
}

export default PlaceCardName;
