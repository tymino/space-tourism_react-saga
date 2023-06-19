import './Destination.scss';
import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { selectActivePage } from '../../redux/store';
import { IDataDestination } from '../../types/redux/pages';
import { MyImage, MyPicture } from '../../components/UI';
import { useSwitcher } from '../../hooks/useSwitcher';

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

export const Destination = () => {
  const { activeIndex, updateActiveIndex } = useSwitcher();

  const data = useSelector(selectActivePage) as IDataDestination[];

  const sourceImage = [
    {
      id: 0,
      maxWidth: 468,
      srcSet: './assets/destination/background-destination-mobile.jpg',
    },
    {
      id: 1,
      maxWidth: 1024,
      srcSet: './assets/destination/background-destination-tablet.jpg',
    },
  ];

  const image = {
    src: './assets/destination/background-destination-desktop.jpg',
    alt: 'background-destination',
  };

  return (
    <div className="destination" role="main">
      <MyPicture
        className="destination__picture"
        image={image}
        sourceImages={sourceImage}
      />

      <div className="destination__container">
        <div className="destination__subtitle">
          <span>01</span> Pick your destination
        </div>
        <div className="destination__planet-wrapper">
          <MyImage
            className={'destination__planet-image'}
            hasSrc={true}
            name={data[activeIndex].images.png}
            nameAlt={data[activeIndex].name}
          />
          <PlanetInfo>
            <PlanetInfo.TabList
              data={data}
              activeTab={activeIndex}
              handleSwitchTab={updateActiveIndex}
            />
            <PlanetInfo.Describe data={data} activeTab={activeIndex} />
          </PlanetInfo>
        </div>
      </div>
    </div>
  );
};
