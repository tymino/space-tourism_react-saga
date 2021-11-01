import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';

const Destination = () => {
  const planetData = useTypedSelector((state) => state.destinations);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleSwitchTab = (e: any) => setActiveTab(e.target.dataset.value);

  return (
    <div className="destination">
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
            src={planetData[activeTab].images.png}
            alt={planetData[activeTab].name}
          />
          <div className="destination__planet-info-wrapper">
            <ul className="destination__planet-info-tabs">
              {planetData.map((e, i) => (
                <li
                  key={e.name}
                  className={`destination__planet-info-tabs-name${
                    Number(activeTab) === i ? ' active' : ''
                  }`}
                  onClick={handleSwitchTab}
                  data-value={i}>
                  {e.name}
                </li>
              ))}
            </ul>
            <div className="destination__planet-info-header">
              {planetData[activeTab].name}
            </div>
            <div className="destination__planet-info-text">
              {planetData[activeTab].description}
            </div>
            <div className="destination__planet-info-footer">
              <div className="destination__planet-info-distance">
                <div className="destination__planet-info-distance-name">
                  avg. distance
                </div>
                <div className="destination__planet-info-distance-value">
                  {planetData[activeTab].distance}
                </div>
              </div>
              <div className="destination__planet-info-travel">
                <div className="destination__planet-info-travel-name">
                  est. travel time
                </div>
                <div className="destination__planet-info-travel-value">
                  {planetData[activeTab].travel}
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
