import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiAward, FiDollarSign, FiUsers, FiInfo, FiSettings, FiLogOut, FiMenu, FiX, FiCheckCircle, FiClock, FiFileText, FiBell, FiAlertCircle, FiMessageSquare, FiEye, FiCalendar, FiSearch, FiGlobe, FiShield, FiLock } from 'react-icons/fi';
import './StartupDashboard.css';

const StartupDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showRequestsList, setShowRequestsList] = useState(true);
  const [settingsAction, setSettingsAction] = useState<'iam' | 'profile' | 'language' | 'access' | null>(null);

  const menuItems = [
    { id: 'overview', icon: <FiHome />, label: 'Tableau de bord' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions' },
    { id: 'networking', icon: <FiUsers />, label: 'Networking' },
    { id: 'agenda', icon: <FiCalendar />, label: 'Agenda' },
    { id: 'information', icon: <FiInfo />, label: 'Informations' },
  ];

  return (
    <div className="startup-dashboard">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo/logo_g2b.png" alt="Startup Portal" />
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                if (item.id === 'networking') {
                  navigate('/startup/networking');
                } else if (item.id === 'agenda') {
                  navigate('/startup/networking?tab=agenda');
                } else {
                  setActiveSection(item.id);
                }
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item" onClick={() => setActiveSection('settings')}>
            <span className="nav-icon"><FiSettings /></span>
            {sidebarOpen && <span className="nav-label">Paramètres</span>}
          </button>
          <button className="nav-item logout" onClick={() => navigate('/startup')}>
            <span className="nav-icon"><FiLogOut /></span>
            {sidebarOpen && <span className="nav-label">Déconnexion</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Espace Entrepreneur</h1>
            <p className="header-subtitle">Bienvenue sur votre portail startup</p>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <div className="user-avatar">EA</div>
              <div className="user-info">
                <span className="user-name">Entrepreneur Admin</span>
                <span className="user-role">Startup-Act</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          {activeSection === 'overview' && (
            <div className="section-content">
              <h2 className="section-title">Tableau de bord</h2>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon primary">
                    <FiAward />
                  </div>
                  <div className="stat-content">
                    <h3>Labellisation</h3>
                    <p className="stat-value">En cours</p>
                    <span className="stat-label">Statut actuel</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon success">
                    <FiCheckCircle />
                  </div>
                  <div className="stat-content">
                    <h3>Subventions</h3>
                    <p className="stat-value">2</p>
                    <span className="stat-label">Demandes approuvées</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon info">
                    <FiUsers />
                  </div>
                  <div className="stat-content">
                    <h3>Networking</h3>
                    <p className="stat-value">12</p>
                    <span className="stat-label">Connexions actives</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon warning">
                    <FiClock />
                  </div>
                  <div className="stat-content">
                    <h3>Actions requises</h3>
                    <p className="stat-value">3</p>
                    <span className="stat-label">À traiter</span>
                  </div>
                </div>
              </div>

              <div className="recent-activity">
                <h3>Activité récente</h3>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-icon"><FiCheckCircle /></div>
                    <div className="activity-content">
                      <p className="activity-title">Demande de subvention approuvée</p>
                      <span className="activity-time">Il y a 2 jours</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon"><FiFileText /></div>
                    <div className="activity-content">
                      <p className="activity-title">Document de labellisation soumis</p>
                      <span className="activity-time">Il y a 5 jours</span>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-icon"><FiUsers /></div>
                    <div className="activity-content">
                      <p className="activity-title">Nouvelle connexion avec un mentor</p>
                      <span className="activity-time">Il y a 1 semaine</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-panels">
                <div className="panel-card">
                  <h3>Alertes intelligentes</h3>
                  <div className="panel-alert">
                    <FiAlertCircle /> Déclaration fiscale à déposer avant le 28 Fév 2026
                  </div>
                  <div className="panel-alert">
                    <FiAlertCircle /> Cotisations sociales dues dans 6 jours
                  </div>
                  <div className="panel-alert">
                    <FiAlertCircle /> Dossier subvention : complément requis
                  </div>
                </div>

                <div className="panel-card">
                  <h3>Actions personnalisées</h3>
                  <div className="panel-actions">
                    <button className="btn-primary">
                      <FiFileText /> Déposer un document
                    </button>
                    <button className="btn-secondary">
                      <FiMessageSquare /> Répondre au complément
                    </button>
                    <button className="btn-secondary" onClick={() => navigate('/startup/networking?tab=agenda')}>
                      <FiCalendar /> Planifier un événement
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'labellisation' && (
            <div className="section-content">
              <h2 className="section-title">Labellisation Startup-Act</h2>
              <p className="section-description">Soumettez et suivez vos demandes de label « Startup-Act » en temps réel</p>
              
              <div className="action-cards">
                <div className="action-card">
                  <FiAward className="action-icon" />
                  <h3>Nouvelle demande</h3>
                  <p>Déposez une nouvelle demande de labellisation</p>
                  <button className="btn-primary" onClick={() => navigate('/startup/labellisation')}>Commencer</button>
                </div>

                <div className="action-card">
                  <FiFileText className="action-icon" />
                  <h3>Mes demandes</h3>
                  <p>Consultez le statut de vos demandes en cours</p>
                  <button className="btn-secondary" onClick={() => setShowRequestsList(!showRequestsList)}>
                    {showRequestsList ? 'Masquer les demandes' : 'Voir les demandes (1)'}
                  </button>
                </div>
              </div>

              {/* Suivi en temps réel des demandes */}
              {showRequestsList && (
              <div className="tracking-section">
                <h3>Suivi de vos demandes</h3>
                
                <div className="request-card">
                  <div className="request-header">
                    <div className="request-info">
                      <h4>Demande de labellisation #2024-001</h4>
                      <span className="request-date">Soumise le 10 Février 2026</span>
                    </div>
                    <span className="status-badge in-progress">
                      <FiClock /> En cours d'examen
                    </span>
                  </div>

                  {/* Workflow Progress */}
                  <div className="workflow-progress">
                    <div className="workflow-step completed">
                      <div className="step-indicator">
                        <FiCheckCircle />
                      </div>
                      <div className="step-details">
                        <strong>Saisie et Dépôt</strong>
                        <span>Complété le 10 Fév 2026</span>
                      </div>
                    </div>

                    <div className="workflow-step completed">
                      <div className="step-indicator">
                        <FiCheckCircle />
                      </div>
                      <div className="step-details">
                        <strong>Contrôle automatisé</strong>
                        <span>Validé le 10 Fév 2026</span>
                      </div>
                    </div>

                    <div className="workflow-step active">
                      <div className="step-indicator">
                        <FiClock />
                      </div>
                      <div className="step-details">
                        <strong>Instruction en cours</strong>
                        <span>Examen par l'administration</span>
                      </div>
                    </div>

                    <div className="workflow-step pending">
                      <div className="step-indicator">
                        <FiAlertCircle />
                      </div>
                      <div className="step-details">
                        <strong>Décision</strong>
                        <span>En attente</span>
                      </div>
                    </div>
                  </div>

                  {/* Messages et échanges */}
                  <div className="request-messages">
                    <div className="message-item">
                      <FiMessageSquare className="message-icon" />
                      <div className="message-content">
                        <strong>Demande de complément d'information</strong>
                        <p>Veuillez fournir une copie certifiée du business plan. Vous avez 7 jours pour répondre.</p>
                        <span className="message-time">Il y a 2 jours</span>
                        <button className="btn-link">Répondre</button>
                      </div>
                    </div>
                  </div>

                  {/* Historique des actions */}
                  <div className="request-history">
                    <button className="expand-btn">
                      <FiEye /> Voir l'historique complet (8 actions)
                    </button>
                    
                    <div className="history-timeline">
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <strong>Demande de complément envoyée</strong>
                          <span>16 Fév 2026 - 10:30</span>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <strong>Dossier en cours d'instruction</strong>
                          <span>12 Fév 2026 - 14:15</span>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <strong>Contrôle automatique réussi</strong>
                          <span>10 Fév 2026 - 15:45</span>
                        </div>
                      </div>
                      <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                          <strong>Dossier soumis</strong>
                          <span>10 Fév 2026 - 15:30</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="request-actions">
                    <button className="btn-secondary">Télécharger le récapitulatif</button>
                    <button className="btn-secondary">Contacter le support</button>
                  </div>
                </div>
              </div>
              )}

              <div className="info-box">
                <FiInfo />
                <div>
                  <h4>Critères de labellisation</h4>
                  <p>Le label « Startup-Act » est accordé aux entreprises innovantes répondant aux critères définis par la loi.</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'incitations' && (
            <div className="section-content">
              <h2 className="section-title">Incitations & Subventions</h2>
              <p className="section-description">Accédez aux exonérations fiscales et aides financières disponibles</p>
              
              <div className="action-cards">
                <div className="action-card">
                  <FiDollarSign className="action-icon" />
                  <h3>Exonérations fiscales</h3>
                  <p>Demandez des exonérations sur l'impôt sur les sociétés</p>
                  <button className="btn-primary" onClick={() => navigate('/startup/incitations')}>Déposer un dossier</button>
                </div>

                <div className="action-card">
                  <FiDollarSign className="action-icon" />
                  <h3>Aides financières</h3>
                  <p>Accédez aux programmes de financement disponibles</p>
                  <button className="btn-secondary" onClick={() => navigate('/startup/aides')}>Explorer</button>
                </div>
              </div>

              <div className="table-container">
                <h3>Mes demandes de subvention</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Date</th>
                      <th>Montant</th>
                      <th>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Exonération fiscale</td>
                      <td>12/02/2026</td>
                      <td>-</td>
                      <td><span className="badge success">Approuvé</span></td>
                    </tr>
                    <tr>
                      <td>Subvention innovation</td>
                      <td>05/02/2026</td>
                      <td>50,000 DJF</td>
                      <td><span className="badge warning">En cours</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSection === 'networking' && (
            <div className="section-content">
              <h2 className="section-title">Networking</h2>
              <p className="section-description">Connectez-vous avec des mentors, investisseurs et partenaires</p>
              
              <div className="action-cards">
                <div className="action-card">
                  <FiUsers className="action-icon" />
                  <h3>Annuaire complet</h3>
                  <p>Explorez notre réseau de mentors, investisseurs et partenaires</p>
                  <button className="btn-primary" onClick={() => navigate('/startup/networking')}>Explorer l'annuaire</button>
                </div>

                <div className="action-card">
                  <FiMessageSquare className="action-icon" />
                  <h3>Messagerie & Forums</h3>
                  <p>Échangez directement avec la communauté entrepreneuriale</p>
                  <button className="btn-secondary" onClick={() => navigate('/startup/networking')}>Accéder</button>
                </div>

                <div className="action-card">
                  <FiCalendar className="action-icon" />
                  <h3>Événements</h3>
                  <p>Participez aux webinaires, ateliers et événements de networking</p>
                  <button className="btn-secondary" onClick={() => navigate('/startup/networking')}>Voir les événements</button>
                </div>
              </div>

              <div className="network-grid">
                <div className="network-card">
                  <div className="network-avatar">M</div>
                  <h4>Mohamed Ali</h4>
                  <p className="network-role">Mentor en Marketing</p>
                  <button className="btn-secondary">Contacter</button>
                </div>

                <div className="network-card">
                  <div className="network-avatar">S</div>
                  <h4>Sarah Abdallah</h4>
                  <p className="network-role">Investisseur</p>
                  <button className="btn-secondary">Contacter</button>
                </div>

                <div className="network-card">
                  <div className="network-avatar">K</div>
                  <h4>Karim Hassan</h4>
                  <p className="network-role">Expert Financier</p>
                  <button className="btn-secondary">Contacter</button>
                </div>

                <div className="network-card featured">
                  <FiUsers className="featured-icon" />
                  <h4>Rejoindre un événement</h4>
                  <p className="network-role">Prochain : Tech Meetup</p>
                  <button className="btn-primary">S'inscrire</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'information' && (
            <div className="section-content info-section">
              <h2 className="section-title">Information & Veille Stratégique</h2>
              <p className="section-description">
                Passez d'une recherche passive à une réception active d'opportunités ciblées pour la croissance de votre startup.
              </p>

              <div className="info-hero">
                <div className="info-hero-card">
                  <div className="info-hero-icon primary"><FiDollarSign /></div>
                  <div>
                    <h3>Financement intelligent</h3>
                    <p>Catalogue centralisé, fiches qualifiées et alertes personnalisées.</p>
                  </div>
                </div>
                <div className="info-hero-card">
                  <div className="info-hero-icon info"><FiCalendar /></div>
                  <div>
                    <h3>Agenda sectoriel</h3>
                    <p>Événements locaux & internationaux, inscriptions en un clic.</p>
                  </div>
                </div>
                <div className="info-hero-card">
                  <div className="info-hero-icon success"><FiSearch /></div>
                  <div>
                    <h3>Intelligence & contenus</h3>
                    <p>Recherche multicritères et hub d'actualités à jour.</p>
                  </div>
                </div>
              </div>

              <div className="info-grid info-grid-extended">
                <div className="info-card info-card-large">
                  <div className="info-card-header">
                    <div className="info-card-icon primary"><FiDollarSign /></div>
                    <div>
                      <h3>Diffusion d'opportunités de financement</h3>
                      <p>Des aides qualifiées pour faciliter votre prise de décision.</p>
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Catalogue centralisé (temps réel)</h4>
                    <ul className="info-list">
                      <li>Appels à projets nationaux</li>
                      <li>Fonds de capital-risque (Venture Capital)</li>
                      <li>Concours de pitch & programmes de subventions internationales</li>
                    </ul>
                  </div>

                  <div className="info-subsection">
                    <h4>Fiches d'opportunités</h4>
                    <div className="opportunity-card">
                      <div className="opportunity-header">
                        <h5>Fonds d'Accélération Fintech</h5>
                        <span className="opportunity-badge">Investissement</span>
                      </div>
                      <div className="opportunity-meta">
                        <span><FiCheckCircle /> Éligibilité : Seed/Series A • Fintech • SARL/SA</span>
                        <span><FiClock /> Clôture : 12 Mars 2026</span>
                        <span><FiDollarSign /> Montant : 50k–250k USD</span>
                      </div>
                    </div>

                    <div className="opportunity-card">
                      <div className="opportunity-header">
                        <h5>Programme Subventions Agrotech</h5>
                        <span className="opportunity-badge success">Don</span>
                      </div>
                      <div className="opportunity-meta">
                        <span><FiCheckCircle /> Éligibilité : MVP/Scale • Agrotech • SAS/SARL</span>
                        <span><FiClock /> Clôture : 28 Mars 2026</span>
                        <span><FiDollarSign /> Montant : jusqu'à 75k USD</span>
                      </div>
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Alertes personnalisées</h4>
                    <div className="alert-tags">
                      <span className="tag">Fintech</span>
                      <span className="tag">Agrotech</span>
                      <span className="tag">Early-stage</span>
                      <span className="tag">Subventions</span>
                    </div>
                    <div className="alert-note">
                      <FiBell /> Notifications automatiques sur tableau de bord et par email
                    </div>
                  </div>
                </div>

                <div className="info-card info-card-large">
                  <div className="info-card-header">
                    <div className="info-card-icon info"><FiCalendar /></div>
                    <div>
                      <h3>Agenda sectoriel</h3>
                      <p>Planifiez et réservez votre participation en un clic.</p>
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Calendrier interactif</h4>
                    <div className="event-item">
                      <span className="event-date">20 Fév</span>
                      <div>
                        <p className="event-title">Forum Économique Djibouti</p>
                        <span className="event-location">MENI • Djibouti</span>
                      </div>
                    </div>
                    <div className="event-item">
                      <span className="event-date">25 Fév</span>
                      <div>
                        <p className="event-title">Session Formation Pitch Deck</p>
                        <span className="event-location">En ligne</span>
                      </div>
                    </div>
                    <div className="event-item">
                      <span className="event-date">05 Mar</span>
                      <div>
                        <p className="event-title">Journée Networking Entrepreneurs</p>
                        <span className="event-location">Chambre de Commerce</span>
                      </div>
                    </div>
                    <button
                      className="btn-primary btn-full"
                      onClick={() => navigate('/startup/networking?tab=agenda')}
                    >
                      Ouvrir l'agenda interactif
                    </button>
                  </div>

                  <div className="info-subsection">
                    <h4>Synchronisation</h4>
                    <div className="sync-row">
                      <span className="sync-item">Google Calendar</span>
                      <span className="sync-item">Outlook</span>
                      <span className="sync-item">Apple Calendar</span>
                    </div>
                    <p className="muted-text">Recevez automatiquement les rappels d'échéances importantes.</p>
                  </div>
                </div>

                <div className="info-card info-card-large">
                  <div className="info-card-header">
                    <div className="info-card-icon success"><FiFileText /></div>
                    <div>
                      <h3>Fonctionnement technique & intelligence</h3>
                      <p>Moteur multicritères, hub de contenus et agrégation de flux.</p>
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Moteur de recherche multicritères</h4>
                    <div className="filter-chips">
                      <span className="chip">Type d'aide</span>
                      <span className="chip">Secteur</span>
                      <span className="chip">Thématique événement</span>
                      <span className="chip">Niveau de maturité</span>
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Hub de contenus</h4>
                    <div className="content-item">
                      <FiAlertCircle /> Nouvelle réglementation : aides à l'innovation 2026
                    </div>
                    <div className="content-item">
                      <FiFileText /> Guide pratique : préparer son pitch deck
                    </div>
                    <div className="content-item">
                      <FiSearch /> Analyse marché : opportunités logistique & IA
                    </div>
                  </div>

                  <div className="info-subsection">
                    <h4>Flux de données partenaires</h4>
                    <ul className="info-list">
                      <li>MENI, Chambre de Commerce, incubateurs</li>
                      <li>Fonds régionaux et internationaux</li>
                      <li>Programmes institutionnels & partenaires privés</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="section-content settings-section">
              <h2 className="section-title">Paramètres & Sécurité</h2>
              <p className="section-description">
                Gestion du profil, sécurité IAM (Keycloak), multilinguisme et préférences de votre espace.
              </p>

              <div className="settings-grid">
                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon primary"><FiShield /></div>
                    <div>
                      <h3>Gestion des comptes (IAM)</h3>
                      <p>Authentification unifiée SSO via Keycloak</p>
                    </div>
                  </div>
                  <ul className="settings-list">
                    <li><FiCheckCircle /> Accès personnalisé selon le rôle (Startup, MPME, Prestataire)</li>
                    <li><FiLock /> MFA activable et contrôle RBAC</li>
                    <li><FiAlertCircle /> Sessions sécurisées et auditables</li>
                  </ul>
                  <button
                    className="btn-secondary"
                    onClick={() => setSettingsAction('iam')}
                  >
                    Gérer mes accès
                  </button>
                </div>

                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon info"><FiUsers /></div>
                    <div>
                      <h3>Profil & Entreprise</h3>
                      <p>Pré-remplissage des formulaires et préférences</p>
                    </div>
                  </div>
                  <div className="settings-row">
                    <span>Profil entreprise</span>
                    <strong>TechStart Solutions</strong>
                  </div>
                  <div className="settings-row">
                    <span>Secteur</span>
                    <strong>Fintech</strong>
                  </div>
                  <div className="settings-row">
                    <span>Statut</span>
                    <strong>Startup-Act en cours</strong>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => setSettingsAction('profile')}
                  >
                    Mettre à jour le profil
                  </button>
                </div>

                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon success"><FiGlobe /></div>
                    <div>
                      <h3>Langues & accessibilité</h3>
                      <p>Interface multilingue et responsive</p>
                    </div>
                  </div>
                  <div className="settings-pill-row">
                    <span className="settings-pill">Français</span>
                    <span className="settings-pill">العربية</span>
                    <span className="settings-pill">English</span>
                  </div>
                  <p className="muted-text">L’interface s’adapte automatiquement sur mobile et tablette.</p>
                  <button
                    className="btn-secondary"
                    onClick={() => setSettingsAction('language')}
                  >
                    Configurer la langue
                  </button>
                </div>

                <div className="settings-card">
                  <div className="settings-card-header">
                    <div className="settings-icon warning"><FiFileText /></div>
                    <div>
                      <h3>Paramétrage des accès</h3>
                      <p>Droits et préférences lors du déploiement</p>
                    </div>
                  </div>
                  <ul className="settings-list">
                    <li>Définition des droits de consultation et de modification</li>
                    <li>Préférences de notification par email et tableau de bord</li>
                    <li>Historique des modifications</li>
                  </ul>
                  <button
                    className="btn-secondary"
                    onClick={() => setSettingsAction('access')}
                  >
                    Voir les paramètres
                  </button>
                </div>
              </div>

              {settingsAction && (
                <div className="settings-modal-overlay" onClick={() => setSettingsAction(null)}>
                  <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
                    <button className="settings-modal-close" onClick={() => setSettingsAction(null)}>
                      <FiX />
                    </button>

                    {settingsAction === 'iam' && (
                      <>
                        <h4 className="settings-action-title">Gestion des accès IAM</h4>
                        <p className="settings-action-text">Activez le MFA, gérez les sessions et les rôles liés à votre compte.</p>
                        <div className="settings-form">
                          <label className="settings-checkbox">
                            <input type="checkbox" defaultChecked /> Activer l’authentification multifacteur (MFA)
                          </label>
                          <label className="settings-checkbox">
                            <input type="checkbox" defaultChecked /> Règles RBAC avancées
                          </label>
                          <button className="btn-primary">Enregistrer</button>
                        </div>
                      </>
                    )}

                    {settingsAction === 'profile' && (
                      <>
                        <h4 className="settings-action-title">Mise à jour du profil</h4>
                        <div className="settings-form grid">
                          <input className="settings-input" placeholder="Raison sociale" defaultValue="TechStart Solutions" />
                          <input className="settings-input" placeholder="Nom commercial" defaultValue="TechStart" />
                          <input className="settings-input" placeholder="NIF" defaultValue="NIF-2026-00123" />
                          <input className="settings-input" placeholder="RCCM" defaultValue="RCCM-DJ-2024-889" />
                          <input className="settings-input" placeholder="Date de création" defaultValue="12/06/2023" />
                          <input className="settings-input" placeholder="Statut juridique" defaultValue="SARL" />
                          <input className="settings-input" placeholder="Secteur principal" defaultValue="Fintech" />
                          <input className="settings-input" placeholder="Secteur secondaire" defaultValue="Insurtech" />
                          <input className="settings-input" placeholder="Stade de maturité" defaultValue="Seed" />
                          <input className="settings-input" placeholder="Taille de l’équipe" defaultValue="14" />
                          <input className="settings-input" placeholder="Adresse" defaultValue="Rue 12, Plateau du Serpent" />
                          <input className="settings-input" placeholder="Ville" defaultValue="Djibouti-Ville" />
                          <input className="settings-input" placeholder="Pays" defaultValue="Djibouti" />
                          <input className="settings-input" placeholder="Téléphone" defaultValue="+253 77 12 34 56" />
                          <input className="settings-input" placeholder="Email de contact" defaultValue="contact@techstart.dj" />
                          <input className="settings-input" placeholder="Site web" defaultValue="www.techstart.dj" />
                          <input className="settings-input" placeholder="Représentant légal" defaultValue="Amina Mohamed" />
                          <input className="settings-input" placeholder="Fonction" defaultValue="CEO" />
                          <input className="settings-input" placeholder="LinkedIn" defaultValue="linkedin.com/company/techstart" />
                          <textarea className="settings-textarea" placeholder="Description de l’entreprise" defaultValue="Plateforme de services financiers digitaux pour PME." />
                        </div>
                        <button className="btn-primary">Sauvegarder</button>
                      </>
                    )}

                    {settingsAction === 'language' && (
                      <>
                        <h4 className="settings-action-title">Langue de l’interface</h4>
                        <div className="settings-form">
                          <div className="settings-pill-row">
                            <span className="settings-pill active">Français</span>
                            <span className="settings-pill">العربية</span>
                            <span className="settings-pill">English</span>
                          </div>
                          <button className="btn-primary">Appliquer</button>
                        </div>
                      </>
                    )}

                    {settingsAction === 'access' && (
                      <>
                        <h4 className="settings-action-title">Paramètres avancés</h4>
                        <p className="settings-action-text">Configurez les droits de consultation et de modification.</p>
                        <div className="settings-form">
                          <label className="settings-checkbox">
                            <input type="checkbox" defaultChecked /> Notifications par email
                          </label>
                          <label className="settings-checkbox">
                            <input type="checkbox" /> Notifications SMS
                          </label>
                          <button className="btn-primary">Enregistrer</button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StartupDashboard;
