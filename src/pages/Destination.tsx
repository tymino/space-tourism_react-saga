import React from 'react';

import useTypedSelector from '../hooks/useTypedSelector';
import { selectDestination } from '../redux/selectors';
import { IDataDestination } from '../types/redux/pages';

import Loading from '../components/Loading';

const Destination: React.FC = () => {
  const destination = useTypedSelector(selectDestination);
  const data = destination.data as IDataDestination[];

  const [activeTab, setActiveTab] = React.useState(0);

  const handleSwitchTab = (e: React.MouseEvent<HTMLElement>) =>
    setActiveTab(Number((e.target as HTMLElement).dataset.value));

  return data.length === 0 ? (
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
              {data.map((e, i) => (
                <li
                  key={e.name}
                  className={`destination__planet-info-tabs-name${Number(activeTab) === i ? ' active' : ''}`}
                  onClick={handleSwitchTab}
                  data-value={i}>
                  {e.name}
                </li>
              ))}
            </ul>
            <div className="destination__planet-info-header">{data[activeTab].name}</div>
            <div className="destination__planet-info-text">{data[activeTab].description}</div>
            <div className="destination__planet-info-footer">
              <div className="destination__planet-info-distance">
                <div className="destination__planet-info-distance-name">avg. distance</div>
                <div className="destination__planet-info-distance-value">{data[activeTab].distance}</div>
              </div>
              <div className="destination__planet-info-travel">
                <div className="destination__planet-info-travel-name">est. travel time</div>
                <div className="destination__planet-info-travel-value">{data[activeTab].travel}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
