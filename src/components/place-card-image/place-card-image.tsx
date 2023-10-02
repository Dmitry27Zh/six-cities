import { Link } from 'react-router-dom';
import { ClassName, Url } from '../../types/common';
import { PlaceCard} from '../../types/data';
import cn from 'classnames';

type PlaceCardImageProps = {
  src: PlaceCard['previewImage'];
  url: Url;
  className?: ClassName;
}

function PlaceCardImage({className, src, url}: PlaceCardImageProps): JSX.Element {
  return (
    <div className={cn('place-card__image-wrapper', className)}>
      <Link to={url}>
        <img className="place-card__image" src={src} width="260" height="200" alt="Placeholder" />
      </Link>
    </div>
  );
}

export default PlaceCardImage;
