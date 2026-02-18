import { useState } from 'react';
import { FiCalendar } from 'react-icons/fi';
import './FocusSection.css';

const FocusSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: 'Webinaire "Les Rendez-vous MSME" : Innover sans risque, ce qu\'il faut vérifier avant de se lancer',
      description: 'Vous avez développé un produit ou une technologie innovante et vous vous apprêtez à le ou la commercialiser ? Avant de vous lancer, plusieurs questions essentielles se posent : êtes-vous sûr de pouvoir vous lancer sans risquer de bloquer votre activité ? Que faut-il vérifier pour éviter tous litiges ? Y a-t-il des bonnes pratiques à avoir en tête ?',
    },
  ];

  return (
    <section className="focus-section">
      <div className="container">
        <div className="focus-content">
          <div className="focus-image">
            <div className="event-badge">
              <div className="event-icon"><FiCalendar /></div>
              <div className="event-text">ÉVÉNEMENT</div>
            </div>
          </div>
          <div className="focus-text">
            <h2 className="focus-heading">
              <span className="focus-prefix">_</span>Focus <span className="focus-highlight">sur</span>
            </h2>
            <h3 className="focus-title">{slides[currentSlide].title}</h3>
            <p className="focus-description">{slides[currentSlide].description}</p>
            <div className="focus-pagination">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
            <a href="#" className="focus-button">Lire la suite</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
