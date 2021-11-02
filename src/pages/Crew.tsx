import React from 'react';
import useTypedSelector from '../hooks/useTypedSelector';

const Crew = () => {
  const crewData = useTypedSelector((state) => state.crew);
  const [activeSlider, setActiveSlider] = React.useState(0);

  const handleSwitchSlider = (e: React.MouseEvent<HTMLElement>) =>
    setActiveSlider(Number((e.target as HTMLElement).dataset.value));

  return (
    <div className="crew">
      <picture className="crew__picture">
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
            <div className="crew__pilot-info-subheader">
              {crewData[activeSlider].role}
            </div>
            <div className="crew__pilot-info-header">
              {crewData[activeSlider].name}
            </div>
            <div className="crew__pilot-info-bio">
              {crewData[activeSlider].bio}
            </div>
            <ul className="crew__pilot-info-slider">
              {crewData.map((e, i) => (
                <li
                  key={e.name}
                  className={`crew__pilot-info-tabs-button${
                    Number(activeSlider) === i ? ' active' : ''
                  }`}
                  onClick={handleSwitchSlider}
                  data-value={i}></li>
              ))}
            </ul>
          </div>
          <img
            className="crew__pilot-image"
            src={crewData[activeSlider].images.png}
            alt={crewData[activeSlider].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Crew;
