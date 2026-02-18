import { FiSettings, FiUser, FiFileText, FiSearch } from 'react-icons/fi';
import { HiOfficeBuilding } from 'react-icons/hi';
import './SearchSection.css';

const SearchSection = () => {
  return (
    <section className="search-section-cards">
      <div className="container">
        <div className="search-cards-grid">
          <div className="search-card">
            <div className="search-card-icon">
              <FiSettings />
              <HiOfficeBuilding />
            </div>
            <h3 className="search-card-title">Formalités d'entreprises</h3>
            <p className="search-card-description">
              Le Guichet unique simplifie les formalités d'entreprises. <a href="#" className="inline-link">Retrouvez toutes les formalités disponibles.</a>
            </p>
            <ul className="search-card-list">
              <li><a href="#">› Créer une entreprise</a></li>
              <li><a href="#">› Modifier une entreprise</a></li>
              <li><a href="#">› Fermer une entreprise</a></li>
            </ul>
            <a href="#" className="search-card-button">Accéder au Guichet unique ↗</a>
          </div>

          <div className="search-card">
            <div className="search-card-icon">
              <FiUser />
              <HiOfficeBuilding />
            </div>
            <h3 className="search-card-title">Propriété intellectuelle</h3>
            <p className="search-card-description">
              La propriété intellectuelle sert à protéger les créations intellectuelles. <a href="#" className="inline-link">Retrouvez toutes les démarches disponibles.</a>
            </p>
            <ul className="search-card-list">
              <li><a href="#">› Déposer une marque</a></li>
              <li><a href="#">› Déposer un brevet</a></li>
              <li><a href="#">› Déposer un dessin et modèle</a></li>
            </ul>
            <a href="#" className="search-card-button">Accéder aux démarches ↗</a>
          </div>

          <div className="search-card">
            <div className="search-card-icon">
              <FiFileText />
              <FiSearch />
            </div>
            <h3 className="search-card-title">Recherche dans nos bases</h3>
            <p className="search-card-description">
              Effectuez des recherches rapides et ciblées grâce à nos bases de données. <a href="#" className="inline-link">Retrouvez toutes nos bases.</a>
            </p>
            <ul className="search-card-list">
              <li><a href="#">› Rechercher une marque</a></li>
              <li><a href="#">› Rechercher un brevet</a></li>
              <li><a href="#">› Rechercher une entreprise</a></li>
            </ul>
            <a href="#" className="search-card-button">Rechercher sur DATA MSME ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
