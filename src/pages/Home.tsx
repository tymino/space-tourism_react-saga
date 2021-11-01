import React from 'react';

const Home = () => (
    <div className="home">
      <picture className="home__picture">
        <source
          className="home__picture--img"
          media="(max-width: 468px)"
          srcSet="./assets/home/background-home-mobile.jpg"
        />
        <source
          className="home__picture--img"
          media="(max-width: 1024px)"
          srcSet="./assets/home/background-home-tablet.jpg"
        />
        <img
          className="home__picture--img"
          src="./assets/home/background-home-desktop.jpg"
          alt="background-home-desktop"
        />
      </picture>

      <div className="home__container">
        <div className="home__container-describe">
          <div className="home__container-describe-subtitle">
            So, you want to travel to
          </div>
          <div className="home__container-describe-header">Space</div>
          <div className="home__container-describe-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="home__container-explore">Explore</div>
      </div>
    </div>
  );

export default Home;
