import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiHome, FiAward, FiDollarSign, FiUsers, FiInfo, FiSettings, FiLogOut, FiMenu, FiX, FiCheckCircle, FiClock, FiFileText, FiBell, FiAlertCircle, FiMessageSquare, FiEye } from 'react-icons/fi';
import './StartupDashboard.css';

const StartupDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showRequestsList, setShowRequestsList] = useState(true);

  const menuItems = [
    { id: 'overview', icon: <FiHome />, label: 'Tableau de bord' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions' },
    { id: 'networking', icon: <FiUsers />, label: 'Networking' },
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
              onClick={() => setActiveSection(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <span className="nav-icon"><FiSettings /></span>
            {sidebarOpen && <span className="nav-label">Paramètres</span>}
          </button>
          <button className="nav-item logout">
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
            <div className="section-content">
              <h2 className="section-title">Informations & Ressources</h2>
              <p className="section-description">Accédez aux opportunités de financement et à l'agenda sectoriel</p>
              
              <div className="info-grid">
                <div className="info-card">
                  <h3>📅 Agenda</h3>
                  <div className="event-item">
                    <span className="event-date">20 Fév</span>
                    <div>
                      <p className="event-title">Workshop Innovation</p>
                      <span className="event-location">En ligne</span>
                    </div>
                  </div>
                  <div className="event-item">
                    <span className="event-date">25 Fév</span>
                    <div>
                      <p className="event-title">Forum Investisseurs</p>
                      <span className="event-location">Djibouti</span>
                    </div>
                  </div>
                  <button className="btn-link">Voir tout l'agenda</button>
                </div>

                <div className="info-card">
                  <h3>💰 Opportunités de financement</h3>
                  <div className="opportunity-item">
                    <h4>Appel à projets Tech</h4>
                    <p>Date limite : 30 Mars 2026</p>
                    <button className="btn-link">En savoir plus</button>
                  </div>
                  <div className="opportunity-item">
                    <h4>Bourse d'innovation</h4>
                    <p>Date limite : 15 Avril 2026</p>
                    <button className="btn-link">En savoir plus</button>
                  </div>
                </div>

                <div className="info-card">
                  <h3>📚 Ressources utiles</h3>
                  <ul className="resource-list">
                    <li><a href="#">Guide du Startup-Act</a></li>
                    <li><a href="#">Modèles de documents</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact support</a></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default StartupDashboard;
