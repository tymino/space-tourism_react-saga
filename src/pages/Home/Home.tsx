import './Home.scss';
import { MyPicture } from '../../components/UI';

// Вынести фоновое изображение в отдельный компонент

const Home = () => {
  const sourceImage = [
    {
      id: 0,
      maxWidth: 468,
      srcSet: './assets/home/background-home-mobile.jpg',
    },
    {
      id: 1,
      maxWidth: 1024,
      srcSet: './assets/home/background-home-tablet.jpg',
    },
  ];

  const image = {
    src: './assets/home/background-home-desktop.jpg',
    alt: 'background-home',
  };

  return (
    <div className="home" role="main">
      <MyPicture
        className="home__picture"
        sourceImages={sourceImage}
        image={image}
      />

      <div className="home__container">
        <div className="home__describe">
          <h2 className="home__describe-subtitle">So, you want to travel to</h2>
          <h1 className="home__describe-header">Space</h1>
          <div className="home__describe-text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </div>
        </div>
        <div className="home__explore">Explore</div>
      </div>
    </div>
  );
};

export default Home;
