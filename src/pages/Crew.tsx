import React from 'react';

import useTypedSelector from '../hooks/useTypedSelector';
// import { selectCrew } from '../redux/selectors';
import { IDataCrew } from '../types/redux/pages';

import Loading from '../components/Loading/Loading';

const Crew: React.FC = () => {
  // const destinations = useTypedSelector(selectCrew);
  // const data = destinations.data as IDataCrew[];

  const [activeSlider, setActiveSlider] = React.useState(0);

  // const handleSwitchSlider = ({ target }: React.MouseEvent<HTMLElement>) => {
  //   const value = (target as HTMLElement).dataset.value;
  //   setActiveSlider(Number(value));
  // };
  const handleSwitchSlider = (e: React.MouseEvent<HTMLElement>) => {
    const value = (e.target as HTMLElement).dataset.value;
    setActiveSlider(Number(value));
  };

  const data = []

  return data.length === 0 ? (
    <Loading />
  ) : (
    <div className="crew" role="main">
      {/* <picture className="crew__picture">
        <source
          className="crew__picture--img"
          media="(max-width: 468px)"
          srcSet="./assets/crew/background-crew-mobile.jpg"
        />
        <source
          className="crew__picture--img"
          media="(max-width: 1024px)"
          srcSet="./assets/crew/background-crew-tablet.jpg"
        />
        <img
          className="crew__picture--img"
          src="./assets/crew/background-crew-desktop.jpg"
          alt="background-home-desktop"
        />
      </picture>

      <div className="crew__container">
        <div className="crew__subtitle">
          <span>02</span> Meet your crew
        </div>
        <div className="crew__pilot-wrapper">
          <div className="crew__pilot-info-wrapper">
            <div className="crew__pilot-info-subheader">{data[activeSlider].role}</div>
            <div className="crew__pilot-info-header">{data[activeSlider].name}</div>
            <div className="crew__pilot-info-bio">{data[activeSlider].bio}</div>
            <ul className="crew__pilot-info-slider">
              {data.map((e, i) => (
                <li
                  key={e.name}
                  className={`crew__pilot-info-tabs-button${Number(activeSlider) === i ? ' active' : ''}`}
                  onClick={handleSwitchSlider}
                  data-value={i}></li>
              ))}
            </ul>
          </div>
          <div className="crew__pilot-image-mobile">
            <img
              className="crew__pilot-image"
              src={data[activeSlider].images.png}
              alt={data[activeSlider].name}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Crew;
