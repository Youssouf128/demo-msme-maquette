import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Avec MSME Djibouti, <span className="hero-highlight">valorisez vos créations</span>
            </h1>
          </div>
          <div className="hero-visual">
            <div className="cube-3d">
              <div className="cube-face cube-front"></div>
              <div className="cube-face cube-back"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
