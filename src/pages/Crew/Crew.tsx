import './Crew.scss';

import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { selectActivePage } from '../../redux/store';
import { IDataCrew } from '../../types/redux/pages';
import { MyPicture } from '../../components/UI';
import useSwitcher from '../../hooks/useSwitcher';

const CrewInfo = ({ children }: { children: JSX.Element[] }) => {
  return <div className="crew__container">{children}</div>;
};

CrewInfo.Subtitle = () => {
  return (
    <div className="crew__subtitle">
      <span>02</span> Meet your crew
    </div>
  );
};

const Pilot = ({ children }: { children: JSX.Element[] }) => {
  return <div className="crew__pilot">{children}</div>;
};

CrewInfo.Pilot = Pilot;

interface IDescribeProps {
  children: JSX.Element;
  data: IDataCrew[];
  activeSlider: number;
}

const Describe = ({ children, data, activeSlider }: IDescribeProps) => {
  return (
    <div className="crew__pilot-info-wrapper">
      <div className="crew__pilot-info-subheader">
        {data[activeSlider].role}
      </div>
      <div className="crew__pilot-info-header">{data[activeSlider].name}</div>
      <div className="crew__pilot-info-bio">{data[activeSlider].bio}</div>
      <ul className="crew__pilot-info-slider">{children}</ul>
    </div>
  );
};

Pilot.Describe = Describe;

interface ITabListProps {
  data: IDataCrew[];
  activeSlider: number;
  handleSwitchSlider: (sliderIndex: number) => void;
}

Describe.TabList = ({
  data,
  activeSlider,
  handleSwitchSlider,
}: ITabListProps) => {
  const handleClickSlider = ({ target }: MouseEvent<HTMLElement>) => {
    const index = (target as HTMLElement).dataset.index;
    handleSwitchSlider(Number(index));
  };

  return (
    <>
      {data.map(({ name }, index) => (
        <li
          key={name}
          className={`crew__pilot-info-tabs-button ${
            activeSlider === index ? 'active' : ''
          }`}
          onClick={handleClickSlider}
          data-index={index}
        ></li>
      ))}
    </>
  );
};

Pilot.Image = ({ data, activeSlider }: any) => {
  return (
    <div className="crew__pilot-image-mobile">
      <img
        className="crew__pilot-image"
        src={data[activeSlider].images.png}
        alt={data[activeSlider].name}
      />
    </div>
  );
};

const Crew = () => {
  const { activeIndex, updateActiveIndex } = useSwitcher();
  const data = useSelector(selectActivePage) as IDataCrew[];

  const sourceImage = [
    {
      id: 0,
      maxWidth: 468,
      srcSet: './assets/crew/background-crew-mobile.jpg',
    },
    {
      id: 1,
      maxWidth: 1024,
      srcSet: './assets/crew/background-crew-tablet.jpg',
    },
  ];

  const image = {
    src: './assets/crew/background-crew-desktop.jpg',
    alt: 'background-destination-desktop',
  };

  return (
    <div className="crew" role="main">
      <MyPicture
        className={'crew__picture'}
        sourceImages={sourceImage}
        image={image}
      />

      <CrewInfo>
        <CrewInfo.Subtitle />
        <CrewInfo.Pilot>
          <Pilot.Describe data={data} activeSlider={activeIndex}>
            <Describe.TabList
              data={data}
              activeSlider={activeIndex}
              handleSwitchSlider={updateActiveIndex}
            />
          </Pilot.Describe>
          <Pilot.Image data={data} activeSlider={activeIndex} />
        </CrewInfo.Pilot>
      </CrewInfo>
    </div>
  );
};

export default Crew;
