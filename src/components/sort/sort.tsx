import { useRef } from 'react';
import cb from 'classnames';
import { SortTypes } from '../../types/common';
import { SORT_TYPES } from '../../const';

type SortProps = {
  current: SortTypes;
  onChange: (newSortBy: SortTypes) => void;
}

function Sort({current, onChange}: SortProps): JSX.Element {
  const listElementRef = useRef<HTMLUListElement>(null);
  const close = () => {
    listElementRef.current?.classList.remove('places__options--opened');
  };
  const handleMouseEnter = () => {
    listElementRef.current?.classList.add('places__options--opened');
  };
  const handleMouseLeave = () => {
    close();
  };

  return (
    <form className="places__sorting" action="#" method="get" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" tabIndex={0}>
        {current}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom" ref={listElementRef}>
        {SORT_TYPES.map((type, index) => {
          const key = `${type}–${index}`;
          const isActive = type === current;

          return (
            <li className={cb(
              'places__option',
              {
                'places__option--active': isActive
              }
            )} tabIndex={0} key={key} onClick={() => {
              onChange(type);
              close();
            }}
            >{type}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export default Sort;
