import { useState } from 'react';
import './FocusSection.css';

const FocusSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Webinaire "Les Rendez-vous MSME" : Innover sans risque, ce qu\'il faut vérifier avant de se lancer',
      description: 'Vous avez développé un produit ou une technologie innovante et vous vous apprêtez à le ou la commercialiser ? Avant de vous lancer, plusieurs questions essentielles se posent : êtes-vous sûr de pouvoir vous lancer sans risquer de bloquer votre activité ? Que faut-il vérifier pour éviter tous litiges ? Y a-t-il des bonnes pratiques à avoir en tête ?',
      image: '/images/6.jpg',
    },
    {
      title: 'Atelier MSME : Financement et accompagnement des startups innovantes',
      description: 'Un atelier pratique pour comprendre les mécanismes de financement, les critères d’éligibilité et les dispositifs d’accompagnement disponibles pour accélérer la croissance des startups.',
      image: '/images/6.jpg',
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="focus-section">
      <div className="container">
        <div className="focus-content">
          <div className="focus-carousel">
            <div
              className="focus-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div className="focus-slide" key={index}>
                  <div className="focus-image">
                    <div className="event-badge">
                      <div className="event-text">ÉVÉNEMENT</div>
                    </div>
                    <img src={slide.image} alt={slide.title} loading="lazy" />
                  </div>
                  <div className="focus-text">
                    <h2 className="focus-heading">
                      <span className="focus-prefix">_</span>Focus <span className="focus-highlight">sur</span>
                    </h2>
                    <h3 className="focus-title">{slide.title}</h3>
                    <p className="focus-description">{slide.description}</p>
                    <div className="focus-pagination">
                      {slides.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          className={`pagination-dot ${dotIndex === currentSlide ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(dotIndex)}
                          aria-label={`Slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                    <button type="button" className="focus-button" onClick={handleNext}>
                      Événement suivant
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
