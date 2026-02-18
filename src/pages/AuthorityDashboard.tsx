import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FiActivity,
  FiAlertCircle,
  FiBarChart2,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiGlobe,
  FiHome,
  FiInfo,
  FiLock,
  FiLogOut,
  FiMenu,
  FiSettings,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiX
} from 'react-icons/fi';
import './StartupDashboard.css';
import './AuthorityDashboard.css';

const AuthorityDashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<'overview' | 'impact' | 'operations' | 'compliance' | 'reporting' | 'settings'>('overview');
  const [settingsAction, setSettingsAction] = useState<'rbac' | 'profiles' | 'admin' | null>(null);

  const menuItems = [
    { id: 'overview', icon: <FiHome />, label: 'Vue d\'ensemble' },
    { id: 'impact', icon: <FiTrendingUp />, label: 'Impact & KPI' },
    { id: 'operations', icon: <FiActivity />, label: 'Pilotage opérationnel' },
    { id: 'compliance', icon: <FiShield />, label: 'Conformité Startup-Act' },
    { id: 'reporting', icon: <FiBarChart2 />, label: 'Reporting' }
  ];

  return (
    <div className="startup-dashboard authority-dashboard">
      <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img src="/logo/logo_g2b.png" alt="Autorités" />
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
              onClick={() => setActiveSection(item.id as typeof activeSection)}
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
          <button className="nav-item">
            <span className="nav-icon"><FiInfo /></span>
            {sidebarOpen && <span className="nav-label">Centre d\'aide</span>}
          </button>
          <button className="nav-item logout" onClick={() => navigate('/startup')}>
            <span className="nav-icon"><FiLogOut /></span>
            {sidebarOpen && <span className="nav-label">Déconnexion</span>}
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Tableau de bord Autorités</h1>
            <p className="header-subtitle">Pilotage stratégique et suivi en direct du secteur privé</p>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <FiAlertCircle />
              <span className="notification-badge">5</span>
            </button>
            <div className="user-profile">
              <div className="user-avatar admin">AA</div>
              <div className="user-info">
                <span className="user-name">Admin Autorité</span>
                <span className="user-role">Ministère</span>
              </div>
            </div>
          </div>
        </header>

        <div className="dashboard-content">
          {activeSection === 'overview' && (
            <div className="section-content">
              <h2 className="section-title">Vue d'ensemble</h2>
              <p className="section-description">Indicateurs clés en temps réel et alertes stratégiques</p>

              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon primary"><FiUsers /></div>
                  <div className="stat-content">
                    <h3>Entreprises actives</h3>
                    <p className="stat-value">1 248</p>
                    <span className="stat-label">+8% ce trimestre</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon info"><FiFileText /></div>
                  <div className="stat-content">
                    <h3>Dossiers en cours</h3>
                    <p className="stat-value">312</p>
                    <span className="stat-label">Labellisation & subventions</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon success"><FiClock /></div>
                  <div className="stat-content">
                    <h3>Délai moyen</h3>
                    <p className="stat-value">12 j</p>
                    <span className="stat-label">Traitement des dossiers</span>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon warning"><FiShield /></div>
                  <div className="stat-content">
                    <h3>Conformité</h3>
                    <p className="stat-value">93%</p>
                    <span className="stat-label">Respect Startup-Act</span>
                  </div>
                </div>
              </div>

              <div className="admin-grid">
                <div className="admin-card">
                  <h3>Alertes intelligentes</h3>
                  <div className="admin-alert">
                    <FiAlertCircle /> 18 dossiers à échéance dans 72h
                  </div>
                  <div className="admin-alert">
                    <FiAlertCircle /> 6 contrôles de conformité en attente
                  </div>
                  <div className="admin-alert">
                    <FiAlertCircle /> 3 anomalies détectées par BAM
                  </div>
                </div>
                <div className="admin-card">
                  <h3>Actions prioritaires</h3>
                  <div className="admin-actions">
                    <button className="btn-primary">Valider 12 dossiers</button>
                    <button className="btn-secondary">Planifier un audit</button>
                    <button className="btn-secondary">Envoyer un rappel</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'impact' && (
            <div className="section-content">
              <h2 className="section-title">Suivi de l'impact</h2>
              <p className="section-description">Tableaux de bord interactifs pour mesurer la performance du secteur privé</p>

              <div className="impact-grid">
                <div className="impact-card">
                  <h4>Créations d'entreprises</h4>
                  <p className="impact-value">+214</p>
                  <span className="impact-sub">30 derniers jours</span>
                </div>
                <div className="impact-card">
                  <h4>Emplois créés</h4>
                  <p className="impact-value">1 402</p>
                  <span className="impact-sub">Depuis janvier 2026</span>
                </div>
                <div className="impact-card">
                  <h4>Investissements mobilisés</h4>
                  <p className="impact-value">12,4 M$</p>
                  <span className="impact-sub">Financements publics/privés</span>
                </div>
              </div>

              <div className="admin-card">
                <h3>Contribution par secteur</h3>
                <div className="sector-bars">
                  <div className="sector-bar">
                    <span>Tech & Digital</span>
                    <div className="bar"><div className="bar-fill" style={{ width: '72%' }} /></div>
                  </div>
                  <div className="sector-bar">
                    <span>Agro & Food</span>
                    <div className="bar"><div className="bar-fill" style={{ width: '48%' }} /></div>
                  </div>
                  <div className="sector-bar">
                    <span>Logistique</span>
                    <div className="bar"><div className="bar-fill" style={{ width: '38%' }} /></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'operations' && (
            <div className="section-content">
              <h2 className="section-title">Pilotage opérationnel</h2>
              <p className="section-description">Suivi des délais, volumes et efficacité des services publics</p>

              <div className="admin-grid">
                <div className="admin-card">
                  <h3>Performance des services</h3>
                  <div className="metric-row">
                    <span>Délai labellisation</span>
                    <strong>10 jours</strong>
                  </div>
                  <div className="metric-row">
                    <span>Délai subvention</span>
                    <strong>15 jours</strong>
                  </div>
                  <div className="metric-row">
                    <span>Registre entreprises</span>
                    <strong>3 jours</strong>
                  </div>
                </div>
                <div className="admin-card">
                  <h3>Volumétrie des demandes</h3>
                  <div className="metric-row">
                    <span>Nouveaux dossiers</span>
                    <strong>58 / semaine</strong>
                  </div>
                  <div className="metric-row">
                    <span>Dossiers traités</span>
                    <strong>42 / semaine</strong>
                  </div>
                  <div className="metric-row">
                    <span>Taux de rejet</span>
                    <strong>6%</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'compliance' && (
            <div className="section-content">
              <h2 className="section-title">Contrôle automatisé Startup-Act</h2>
              <p className="section-description">Suivi des règles de conformité et contrôles automatiques</p>

              <div className="admin-card">
                <div className="compliance-header">
                  <h3>État de conformité</h3>
                  <button className="btn-secondary">Exporter</button>
                </div>
                <div className="compliance-table">
                  <div className="compliance-row header">
                    <span>Entreprise</span>
                    <span>Statut</span>
                    <span>Dernier contrôle</span>
                    <span>Action</span>
                  </div>
                  <div className="compliance-row">
                    <span>TechStart Solutions</span>
                    <span className="status-badge approved"><FiCheckCircle /> Conforme</span>
                    <span>16 Fév 2026</span>
                    <button className="btn-link">Voir</button>
                  </div>
                  <div className="compliance-row">
                    <span>AgroBoost</span>
                    <span className="status-badge in-progress"><FiClock /> Sous revue</span>
                    <span>15 Fév 2026</span>
                    <button className="btn-link">Contrôler</button>
                  </div>
                  <div className="compliance-row">
                    <span>LogiFleet</span>
                    <span className="status-badge rejected"><FiAlertCircle /> Non conforme</span>
                    <span>14 Fév 2026</span>
                    <button className="btn-link">Alerter</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'reporting' && (
            <div className="section-content">
              <h2 className="section-title">Reporting avancé</h2>
              <p className="section-description">Exports, analyses stratégiques et intégration BAM (jBPM)</p>

              <div className="admin-grid">
                <div className="admin-card">
                  <h3>Exports de données</h3>
                  <div className="export-list">
                    <button className="btn-primary"><FiFileText /> Export CSV</button>
                    <button className="btn-secondary"><FiFileText /> Export Excel</button>
                    <button className="btn-secondary"><FiFileText /> Export PDF</button>
                  </div>
                </div>
                <div className="admin-card">
                  <h3>Suivi BAM (jBPM)</h3>
                  <div className="bam-status">
                    <div>
                      <strong>Flux actifs</strong>
                      <p>12 processus monitorés</p>
                    </div>
                    <div>
                      <strong>Alertes</strong>
                      <p>2 anomalies en cours</p>
                    </div>
                    <div>
                      <strong>Disponibilité</strong>
                      <p>99.9%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="admin-card">
                <h3>Multilingue & accès</h3>
                <div className="language-row">
                  <span><FiGlobe /> Français</span>
                  <span><FiGlobe /> العربية</span>
                  <span><FiGlobe /> English</span>
                </div>
                <div className="access-row">
                  <FiLock /> Données sécurisées et accès profilés
                </div>
              </div>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="section-content">
              <h2 className="section-title">Paramètres & Configuration</h2>
              <p className="section-description">Gestion des accès, contenus et supervision des portails</p>

              <div className="admin-grid">
                <div className="admin-card">
                  <h3>Gestion des droits</h3>
                  <div className="metric-row">
                    <span>Rôles actifs</span>
                    <strong>8</strong>
                  </div>
                  <div className="metric-row">
                    <span>Accès multi-portails</span>
                    <strong>SSO Keycloak</strong>
                  </div>
                  <button
                    className="btn-primary"
                    onClick={() => setSettingsAction('rbac')}
                  >
                    Configurer RBAC
                  </button>
                </div>

                <div className="admin-card">
                  <h3>Paramétrage des profils</h3>
                  <div className="metric-row">
                    <span>Champs pré-remplis</span>
                    <strong>15</strong>
                  </div>
                  <div className="metric-row">
                    <span>Templates actifs</span>
                    <strong>4</strong>
                  </div>
                  <button
                    className="btn-secondary"
                    onClick={() => setSettingsAction('profiles')}
                  >
                    Gérer les profils
                  </button>
                </div>
              </div>

              <div className="admin-grid">
                <div className="admin-card">
                  <h3>Interface & multilingue</h3>
                  <div className="language-row">
                    <span><FiGlobe /> Français</span>
                    <span><FiGlobe /> العربية</span>
                    <span><FiGlobe /> English</span>
                  </div>
                  <div className="access-row">
                    <FiLock /> MFA et contrôle d'accès renforcé
                  </div>
                </div>

                <div className="admin-card">
                  <h3>Supervision & self-service</h3>
                  <div className="admin-alert">
                    <FiAlertCircle /> 42 mises à jour de contenus ce mois
                  </div>
                  <div className="admin-alert">
                    <FiAlertCircle /> 6 demandes d'accès en attente
                  </div>
                  <button
                    className="btn-secondary"
                    onClick={() => setSettingsAction('admin')}
                  >
                    Accéder au centre admin
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'settings' && settingsAction && (
            <div className="settings-modal-overlay" onClick={() => setSettingsAction(null)}>
              <div className="settings-modal" onClick={(e) => e.stopPropagation()}>
                <button className="settings-modal-close" onClick={() => setSettingsAction(null)}>
                  <FiX />
                </button>

                {settingsAction === 'rbac' && (
                  <>
                    <h3>Configuration RBAC</h3>
                    <div className="metric-row">
                      <span>Rôle</span>
                      <strong>Administrateur</strong>
                    </div>
                    <div className="metric-row">
                      <span>Niveau d'accès</span>
                      <strong>Lecture/Écriture</strong>
                    </div>
                    <button className="btn-primary">Sauvegarder</button>
                  </>
                )}

                {settingsAction === 'profiles' && (
                  <>
                    <h3>Gestion des profils</h3>
                    <div className="metric-row">
                      <span>Templates actifs</span>
                      <strong>4</strong>
                    </div>
                    <div className="metric-row">
                      <span>Champs requis</span>
                      <strong>12</strong>
                    </div>
                    <button className="btn-secondary">Mettre à jour</button>
                  </>
                )}

                {settingsAction === 'admin' && (
                  <>
                    <h3>Centre admin</h3>
                    <div className="metric-row">
                      <span>Demandes en attente</span>
                      <strong>6</strong>
                    </div>
                    <div className="metric-row">
                      <span>Contenus à valider</span>
                      <strong>9</strong>
                    </div>
                    <button className="btn-secondary">Ouvrir</button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AuthorityDashboard;
