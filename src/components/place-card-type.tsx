import _ from 'lodash';
import { PlaceCard } from '../types/data';

type PlaceCardTypeProps = {
  value: PlaceCard['type'];
}

function PlaceCardType({value}: PlaceCardTypeProps): JSX.Element {
  return (
    <p className="place-card__type">{_.capitalize(value)}</p>
  );
}

export default PlaceCardType;
