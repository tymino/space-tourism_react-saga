import './Destination.scss';
import { useState, MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { selectActivePage } from '../../redux/store';
import { IDataDestination } from '../../types/redux/pages';
import { MyImage } from '../../components';

const PlanetInfo = ({ children }: { children: JSX.Element[] }) => {
  return <div className="destination__planet-info-wrapper">{children}</div>;
};

interface ITabListProps {
  data: IDataDestination[];
  activeTab: number;
  handleSwitchTab: (tabIndex: number) => void;
}

PlanetInfo.TabList = ({ data, activeTab, handleSwitchTab }: ITabListProps) => {
  const handleClickTab = ({ target }: MouseEvent<HTMLElement>) => {
    const tabIndex = Number((target as HTMLElement).dataset.index);
    handleSwitchTab(tabIndex);
  };

  const setClassNameActiveTab = (index: number) => {
    const activeClass = activeTab === index ? 'active' : '';

    return `destination__planet-info-tabs-name ${activeClass}`;
  };

  return (
    <ul className="destination__planet-info-tabs">
      {data.map(({ name }, index) => {
        return (
          <li
            key={name}
            className={setClassNameActiveTab(index)}
            onClick={handleClickTab}
            data-index={index}
          >
            {name}
          </li>
        );
      })}
    </ul>
  );
};

interface IDescribeProps {
  data: IDataDestination[];
  activeTab: number;
}

PlanetInfo.Describe = ({ data, activeTab }: IDescribeProps) => {
  return (
    <>
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
    </>
  );
};

const Destination = () => {
  const [activeTab, setActiveTab] = useState(0);
  const data = useSelector(selectActivePage) as IDataDestination[];

  const handleSwitchTab = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  console.log('Destination', data);

  return (
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
          <MyImage
            className={'destination__planet-image'}
            hasSrc={true}
            name={data[activeTab].images.png}
            nameAlt={data[activeTab].name}
          />
          <PlanetInfo>
            <PlanetInfo.TabList
              data={data}
              activeTab={activeTab}
              handleSwitchTab={handleSwitchTab}
            />
            <PlanetInfo.Describe data={data} activeTab={activeTab} />
          </PlanetInfo>
        </div>
      </div>
    </div>
  );
};

export default Destination;
