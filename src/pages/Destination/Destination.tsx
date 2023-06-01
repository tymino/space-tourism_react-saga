import './Destination.scss';

import { useState, MouseEvent } from 'react';

import useTypedSelector from '../../hooks/useTypedSelector';
import { selectDestination } from '../../redux/selectors';

import { Loading } from '../../components';

const Destination = () => {
  const { loading, data } = useTypedSelector(selectDestination);

  const [activeTab, setActiveTab] = useState(0);

  const handleSwitchTab = ({ target }: MouseEvent<HTMLElement>) => {
    const value = (target as HTMLElement).dataset.value;
    setActiveTab(Number(value));
  };

  return loading || data.length === 0 ? (
    <Loading />
  ) : (
    <div className="destination" role="main">
      <picture className="destination__picture">
        <source
          className="destination__picture--img"
          media="(max-width: 468px)"
          srcSet="./assets/destination/background-destination-mobile.jpg"
        />
        <source
          className="destination__picture--img"
          media="(max-width: 1024px)"
          srcSet="./assets/destination/background-destination-tablet.jpg"
        />
        <img
          className="destination__picture--img"
          src="./assets/destination/background-destination-desktop.jpg"
          alt="background-home-desktop"
        />
      </picture>

      <div className="destination__container">
        <div className="destination__subtitle">
          <span>01</span> Pick your destination
        </div>
        <div className="destination__planet-wrapper">
          <img
            className="destination__planet-image"
            src={data[activeTab].images.png}
            alt={data[activeTab].name}
          />
          <div className="destination__planet-info-wrapper">
            <ul className="destination__planet-info-tabs">
              {data.map((e: any, i: any) => (
                <li
                  key={e.name}
                  className={`destination__planet-info-tabs-name${
                    Number(activeTab) === i ? ' active' : ''
                  }`}
                  onClick={handleSwitchTab}
                  data-value={i}
                >
                  {e.name}
                </li>
              ))}
            </ul>
            <div className="destination__planet-info-header">
              {data[activeTab].name}
            </div>
            <div className="destination__planet-info-text">
              {data[activeTab].description}
            </div>
            <div className="destination__planet-info-footer">
              <div className="destination__planet-info-distance">
                <div className="destination__planet-info-distance-name">
                  avg. distance
                </div>
                <div className="destination__planet-info-distance-value">
                  {data[activeTab].distance}
                </div>
              </div>
              <div className="destination__planet-info-travel">
                <div className="destination__planet-info-travel-name">
                  est. travel time
                </div>
                <div className="destination__planet-info-travel-value">
                  {data[activeTab].travel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
