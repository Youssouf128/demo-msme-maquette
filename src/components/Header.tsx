import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiHelpCircle, FiUser, FiShoppingCart, FiChevronDown, FiX, FiMenu } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('formalites');
  const [dropdownTop, setDropdownTop] = useState(185);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveTab('formalites');
    
    // Calculer la position du header
    const header = document.querySelector('.header');
    if (header) {
      const headerRect = header.getBoundingClientRect();
      setDropdownTop(headerRect.bottom);
    }
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (activeDropdown || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeDropdown, isMenuOpen]);

  const dropdownPositionStyle = !isMobile ? { top: `${dropdownTop}px` } : undefined;

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-top-content">
          <div className="logo-group">
            <div className="logo">
              <img src="/logo/logo_header.png" alt="MSME Djibouti" className="logo-image" />
            </div>
            {!isMenuOpen && (
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <FiMenu />
              </button>
            )}
          </div>
          <div className="header-search">
            <input 
              type="search" 
              placeholder="Que recherchez-vous ?" 
              className="main-search-input"
            />
            <button className="main-search-button"><FiSearch /></button>
          </div>
          <div className="header-actions">
            <a href="#faq" className="header-action-link">
              <FiHelpCircle /> FAQ
            </a>
            <a href="#account" className="header-action-link">
              <FiUser /> Mon compte
            </a>
            <a href="#cart" className="header-action-link">
              <FiShoppingCart /> Mon panier
            </a>
          </div>
        </div>
      </div>

      <div className="header-main">
          {isMenuOpen && <div className="mobile-nav-overlay" onClick={toggleMobileMenu}></div>}
          <nav className={`main-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
            <button className="mobile-nav-close" onClick={toggleMobileMenu}>
              <FiX /> Fermer le menu
            </button>
            <ul className="nav-list">
              <li className={`nav-item ${activeDropdown === 'inpi' ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown('inpi')} className="nav-button">
                  Découvrir MSME <FiChevronDown className={`nav-arrow ${activeDropdown === 'inpi' ? 'rotated' : ''}`} />
                </button>
                {activeDropdown === 'inpi' && (
                  <>
                    <div className="dropdown-overlay" onClick={closeDropdown}></div>
                    <div className="dropdown-menu" style={dropdownPositionStyle}>
                      <button className="dropdown-close" onClick={closeDropdown}>
                        <FiX /> Fermer
                      </button>
                      <div className="dropdown-content">
                        <div className="dropdown-layout">
                          <div className="dropdown-sidebar">
                            <button 
                              className={`dropdown-tab ${activeTab === 'formalites' ? 'active' : ''}`}
                              onClick={() => setActiveTab('formalites')}
                            >
                              À propos
                            </button>
                            <button 
                              className={`dropdown-tab ${activeTab === 'propriete' ? 'active' : ''}`}
                              onClick={() => setActiveTab('propriete')}
                            >
                              Contact
                            </button>
                          </div>
                          <div className="dropdown-main">
                            {activeTab === 'formalites' && (
                              <div className="dropdown-links">
                                <a href="#mission">Notre mission</a>
                                <a href="#organisation">Notre organisation</a>
                                <a href="#chiffres">Chiffres clés</a>
                                <a href="#histoire">Notre histoire</a>
                              </div>
                            )}
                            {activeTab === 'propriete' && (
                              <div className="dropdown-links">
                                <a href="#contact">Nous contacter</a>
                                <a href="#support">Support technique</a>
                                <a href="#localisation">Nos bureaux</a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="dropdown-footer">
                          <div className="dropdown-footer-section">
                            <h4>En savoir plus</h4>
                            <a href="#about" className="dropdown-footer-link">
                              Tout savoir sur MSME
                            </a>
                          </div>
                          <div className="dropdown-footer-section">
                            <h4>Publications</h4>
                            <a href="#rapports" className="dropdown-footer-link">
                              Rapports et documents officiels
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              <li className={`nav-item ${activeDropdown === 'demarches' ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown('demarches')} className="nav-button">
                  Réaliser des démarches <FiChevronDown className={`nav-arrow ${activeDropdown === 'demarches' ? 'rotated' : ''}`} />
                </button>
                {activeDropdown === 'demarches' && (
                  <>
                    <div className="dropdown-overlay" onClick={closeDropdown}></div>
                    <div className="dropdown-menu" style={dropdownPositionStyle}>
                      <button className="dropdown-close" onClick={closeDropdown}>
                        <FiX /> Fermer
                      </button>
                      <div className="dropdown-content">
                        <div className="dropdown-layout">
                          <div className="dropdown-sidebar">
                            <button 
                              className={`dropdown-tab ${activeTab === 'formalites' ? 'active' : ''}`}
                              onClick={() => setActiveTab('formalites')}
                            >
                              Formalités d'entreprises
                            </button>
                            <button 
                              className={`dropdown-tab ${activeTab === 'propriete' ? 'active' : ''}`}
                              onClick={() => setActiveTab('propriete')}
                            >
                              Propriété intellectuelle
                            </button>
                          </div>
                          <div className="dropdown-main">
                            {activeTab === 'formalites' && (
                              <div className="dropdown-links">
                                <a href="#create">Créer une entreprise</a>
                                <a href="#modify">Modifier une entreprise</a>
                                <a href="#close">Fermer une entreprise</a>
                                <a href="#annual">Déposer des comptes annuels</a>
                                <a href="#acts">Déposer des actes</a>
                                <a href="#rne">Mettre à jour le Registre national des entreprises (RNE)</a>
                                <a href="#copies">Commande de copies</a>
                              </div>
                            )}
                            {activeTab === 'propriete' && (
                              <div className="dropdown-links">
                                <a href="#marque">Déposer une marque</a>
                                <a href="#brevet">Déposer un brevet</a>
                                <a href="#dessin">Déposer un dessin ou modèle</a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="dropdown-footer">
                          <div className="dropdown-footer-section">
                            <h4>Accès direct au service</h4>
                            <Link to="/g2b" className="dropdown-footer-link">
                              Accéder au G2B ↗
                            </Link>
                          </div>
                          <div className="dropdown-footer-section">
                            <h4>Documents pratiques</h4>
                            <a href="#tarifs" className="dropdown-footer-link">
                              Tarifs des formalités d'entreprises
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              <li className={`nav-item ${activeDropdown === 'ressources' ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown('ressources')} className="nav-button">
                  Ressources <FiChevronDown className={`nav-arrow ${activeDropdown === 'ressources' ? 'rotated' : ''}`} />
                </button>
                {activeDropdown === 'ressources' && (
                  <>
                    <div className="dropdown-overlay" onClick={closeDropdown}></div>
                    <div className="dropdown-menu" style={dropdownPositionStyle}>
                      <button className="dropdown-close" onClick={closeDropdown}>
                        <FiX /> Fermer
                      </button>
                      <div className="dropdown-content">
                        <div className="dropdown-layout">
                          <div className="dropdown-sidebar">
                            <button 
                              className={`dropdown-tab ${activeTab === 'formalites' ? 'active' : ''}`}
                              onClick={() => setActiveTab('formalites')}
                            >
                              Documentation
                            </button>
                            <button 
                              className={`dropdown-tab ${activeTab === 'propriete' ? 'active' : ''}`}
                              onClick={() => setActiveTab('propriete')}
                            >
                              Formation
                            </button>
                          </div>
                          <div className="dropdown-main">
                            {activeTab === 'formalites' && (
                              <div className="dropdown-links">
                                <a href="#guides">Guides pratiques</a>
                                <a href="#formulaires">Formulaires</a>
                                <a href="#bases">Bases de données</a>
                                <a href="#faq">Questions fréquentes</a>
                              </div>
                            )}
                            {activeTab === 'propriete' && (
                              <div className="dropdown-links">
                                <a href="#outils">Outils en ligne</a>
                                <a href="#formation">Formations et webinaires</a>
                                <a href="#tutoriels">Tutoriels vidéo</a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="dropdown-footer">
                          <div className="dropdown-footer-section">
                            <h4>Centre de ressources</h4>
                            <a href="#bibliotheque" className="dropdown-footer-link">
                              Accéder à la bibliothèque ↗
                            </a>
                          </div>
                          <div className="dropdown-footer-section">
                            <h4>Support</h4>
                            <a href="#aide" className="dropdown-footer-link">
                              Aide et documentation
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              <li className={`nav-item ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown('solutions')} className="nav-button">
                  Nos solutions <FiChevronDown className={`nav-arrow ${activeDropdown === 'solutions' ? 'rotated' : ''}`} />
                </button>
                {activeDropdown === 'solutions' && (
                  <>
                    <div className="dropdown-overlay" onClick={closeDropdown}></div>
                    <div className="dropdown-menu" style={dropdownPositionStyle}>
                      <button className="dropdown-close" onClick={closeDropdown}>
                        <FiX /> Fermer
                      </button>
                      <div className="dropdown-content">
                        <div className="dropdown-layout">
                          <div className="dropdown-sidebar">
                            <button 
                              className={`dropdown-tab ${activeTab === 'formalites' ? 'active' : ''}`}
                              onClick={() => setActiveTab('formalites')}
                            >
                              Services
                            </button>
                            <button 
                              className={`dropdown-tab ${activeTab === 'propriete' ? 'active' : ''}`}
                              onClick={() => setActiveTab('propriete')}
                            >
                              Expertise
                            </button>
                          </div>
                          <div className="dropdown-main">
                            {activeTab === 'formalites' && (
                              <div className="dropdown-links">
                                <a href="#accompagnement">Accompagnement personnalisé</a>
                                <a href="#formation">Formation professionnelle</a>
                                <a href="#conseil">Conseil stratégique</a>
                              </div>
                            )}
                            {activeTab === 'propriete' && (
                              <div className="dropdown-links">
                                <a href="#expertise">Expertise technique</a>
                                <a href="#innovation">Innovation et R&D</a>
                                <a href="#audit">Audit et diagnostic</a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="dropdown-footer">
                          <div className="dropdown-footer-section">
                            <h4>Nos services</h4>
                            <a href="#catalogue" className="dropdown-footer-link">
                              Catalogue de services ↗
                            </a>
                          </div>
                          <div className="dropdown-footer-section">
                            <h4>Contactez-nous</h4>
                            <a href="#devis" className="dropdown-footer-link">
                              Demander un devis
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              <li className={`nav-item ${activeDropdown === 'actualites' ? 'active' : ''}`}>
                <button onClick={() => toggleDropdown('actualites')} className="nav-button">
                  Actualités <FiChevronDown className={`nav-arrow ${activeDropdown === 'actualites' ? 'rotated' : ''}`} />
                </button>
                {activeDropdown === 'actualites' && (
                  <>
                    <div className="dropdown-overlay" onClick={closeDropdown}></div>
                    <div className="dropdown-menu" style={dropdownPositionStyle}>
                      <button className="dropdown-close" onClick={closeDropdown}>
                        <FiX /> Fermer
                      </button>
                      <div className="dropdown-content">
                        <div className="dropdown-layout">
                          <div className="dropdown-sidebar">
                            <button 
                              className={`dropdown-tab ${activeTab === 'formalites' ? 'active' : ''}`}
                              onClick={() => setActiveTab('formalites')}
                            >
                              Actualités
                            </button>
                            <button 
                              className={`dropdown-tab ${activeTab === 'propriete' ? 'active' : ''}`}
                              onClick={() => setActiveTab('propriete')}
                            >
                              Événements
                            </button>
                          </div>
                          <div className="dropdown-main">
                            {activeTab === 'formalites' && (
                              <div className="dropdown-links">
                                <a href="#news">Toutes les actualités</a>
                                <a href="#press">Communiqués de presse</a>
                                <a href="#blog">Blog de MSME</a>
                                <a href="#newsletter">Newsletter</a>
                              </div>
                            )}
                            {activeTab === 'propriete' && (
                              <div className="dropdown-links">
                                <a href="#events">Événements à venir</a>
                                <a href="#webinaires">Webinaires</a>
                                <a href="#conferences">Conférences</a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="dropdown-footer">
                          <div className="dropdown-footer-section">
                            <h4>Restez informé</h4>
                            <a href="#abonnement" className="dropdown-footer-link">
                              S'abonner à la newsletter ↗
                            </a>
                          </div>
                          <div className="dropdown-footer-section">
                            <h4>Médias</h4>
                            <a href="#presse" className="dropdown-footer-link">
                              Espace presse
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
            </ul>
          </nav>
        </div>
    </header>
  );
};

export default Header;
