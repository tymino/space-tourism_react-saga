import React from 'react';

import useTypedSelector from '../hooks/useTypedSelector';
// import { selectTechnology } from '../redux/selectors';
import { IDataTechnology } from '../types/redux/pages';

import Loading from '../components/Loading';

const Technology: React.FC = () => {
  // const destinations = useTypedSelector(selectTechnology);
  // const data = destinations.data as IDataTechnology[];

  const [activeButtonSlider, setActiveButtonSlider] = React.useState(0);
  const data = [];
  const handleButtonSlider = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveButtonSlider(Number(e.currentTarget.value));
  };

  return data.length === 0 ? (
    <Loading />
  ) : (
    <div className="technology" role="main">
      {/* <picture className="technology__picture">
        <source
          className="technology__picture--img"
          media="(max-width: 468px)"
          srcSet="./assets/technology/background-technology-mobile.jpg"
        />
        <source
          className="technology__picture--img"
          media="(max-width: 1024px)"
          srcSet="./assets/technology/background-technology-tablet.jpg"
        />
        <img
          className="technology__picture--img"
          src="./assets/technology/background-technology-desktop.jpg"
          alt="background-home-desktop"
        />
      </picture>

      <div className="technology__container">
        <div className="technology__subtitle">
          <span>03</span> Space launch 101
        </div>
        <div className="technology__launch-wrapper">
          <div className="technology__launch-button-container">
            {data.map((_, i) => {
              const actualName = i + 1;
              return (
                <button
                  key={i}
                  className={`technology__launch-button${Number(activeButtonSlider) === i ? ' active' : ''}`}
                  value={i}
                  onClick={handleButtonSlider}>
                  {actualName}
                </button>
              );
            })}
          </div>
          <div className="technology__launch-info-container">
            <div className="technology__launch-info-subheader">the terminology...</div>
            <div className="technology__launch-info-header">{data[activeButtonSlider].name}</div>
            <div className="technology__launch-info-text">{data[activeButtonSlider].description}</div>
          </div>
          <picture className="technology__launch-picture">
            <source
              className="technology__launch-picture--img"
              media="(max-width: 1024px)"
              srcSet={data[activeButtonSlider].images.landscape}
            />
            <img
              className="technology__launch-picture--img"
              src={data[activeButtonSlider].images.portrait}
              alt={data[activeButtonSlider].name}
            />
          </picture>
        </div>
      </div> */}
    </div>
  );
};

export default Technology;
