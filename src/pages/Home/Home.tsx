import './Home.scss';
import { Background } from '../../components';
import { useBackgroundImage } from '../../hooks/useBackgroundImage';

export const Home = () => {
  const { image } = useBackgroundImage('home');

  return (
    <div className="home" role="main">
      <Background data={image} />

      <div className="home__container">
        <div className="home__describe">
          <h2 className="home__describe-subtitle">So, you want to travel to</h2>
          <h1 className="home__describe-header">Space</h1>
          <div className="home__describe-text">
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </div>
        </div>
        <div className="home__explore">Explore</div>
      </div>
    </div>
  );
};
