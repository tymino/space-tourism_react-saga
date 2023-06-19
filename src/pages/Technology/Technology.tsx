import './Technology.scss';

import { MouseEvent } from 'react';
import { useSelector } from 'react-redux';

import { selectActivePage } from '../../redux/store';
import { IDataTechnology } from '../../types/redux/pages';
import { Background } from '../../components';
import { MyPicture } from '../../components/UI';
import { useSwitcher } from '../../hooks/useSwitcher';

interface IChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

const TechnologyInfo = ({ children }: IChildrenProps) => {
  return <div className="technology__container">{children}</div>;
};

TechnologyInfo.Subtitle = () => {
  return (
    <div className="technology__subtitle">
      <span>03</span> Space launch 101
    </div>
  );
};

const Launch = ({ children }: IChildrenProps) => {
  return <div className="technology__launch">{children}</div>;
};

TechnologyInfo.Launch = Launch;

interface IButtonListProps {
  data: IDataTechnology[];
  activeButton: number;
  handleSwitchActiveButton: (buttonIndex: number) => void;
}

Launch.ButtonList = ({
  data,
  activeButton,
  handleSwitchActiveButton,
}: IButtonListProps) => {
  const handleClickButton = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const index = Number((target as HTMLElement).dataset.index);
    handleSwitchActiveButton(index);
  };

  const setStyleButton = (index: number) => {
    const active = activeButton === index ? 'active' : '';

    return `technology__launch-button ${active}`;
  };

  return (
    <div className="technology__launch-button-container">
      {data.map((_, index) => {
        const buttonText = index + 1;
        return (
          <button
            key={index}
            className={setStyleButton(index)}
            data-index={index}
            onClick={handleClickButton}
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
};

interface IDescribeProps {
  data: IDataTechnology[];
  activeButton: number;
}

Launch.Describe = ({ data, activeButton }: IDescribeProps) => {
  return (
    <div className="technology__launch-info">
      <div className="technology__launch-info-subheader">
        the terminology...
      </div>
      <div className="technology__launch-info-header">
        {data[activeButton].name}
      </div>
      <div className="technology__launch-info-text">
        {data[activeButton].description}
      </div>
    </div>
  );
};

interface IPictureProps {
  data: IDataTechnology[];
  activeButton: number;
}

Launch.Picture = ({ data, activeButton }: IPictureProps) => {
  return (
    <MyPicture
      className={'technology__launch-picture'}
      sourceImages={[
        {
          id: 0,
          maxWidth: 1300,
          srcSet: data[activeButton].images.landscape,
        },
      ]}
      image={{
        src: data[activeButton].images.portrait,
        alt: data[activeButton].name,
      }}
    />
  );
};

export const Technology = () => {
  const { activeIndex, updateActiveIndex } = useSwitcher();

  const data = useSelector(selectActivePage) as IDataTechnology[];

  const imageData = {
    sourceImages: [
      {
        id: 0,
        maxWidth: 468,
        srcSet: './assets/technology/background-technology-mobile.jpg',
      },
      {
        id: 1,
        maxWidth: 1024,
        srcSet: './assets/technology/background-technology-tablet.jpg',
      },
    ],
    image: {
      src: './assets/technology/background-technology-desktop.jpg',
      alt: 'background-technology',
    },
  };

  return (
    <div className="technology" role="main">
      <Background data={imageData} />

      <TechnologyInfo>
        <TechnologyInfo.Subtitle />
        <TechnologyInfo.Launch>
          <Launch.ButtonList
            data={data}
            activeButton={activeIndex}
            handleSwitchActiveButton={updateActiveIndex}
          />
          <Launch.Describe data={data} activeButton={activeIndex} />
          <Launch.Picture data={data} activeButton={activeIndex} />
        </TechnologyInfo.Launch>
      </TechnologyInfo>
    </div>
  );
};
