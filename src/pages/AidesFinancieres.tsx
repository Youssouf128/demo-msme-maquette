import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiFilter, FiDollarSign, FiCalendar, FiUsers, FiAward, FiHome, FiInfo, FiSettings, FiLogOut, FiMenu, FiX, FiBell, FiExternalLink } from 'react-icons/fi';
import './AidesFinancieres.css';

interface Opportunity {
  id: string;
  title: string;
  type: 'subvention' | 'pret' | 'investissement' | 'concours';
  amount: string;
  sector: string[];
  stage: string[];
  deadline: string;
  organization: string;
  description: string;
  criteria: string[];
}

const AidesFinancieres = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [] as string[],
    sector: [] as string[],
    stage: [] as string[],
    amount: ''
  });
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  const opportunities: Opportunity[] = [
    {
      id: '1',
      title: 'Fonds d\'Innovation Numérique 2026',
      type: 'subvention',
      amount: '50,000 - 200,000 DJF',
      sector: ['tech', 'fintech'],
      stage: ['ideation', 'seed'],
      deadline: '30 Mars 2026',
      organization: 'Ministère de l\'Économie Numérique',
      description: 'Subvention destinée aux startups innovantes dans le secteur numérique pour financer le développement de produits technologiques.',
      criteria: [
        'Être une startup labellisée Startup-Act',
        'Avoir moins de 3 ans d\'existence',
        'Projet dans le domaine du numérique',
        'Équipe de minimum 2 personnes'
      ]
    },
    {
      id: '2',
      title: 'Prix de l\'Innovation Djibouti 2026',
      type: 'concours',
      amount: '100,000 DJF',
      sector: ['tech', 'agritech', 'healthtech'],
      stage: ['seed', 'early-stage'],
      deadline: '15 Avril 2026',
      organization: 'Chambre de Commerce',
      description: 'Concours annuel récompensant les projets les plus innovants avec un prix et un accompagnement personnalisé.',
      criteria: [
        'Projet innovant et viable',
        'Pitch devant un jury d\'experts',
        'Business plan solide',
        'Impact social ou économique démontrable'
      ]
    },
    {
      id: '3',
      title: 'Prêt à Taux Préférentiel Jeunes Entrepreneurs',
      type: 'pret',
      amount: 'Jusqu\'à 500,000 DJF',
      sector: ['tech', 'commerce', 'services'],
      stage: ['early-stage', 'growth'],
      deadline: '31 Décembre 2026',
      organization: 'Banque de Développement',
      description: 'Prêt à taux d\'intérêt réduit pour les jeunes entrepreneurs de moins de 35 ans.',
      criteria: [
        'Âge inférieur à 35 ans',
        'Projet créateur d\'emplois',
        'Garantie bancaire ou caution',
        'Business plan détaillé'
      ]
    },
    {
      id: '4',
      title: 'Fonds d\'Investissement Tech Ventures',
      type: 'investissement',
      amount: '100,000 - 1,000,000 DJF',
      sector: ['tech', 'fintech', 'edtech'],
      stage: ['seed', 'early-stage', 'growth'],
      deadline: 'Permanent',
      organization: 'Tech Ventures Capital',
      description: 'Fonds d\'investissement privé spécialisé dans les startups technologiques à fort potentiel de croissance.',
      criteria: [
        'Traction démontrée (utilisateurs, revenus)',
        'Équipe expérimentée',
        'Marché addressable important',
        'Modèle économique scalable'
      ]
    },
    {
      id: '5',
      title: 'Bourse AgriTech Innovation',
      type: 'subvention',
      amount: '75,000 DJF',
      sector: ['agritech'],
      stage: ['ideation', 'seed'],
      deadline: '20 Mai 2026',
      organization: 'Ministère de l\'Agriculture',
      description: 'Soutien aux innovations dans le secteur agricole pour améliorer la productivité et la durabilité.',
      criteria: [
        'Innovation dans l\'agriculture',
        'Impact environnemental positif',
        'Potentiel de réplication',
        'Partenariat avec agriculteurs locaux'
      ]
    },
    {
      id: '6',
      title: 'Programme d\'Accélération StartupBoost',
      type: 'subvention',
      amount: '30,000 DJF + Accompagnement',
      sector: ['tech', 'fintech', 'healthtech', 'edtech'],
      stage: ['seed', 'early-stage'],
      deadline: '10 Juin 2026',
      organization: 'Incubateur National',
      description: 'Programme d\'accélération de 6 mois avec financement, mentoring et mise en réseau.',
      criteria: [
        'Startup en phase de développement',
        'Équipe disponible à temps plein',
        'Produit MVP fonctionnel',
        'Engagement à participer au programme complet'
      ]
    }
  ];

  const typeLabels: { [key: string]: string } = {
    'subvention': 'Subvention',
    'pret': 'Prêt',
    'investissement': 'Investissement',
    'concours': 'Concours'
  };

  const sectorLabels: { [key: string]: string } = {
    'tech': 'Tech',
    'fintech': 'FinTech',
    'agritech': 'AgriTech',
    'healthtech': 'HealthTech',
    'edtech': 'EdTech',
    'commerce': 'Commerce',
    'services': 'Services'
  };

  const stageLabels: { [key: string]: string } = {
    'ideation': 'Idéation',
    'seed': 'Seed',
    'early-stage': 'Early Stage',
    'growth': 'Croissance'
  };

  const toggleFilter = (category: 'type' | 'sector' | 'stage', value: string) => {
    setSelectedFilters(prev => {
      const current = prev[category] as string[];
      const newValues = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: newValues };
    });
  };

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = searchQuery === '' || 
      opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType = selectedFilters.type.length === 0 || 
      selectedFilters.type.includes(opp.type);

    const matchesSector = selectedFilters.sector.length === 0 ||
      selectedFilters.sector.some(s => opp.sector.includes(s));

    const matchesStage = selectedFilters.stage.length === 0 ||
      selectedFilters.stage.some(s => opp.stage.includes(s));

    return matchesSearch && matchesType && matchesSector && matchesStage;
  });

  const menuItems = [
    { id: 'dashboard', icon: <FiHome />, label: 'Tableau de bord', path: '/startup/dashboard' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation', path: '/startup/dashboard' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions', path: '/startup/dashboard' },
    { id: 'networking', icon: <FiUsers />, label: 'Networking', path: '/startup/dashboard' },
    { id: 'information', icon: <FiInfo />, label: 'Informations', path: '/startup/aides' },
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
              className={`nav-item ${item.id === 'incitations' ? 'active' : ''}`}
              onClick={() => navigate(item.path)}
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
            <button className="back-to-dashboard-btn" onClick={() => navigate('/startup/dashboard')}>
              <FiArrowLeft /> Retour
            </button>
            <div>
              <h1>Aides Financières</h1>
              <p className="header-subtitle">Catalogue des opportunités de financement</p>
            </div>
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

        {/* Dashboard Content */}
        <div className="dashboard-content">
          <div className="aides-page">
            {/* Search Bar */}
            <div className="search-bar">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher une opportunité de financement..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="aides-layout">
              {/* Filters Sidebar */}
              <aside className="filters-sidebar">
                <div className="filters-header">
                  <FiFilter />
                  <h3>Filtres</h3>
                </div>

                <div className="filter-group">
                  <h4>Type de financement</h4>
                  {Object.keys(typeLabels).map(type => (
                    <label key={type} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.type.includes(type)}
                        onChange={() => toggleFilter('type', type)}
                      />
                      <span>{typeLabels[type]}</span>
                    </label>
                  ))}
                </div>

                <div className="filter-group">
                  <h4>Secteur</h4>
                  {Object.keys(sectorLabels).map(sector => (
                    <label key={sector} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.sector.includes(sector)}
                        onChange={() => toggleFilter('sector', sector)}
                      />
                      <span>{sectorLabels[sector]}</span>
                    </label>
                  ))}
                </div>

                <div className="filter-group">
                  <h4>Stade de maturité</h4>
                  {Object.keys(stageLabels).map(stage => (
                    <label key={stage} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.stage.includes(stage)}
                        onChange={() => toggleFilter('stage', stage)}
                      />
                      <span>{stageLabels[stage]}</span>
                    </label>
                  ))}
                </div>

                <button className="clear-filters-btn" onClick={() => setSelectedFilters({ type: [], sector: [], stage: [], amount: '' })}>
                  Réinitialiser les filtres
                </button>
              </aside>

              {/* Opportunities List */}
              <div className="opportunities-content">
                <div className="opportunities-header">
                  <h2>{filteredOpportunities.length} opportunités disponibles</h2>
                  <p>Explorez les financements adaptés à votre startup</p>
                </div>

                <div className="opportunities-grid">
                  {filteredOpportunities.map(opp => (
                    <div key={opp.id} className="opportunity-card" onClick={() => setSelectedOpportunity(opp)}>
                      <div className="opportunity-header">
                        <div className={`opportunity-type ${opp.type}`}>
                          <FiDollarSign />
                          <span>{typeLabels[opp.type]}</span>
                        </div>
                        <div className="opportunity-amount">{opp.amount}</div>
                      </div>

                      <h3>{opp.title}</h3>
                      <p className="opportunity-org">
                        <FiUsers /> {opp.organization}
                      </p>
                      <p className="opportunity-description">{opp.description}</p>

                      <div className="opportunity-tags">
                        {opp.sector.slice(0, 3).map(s => (
                          <span key={s} className="tag">{sectorLabels[s]}</span>
                        ))}
                      </div>

                      <div className="opportunity-footer">
                        <div className="deadline">
                          <FiCalendar />
                          <span>Date limite: {opp.deadline}</span>
                        </div>
                        <button className="view-details-btn">
                          Voir détails <FiExternalLink />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredOpportunities.length === 0 && (
                  <div className="no-results">
                    <FiSearch className="no-results-icon" />
                    <h3>Aucune opportunité trouvée</h3>
                    <p>Essayez de modifier vos filtres ou votre recherche</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Opportunity Detail Modal */}
      {selectedOpportunity && (
        <div className="modal-overlay" onClick={() => setSelectedOpportunity(null)}>
          <div className="modal-content opportunity-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3>{selectedOpportunity.title}</h3>
                <p className="modal-subtitle">{selectedOpportunity.organization}</p>
              </div>
              <button onClick={() => setSelectedOpportunity(null)}><FiX /></button>
            </div>
            <div className="modal-body">
              <div className="opportunity-detail-section">
                <div className="detail-row">
                  <div className="detail-item">
                    <strong>Type</strong>
                    <span className={`type-badge ${selectedOpportunity.type}`}>
                      {typeLabels[selectedOpportunity.type]}
                    </span>
                  </div>
                  <div className="detail-item">
                    <strong>Montant</strong>
                    <span>{selectedOpportunity.amount}</span>
                  </div>
                  <div className="detail-item">
                    <strong>Date limite</strong>
                    <span>{selectedOpportunity.deadline}</span>
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Description</h4>
                  <p>{selectedOpportunity.description}</p>
                </div>

                <div className="detail-section">
                  <h4>Critères d'éligibilité</h4>
                  <ul className="criteria-list">
                    {selectedOpportunity.criteria.map((criterion, index) => (
                      <li key={index}>{criterion}</li>
                    ))}
                  </ul>
                </div>

                <div className="detail-section">
                  <h4>Secteurs éligibles</h4>
                  <div className="tags-container">
                    {selectedOpportunity.sector.map(s => (
                      <span key={s} className="tag">{sectorLabels[s]}</span>
                    ))}
                  </div>
                </div>

                <div className="detail-section">
                  <h4>Stades de maturité</h4>
                  <div className="tags-container">
                    {selectedOpportunity.stage.map(s => (
                      <span key={s} className="tag stage">{stageLabels[s]}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-secondary" onClick={() => setSelectedOpportunity(null)}>
                  Fermer
                </button>
                <button className="btn-primary" onClick={() => navigate('/startup/incitations')}>
                  Postuler maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AidesFinancieres;
