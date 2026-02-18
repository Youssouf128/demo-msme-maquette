import { FiSettings, FiUser, FiHelpCircle } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';
import './HelpSection.css';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="container">
        <div className="help-content">
          <div className="help-intro">
            <h2 className="help-heading">
              <span className="help-prefix">_</span>Besoin d'<span className="help-highlight">aide</span> ?
            </h2>
            <p className="help-description">
              Découvrez toutes nos aides disponibles pour répondre à vos questions.
            </p>
          </div>
          <div className="help-cards">
            <div className="help-card">
              <div className="help-card-icon">
                <FiSettings />
                <HiOfficeBuilding />
              </div>
              <h3 className="help-card-title">Aide pour les formalités d'entreprises</h3>
              <p className="help-card-text">
                Retrouvez les interlocuteurs pour préparer vos formalités d'entreprises et l'assistance dédiée au Guichet unique.
              </p>
              <a href="#" className="help-card-link">Découvrir l'aide</a>
            </div>

            <div className="help-card">
              <div className="help-card-icon">
                <FiUser />
                <HiOfficeBuilding />
              </div>
              <h3 className="help-card-title">Aide pour les démarches en propriété intellectuelle</h3>
              <p className="help-card-text">
                Les experts de MSME sont à votre disposition pour toutes vos questions liées à la propriété intellectuelle.
              </p>
              <a href="#" className="help-card-link">Découvrir l'aide</a>
            </div>

            <div className="help-card">
              <div className="help-card-icon">
                <FiHelpCircle />
              </div>
              <h3 className="help-card-title">Foire aux questions</h3>
              <p className="help-card-text">
                Retrouvez toutes les réponses aux questions les plus posées.
              </p>
              <a href="#" className="help-card-link">Découvrir l'aide</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
