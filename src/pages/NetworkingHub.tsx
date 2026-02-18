import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiSearch, FiFilter, FiMessageSquare, FiStar, FiMapPin, FiBriefcase, FiUsers, FiCalendar, FiVideo, FiAward, FiDollarSign, FiHome, FiInfo, FiSettings, FiLogOut, FiMenu, FiX, FiBell, FiMail, FiPhone, FiLinkedin, FiClock, FiCheckCircle } from 'react-icons/fi';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import type { Event as CalendarEvent } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './NetworkingHub.css';

const localizer = momentLocalizer(moment);

interface Actor {
  id: string;
  name: string;
  role: 'mentor' | 'investisseur' | 'partenaire';
  avatar: string;
  title: string;
  company: string;
  sector: string[];
  expertise: string[];
  location: string;
  rating: number;
  reviews: number;
  description: string;
  disponible: boolean;
  languages: string[];
  email: string;
  phone?: string;
  linkedin?: string;
}

interface Event {
  id: string;
  title: string;
  type: 'webinaire' | 'atelier' | 'networking' | 'conference';
  date: string;
  time: string;
  duration: string;
  speaker: string;
  participants: number;
  maxParticipants: number;
  description: string;
  online: boolean;
}

interface ForumTopic {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  lastActivity: string;
}

function NetworkingHub() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'annuaire' | 'messagerie' | 'forums' | 'evenements' | 'agenda'>('annuaire');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedActor, setSelectedActor] = useState<Actor | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState<'video' | 'phone' | 'presentiel'>('video');
  const [selectedFilters, setSelectedFilters] = useState({
    role: [] as string[],
    sector: [] as string[],
    disponible: false
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'annuaire' || tab === 'messagerie' || tab === 'forums' || tab === 'evenements' || tab === 'agenda') {
      setActiveTab(tab);
    }
  }, [location.search]);

  // Sample data - Acteurs
  const actors: Actor[] = [
    {
      id: '1',
      name: 'Ahmed Hassan',
      role: 'mentor',
      avatar: 'mentor',
      title: 'Fondateur & CEO',
      company: 'TechVentures Djibouti',
      sector: ['tech', 'fintech'],
      expertise: ['Stratégie d\'entreprise', 'Levée de fonds', 'Scaling'],
      location: 'Djibouti-Ville',
      rating: 4.8,
      reviews: 24,
      description: 'Entrepreneur chevronné avec 15 ans d\'expérience dans le développement de startups technologiques en Afrique de l\'Est. Spécialisé dans l\'accompagnement stratégique et la levée de fonds.',
      disponible: true,
      languages: ['Français', 'Arabe', 'Anglais'],
      email: 'ahmed.hassan@techventures.dj',
      phone: '+253 77 XX XX XX',
      linkedin: 'ahmed-hassan-dj'
    },
    {
      id: '2',
      name: 'Fatouma Mohamed',
      role: 'investisseur',
      avatar: 'investisseur',
      title: 'Investment Manager',
      company: 'Africa Growth Fund',
      sector: ['agritech', 'healthtech', 'edtech'],
      expertise: ['Investissement Seed', 'Due Diligence', 'Structuration financière'],
      location: 'Djibouti-Ville',
      rating: 4.9,
      reviews: 18,
      description: 'Spécialiste de l\'investissement dans les startups à impact social. Portfolio de 30+ startups accompagnées avec ticket moyen de 50K à 500K USD.',
      disponible: true,
      languages: ['Français', 'Anglais'],
      email: 'f.mohamed@africagrowth.com',
      linkedin: 'fatouma-mohamed'
    },
    {
      id: '3',
      name: 'Jean-Pierre Dubois',
      role: 'mentor',
      avatar: 'mentor',
      title: 'Consultant Senior',
      company: 'Business Advisory Djibouti',
      sector: ['commerce', 'services', 'logistique'],
      expertise: ['Marketing digital', 'Développement commercial', 'Export'],
      location: 'Djibouti-Ville',
      rating: 4.7,
      reviews: 31,
      description: 'Expert en stratégie commerciale et développement international. Accompagne les entrepreneurs dans leur expansion régionale.',
      disponible: false,
      languages: ['Français', 'Anglais'],
      email: 'jp.dubois@businessadvisory.dj',
      phone: '+253 77 XX XX XX'
    },
    {
      id: '4',
      name: 'Amina Ibrahim',
      role: 'partenaire',
      avatar: 'partenaire',
      title: 'Directrice Innovation',
      company: 'Djibouti Telecom',
      sector: ['tech', 'telecom'],
      expertise: ['Partenariats stratégiques', 'Innovation ouverte', 'R&D'],
      location: 'Djibouti-Ville',
      rating: 4.6,
      reviews: 15,
      description: 'Pilote les programmes d\'open innovation et recherche des partenariats avec les startups pour co-développer des solutions innovantes.',
      disponible: true,
      languages: ['Français', 'Arabe'],
      email: 'a.ibrahim@djtelecom.dj',
      phone: '+253 77 XX XX XX'
    },
    {
      id: '5',
      name: 'Omar Abdallah',
      role: 'investisseur',
      avatar: 'investisseur',
      title: 'Managing Partner',
      company: 'Red Sea Ventures',
      sector: ['tech', 'fintech', 'logistics'],
      expertise: ['Venture Capital', 'Series A/B', 'Scaling'],
      location: 'Djibouti-Ville',
      rating: 5.0,
      reviews: 12,
      description: 'Investisseur avec focus sur les startups en phase de croissance. Investissements de 200K à 2M USD avec accompagnement stratégique.',
      disponible: true,
      languages: ['Français', 'Arabe', 'Anglais'],
      email: 'o.abdallah@redseavc.com',
      linkedin: 'omar-abdallah-rsv'
    },
    {
      id: '6',
      name: 'Sophie Laurent',
      role: 'mentor',
      avatar: 'mentor',
      title: 'Serial Entrepreneur',
      company: 'Multiple ventures',
      sector: ['healthtech', 'edtech'],
      expertise: ['Product Management', 'UX/UI', 'Growth Hacking'],
      location: 'Djibouti-Ville',
      rating: 4.8,
      reviews: 27,
      description: 'Fondatrice de 3 startups à succès dans la santé et l\'éducation. Passionnée par le mentoring et l\'accompagnement des jeunes entrepreneurs.',
      disponible: true,
      languages: ['Français', 'Anglais'],
      email: 'sophie.laurent@gmail.com',
      linkedin: 'sophie-laurent-entrepreneur'
    }
  ];

  // Sample data - Événements
  const events: Event[] = [
    {
      id: '1',
      title: 'Webinaire : Réussir sa levée de fonds',
      type: 'webinaire',
      date: '25 Février 2026',
      time: '14:00',
      duration: '2h',
      speaker: 'Fatouma Mohamed',
      participants: 45,
      maxParticipants: 100,
      description: 'Découvrez les meilleures stratégies pour préparer et réussir votre première levée de fonds. Retours d\'expérience et conseils pratiques.',
      online: true
    },
    {
      id: '2',
      title: 'Atelier : Pitch Perfect',
      type: 'atelier',
      date: '28 Février 2026',
      time: '09:00',
      duration: '4h',
      speaker: 'Ahmed Hassan',
      participants: 18,
      maxParticipants: 20,
      description: 'Atelier pratique pour perfectionner votre pitch devant investisseurs. Exercices en groupe et feedback personnalisé.',
      online: false
    },
    {
      id: '3',
      title: 'Networking Breakfast - Tech Edition',
      type: 'networking',
      date: '5 Mars 2026',
      time: '08:00',
      duration: '2h',
      speaker: 'Multiple',
      participants: 32,
      maxParticipants: 50,
      description: 'Rencontre informelle entre entrepreneurs du secteur tech, investisseurs et mentors autour d\'un petit-déjeuner.',
      online: false
    },
    {
      id: '4',
      title: 'Conférence : Digital Transformation in Africa',
      type: 'conference',
      date: '12 Mars 2026',
      time: '10:00',
      duration: '6h',
      speaker: 'Multiple speakers',
      participants: 125,
      maxParticipants: 200,
      description: 'Grande conférence sur la transformation digitale en Afrique avec panels d\'experts, keynotes et networking.',
      online: true
    }
  ];

  // Sample data - Agenda Events
  const agendaEvents: CalendarEvent[] = useMemo(() => [
    {
      title: 'Rendez-vous avec Ahmed Hassan (Mentor)',
      start: new Date(2026, 1, 19, 10, 0),
      end: new Date(2026, 1, 19, 11, 0),
      resource: { type: 'meeting', actorName: 'Ahmed Hassan', meetingType: 'video' }
    },
    {
      title: 'Appel avec Fatouma Mohamed (Investisseur)',
      start: new Date(2026, 1, 21, 14, 30),
      end: new Date(2026, 1, 21, 15, 30),
      resource: { type: 'meeting', actorName: 'Fatouma Mohamed', meetingType: 'phone' }
    },
    {
      title: 'Webinaire : Réussir sa levée de fonds',
      start: new Date(2026, 1, 25, 14, 0),
      end: new Date(2026, 1, 25, 16, 0),
      resource: { type: 'event' }
    },
    {
      title: 'Atelier : Pitch Perfect',
      start: new Date(2026, 1, 28, 9, 0),
      end: new Date(2026, 1, 28, 13, 0),
      resource: { type: 'event' }
    },
    {
      title: 'Networking Breakfast - Tech Edition',
      start: new Date(2026, 2, 5, 8, 0),
      end: new Date(2026, 2, 5, 10, 0),
      resource: { type: 'event' }
    },
    {
      title: 'Conférence : Digital Transformation',
      start: new Date(2026, 2, 12, 10, 0),
      end: new Date(2026, 2, 12, 16, 0),
      resource: { type: 'event' }
    },
    {
      title: 'Réunion Jean-Pierre Dubois',
      start: new Date(2026, 1, 20, 15, 0),
      end: new Date(2026, 1, 20, 16, 0),
      resource: { type: 'meeting', actorName: 'Jean-Pierre Dubois', meetingType: 'presentiel' }
    }
  ], []);

  // Sample data - Forums
  const forumTopics: ForumTopic[] = [
    {
      id: '1',
      title: 'Meilleure stratégie pour trouver ses premiers clients ?',
      category: 'Marketing & Ventes',
      author: 'Mohamed Ali',
      date: '15 Fév 2026',
      replies: 23,
      views: 156,
      lastActivity: 'Il y a 2h'
    },
    {
      id: '2',
      title: 'Retours d\'expérience sur le financement bancaire',
      category: 'Finance',
      author: 'Sarah Ahmed',
      date: '14 Fév 2026',
      replies: 18,
      views: 142,
      lastActivity: 'Il y a 5h'
    },
    {
      id: '3',
      title: 'Recrutement : comment attirer les talents ?',
      category: 'Ressources Humaines',
      author: 'Ibrahim Hassan',
      date: '13 Fév 2026',
      replies: 31,
      views: 203,
      lastActivity: 'Il y a 1h'
    },
    {
      id: '4',
      title: 'Outils tech essentiels pour une startup en 2026',
      category: 'Technologie',
      author: 'Amina Youssouf',
      date: '12 Fév 2026',
      replies: 45,
      views: 312,
      lastActivity: 'Il y a 30min'
    }
  ];

  const roleLabels: { [key: string]: string } = {
    'mentor': 'Mentor',
    'investisseur': 'Investisseur',
    'partenaire': 'Partenaire'
  };

  const sectorLabels: { [key: string]: string } = {
    'tech': 'Tech',
    'fintech': 'FinTech',
    'agritech': 'AgriTech',
    'healthtech': 'HealthTech',
    'edtech': 'EdTech',
    'commerce': 'Commerce',
    'services': 'Services',
    'logistique': 'Logistique',
    'telecom': 'Telecom'
  };

  const toggleFilter = (category: 'role' | 'sector', value: string) => {
    setSelectedFilters(prev => {
      const current = prev[category] as string[];
      const newValues = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      return { ...prev, [category]: newValues };
    });
  };

  const filteredActors = actors.filter(actor => {
    const matchesSearch = searchQuery === '' || 
      actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      actor.company.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = selectedFilters.role.length === 0 || 
      selectedFilters.role.includes(actor.role);

    const matchesSector = selectedFilters.sector.length === 0 ||
      selectedFilters.sector.some(s => actor.sector.includes(s));

    const matchesDisponible = !selectedFilters.disponible || actor.disponible;

    return matchesSearch && matchesRole && matchesSector && matchesDisponible;
  });

  const menuItems = [
    { id: 'dashboard', icon: <FiHome />, label: 'Tableau de bord', path: '/startup/dashboard' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation', path: '/startup/dashboard' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions', path: '/startup/dashboard' },
    { id: 'networking', icon: <FiUsers />, label: 'Networking', path: '/startup/networking' },
    { id: 'agenda', icon: <FiCalendar />, label: 'Agenda', path: '/startup/networking' },
    { id: 'information', icon: <FiInfo />, label: 'Informations', path: '/startup/dashboard' },
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
              className={`nav-item ${
                item.id === 'agenda'
                  ? activeTab === 'agenda'
                    ? 'active'
                    : ''
                  : item.id === 'networking'
                    ? activeTab !== 'agenda'
                      ? 'active'
                      : ''
                    : ''
              }`}
              onClick={() => {
                if (item.id === 'agenda') {
                  setActiveTab('agenda');
                } else if (item.id === 'networking') {
                  setActiveTab('annuaire');
                } else {
                  navigate(item.path);
                }
              }}
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
              <h1>Networking & Communauté</h1>
              <p className="header-subtitle">Connectez-vous avec l'écosystème entrepreneurial</p>
            </div>
          </div>
          <div className="header-right">
            <button className="header-btn">
              <FiBell />
              <span className="notification-badge">5</span>
            </button>
            <div className="user-profile">
              <img src="/logo/logo_minister.jpeg" alt="User" />
              <span>TechStart Solutions</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="networking-page">
          {/* Tabs Navigation */}
          <div className="tabs-navigation">
            <button 
              className={`tab-btn ${activeTab === 'annuaire' ? 'active' : ''}`}
              onClick={() => setActiveTab('annuaire')}
            >
              <FiUsers /> Annuaire
            </button>
            <button 
              className={`tab-btn ${activeTab === 'messagerie' ? 'active' : ''}`}
              onClick={() => setActiveTab('messagerie')}
            >
              <FiMessageSquare /> Messagerie
              <span className="badge">3</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'forums' ? 'active' : ''}`}
              onClick={() => setActiveTab('forums')}
            >
              <FiMessageSquare /> Forums
            </button>
            <button 
              className={`tab-btn ${activeTab === 'evenements' ? 'active' : ''}`}
              onClick={() => setActiveTab('evenements')}
            >
              <FiCalendar /> Événements
              <span className="badge new">4</span>
            </button>
            <button 
              className={`tab-btn ${activeTab === 'agenda' ? 'active' : ''}`}
              onClick={() => setActiveTab('agenda')}
            >
              <FiCalendar /> Agenda
            </button>
          </div>

          {/* Annuaire Tab */}
          {activeTab === 'annuaire' && (
            <div className="tab-content">
              {/* Stats Banner */}
              <div className="stats-banner">
                <div className="stat-item">
                  <div className="stat-value">127</div>
                  <div className="stat-label">Membres actifs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">45</div>
                  <div className="stat-label">Mentors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">23</div>
                  <div className="stat-label">Investisseurs</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">59</div>
                  <div className="stat-label">Partenaires</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="search-bar">
                <FiSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Rechercher un mentor, investisseur ou partenaire..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="annuaire-layout">
                {/* Filters Sidebar */}
                <div className="filters-sidebar">
                  <div className="filters-header">
                    <FiFilter />
                    <h3>Filtres</h3>
                  </div>

                  <div className="filter-group">
                    <h4>Type d'acteur</h4>
                    {Object.entries(roleLabels).map(([key, label]) => (
                      <label key={key} className="filter-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedFilters.role.includes(key)}
                          onChange={() => toggleFilter('role', key)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="filter-group">
                    <h4>Secteur</h4>
                    {Object.entries(sectorLabels).map(([key, label]) => (
                      <label key={key} className="filter-checkbox">
                        <input
                          type="checkbox"
                          checked={selectedFilters.sector.includes(key)}
                          onChange={() => toggleFilter('sector', key)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>

                  <div className="filter-group">
                    <h4>Disponibilité</h4>
                    <label className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedFilters.disponible}
                        onChange={() => setSelectedFilters(prev => ({ ...prev, disponible: !prev.disponible }))}
                      />
                      <span>Disponible maintenant</span>
                    </label>
                  </div>

                  <button 
                    className="clear-filters-btn"
                    onClick={() => setSelectedFilters({ role: [], sector: [], disponible: false })}
                  >
                    Réinitialiser
                  </button>
                </div>

                {/* Actors Grid */}
                <div className="actors-content">
                  <div className="results-header">
                    <h3>{filteredActors.length} résultat{filteredActors.length > 1 ? 's' : ''}</h3>
                  </div>

                  {filteredActors.length > 0 ? (
                    <div className="actors-grid">
                      {filteredActors.map((actor) => (
                        <div key={actor.id} className="actor-card">
                          <div className="actor-header">
                            <div className="actor-avatar" data-role={actor.role}>
                              {actor.role === 'mentor' && <FiAward />}
                              {actor.role === 'investisseur' && <FiDollarSign />}
                              {actor.role === 'partenaire' && <FiUsers />}
                            </div>
                            <div className="actor-badge" data-role={actor.role}>
                              {roleLabels[actor.role]}
                            </div>
                          </div>

                          <h3>{actor.name}</h3>
                          <p className="actor-title">{actor.title}</p>
                          <p className="actor-company"><FiBriefcase /> {actor.company}</p>
                          <p className="actor-location"><FiMapPin /> {actor.location}</p>

                          <div className="actor-rating">
                            <div className="stars">
                              <FiStar className="filled" /> {actor.rating.toFixed(1)}
                            </div>
                            <span className="reviews">({actor.reviews} avis)</span>
                          </div>

                          <div className="actor-tags">
                            {actor.expertise.slice(0, 2).map((exp, idx) => (
                              <span key={idx} className="tag">{exp}</span>
                            ))}
                          </div>

                          <div className="actor-status">
                            <span className={`status-indicator ${actor.disponible ? 'available' : 'busy'}`}>
                              {actor.disponible ? 'Disponible' : 'Occupé'}
                            </span>
                          </div>

                          <button 
                            className="btn-primary"
                            onClick={() => setSelectedActor(actor)}
                          >
                            Voir le profil
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="no-results">
                      <FiUsers className="no-results-icon" />
                      <h3>Aucun résultat</h3>
                      <p>Essayez d'ajuster vos filtres de recherche</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Messagerie Tab */}
          {activeTab === 'messagerie' && (
            <div className="tab-content">
              <div className="messagerie-layout">
                <div className="conversations-list">
                  <div className="conversations-header">
                    <h3>Messages</h3>
                    <button className="btn-secondary">Nouveau</button>
                  </div>
                  <div className="conversation-item active">
                    <div className="conversation-avatar"><FiAward /></div>
                    <div className="conversation-info">
                      <h4>Ahmed Hassan</h4>
                      <p>Merci pour votre intérêt. Je suis disponible...</p>
                    </div>
                    <span className="conversation-time">10:30</span>
                    <span className="unread-badge">2</span>
                  </div>
                  <div className="conversation-item">
                    <div className="conversation-avatar"><FiDollarSign /></div>
                    <div className="conversation-info">
                      <h4>Fatouma Mohamed</h4>
                      <p>Votre dossier a été bien reçu. Nous...</p>
                    </div>
                    <span className="conversation-time">Hier</span>
                  </div>
                  <div className="conversation-item">
                    <div className="conversation-avatar"><FiUsers /></div>
                    <div className="conversation-info">
                      <h4>Amina Ibrahim</h4>
                      <p>Excellente idée ! Nous pourrions organiser...</p>
                    </div>
                    <span className="conversation-time">15 Fév</span>
                    <span className="unread-badge">1</span>
                  </div>
                </div>

                <div className="chat-window">
                  <div className="chat-header">
                    <div className="chat-user">
                      <div className="conversation-avatar"><FiAward /></div>
                      <div>
                        <h4>Ahmed Hassan</h4>
                        <span className="status-text">En ligne</span>
                      </div>
                    </div>
                    <button className="btn-icon"><FiPhone /></button>
                  </div>

                  <div className="chat-messages">
                    <div className="message received">
                      <div className="message-avatar"><FiAward /></div>
                      <div className="message-content">
                        <p>Bonjour ! J'ai bien reçu votre demande de mentorat. Votre projet dans la fintech est très intéressant.</p>
                        <span className="message-time">Hier 16:45</span>
                      </div>
                    </div>

                    <div className="message sent">
                      <div className="message-content">
                        <p>Merci beaucoup ! Je suis ravi de votre intérêt. Quand pourriez-vous être disponible pour un premier échange ?</p>
                        <span className="message-time">Hier 17:02</span>
                      </div>
                    </div>

                    <div className="message received">
                      <div className="message-avatar"><FiAward /></div>
                      <div className="message-content">
                        <p>Je suis disponible cette semaine mercredi ou jeudi après-midi. Nous pourrions faire un appel vidéo de 45 minutes pour discuter de votre stratégie.</p>
                        <span className="message-time">Aujourd'hui 10:30</span>
                      </div>
                    </div>

                    <div className="message sent">
                      <div className="message-content">
                        <p>Parfait ! Jeudi 14h me conviendrait. Je vous enverrai l'ordre du jour.</p>
                        <span className="message-time">Aujourd'hui 10:35</span>
                      </div>
                    </div>
                  </div>

                  <div className="chat-input">
                    <input type="text" placeholder="Écrivez votre message..." />
                    <button className="btn-primary">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Forums Tab */}
          {activeTab === 'forums' && (
            <div className="tab-content">
              <div className="forums-header">
                <h2>Forums de discussion</h2>
                <button className="btn-primary">Nouveau sujet</button>
              </div>

              <div className="forums-categories">
                <button className="category-btn active">Tous</button>
                <button className="category-btn">Marketing & Ventes</button>
                <button className="category-btn">Finance</button>
                <button className="category-btn">Technologie</button>
                <button className="category-btn">Ressources Humaines</button>
                <button className="category-btn">Juridique</button>
              </div>

              <div className="forum-topics">
                {forumTopics.map((topic) => (
                  <div key={topic.id} className="forum-topic-card">
                    <div className="topic-main">
                      <h3>{topic.title}</h3>
                      <div className="topic-meta">
                        <span className="topic-category">{topic.category}</span>
                        <span className="topic-author">Par {topic.author}</span>
                        <span className="topic-date">{topic.date}</span>
                      </div>
                    </div>
                    <div className="topic-stats">
                      <div className="stat">
                        <FiMessageSquare />
                        <span>{topic.replies}</span>
                      </div>
                      <div className="stat">
                        <span>{topic.views} vues</span>
                      </div>
                      <div className="last-activity">{topic.lastActivity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Événements Tab */}
          {activeTab === 'evenements' && (
            <div className="tab-content">
              <div className="events-header">
                <h2>Événements à venir</h2>
                <div className="events-filters">
                  <button className="filter-btn active">Tous</button>
                  <button className="filter-btn">Webinaires</button>
                  <button className="filter-btn">Ateliers</button>
                  <button className="filter-btn">Networking</button>
                </div>
              </div>

              <div className="events-grid">
                {events.map((event) => (
                  <div key={event.id} className="event-card">
                    <div className="event-type-badge" data-type={event.type}>
                      {event.type === 'webinaire' && <FiVideo />}
                      {event.type === 'atelier' && <FiBriefcase />}
                      {event.type === 'networking' && <FiUsers />}
                      {event.type === 'conference' && <FiAward />}
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </div>

                    {event.online && <span className="online-badge">En ligne</span>}

                    <h3>{event.title}</h3>

                    <div className="event-info">
                      <div className="info-item">
                        <FiCalendar />
                        <span>{event.date}</span>
                      </div>
                      <div className="info-item">
                        <span>{event.time} • {event.duration}</span>
                      </div>
                      <div className="info-item">
                        <FiUsers />
                        <span>{event.participants}/{event.maxParticipants} participants</span>
                      </div>
                    </div>

                    <div className="event-speaker">
                      <strong>Intervenant :</strong> {event.speaker}
                    </div>

                    <p className="event-description">{event.description}</p>

                    <div className="event-progress">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                      ></div>
                    </div>

                    <button className="btn-primary">S'inscrire</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agenda Tab */}
          {activeTab === 'agenda' && (
            <div className="tab-content">
              <div className="agenda-header">
                <h2>Mon Agenda</h2>
                <p>Gérez vos rendez-vous, événements et suivez votre calendrier professionnel</p>
              </div>

              <div className="calendar-container">
                <Calendar
                  localizer={localizer}
                  events={agendaEvents}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  views={['month', 'week', 'day', 'agenda']}
                  defaultView="month"
                  eventPropGetter={(event: CalendarEvent) => {
                    const isEvent = event.resource?.type === 'event';
                    return {
                      style: {
                        backgroundColor: isEvent ? '#17a2b8' : '#28a745',
                        borderRadius: '6px',
                        border: 'none',
                        color: 'white',
                        padding: '2px 5px',
                        fontSize: '0.85rem'
                      }
                    };
                  }}
                  messages={{
                    next: "Suivant",
                    previous: "Précédent",
                    today: "Aujourd'hui",
                    month: "Mois",
                    week: "Semaine",
                    day: "Jour",
                    agenda: "Agenda",
                    date: "Date",
                    time: "Heure",
                    event: "Événement",
                    noEventsInRange: "Aucun événement dans cette période"
                  }}
                />
              </div>

              <div className="agenda-legend">
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#28a745' }}></div>
                  <span>Rendez-vous</span>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ background: '#17a2b8' }}></div>
                  <span>Événements</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Actor Profile Modal */}
      {selectedActor && (
        <div className="modal-overlay" onClick={() => setSelectedActor(null)}>
          <div className="modal-content actor-profile-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedActor(null)}>
              <FiX />
            </button>

            <div className="profile-header">
              <div className="profile-avatar-large" data-role={selectedActor.role}>
                {selectedActor.role === 'mentor' && <FiAward />}
                {selectedActor.role === 'investisseur' && <FiDollarSign />}
                {selectedActor.role === 'partenaire' && <FiUsers />}
              </div>
              <div className="profile-info">
                <h2>{selectedActor.name}</h2>
                <p className="profile-title">{selectedActor.title}</p>
                <p className="profile-company"><FiBriefcase /> {selectedActor.company}</p>
                <div className="profile-rating">
                  <div className="stars">
                    <FiStar className="filled" /> {selectedActor.rating.toFixed(1)}
                  </div>
                  <span>({selectedActor.reviews} avis)</span>
                </div>
                <div className="profile-badge-large" data-role={selectedActor.role}>
                  {roleLabels[selectedActor.role]}
                </div>
              </div>
            </div>

            <div className="profile-body">
              <div className="profile-section">
                <h3>À propos</h3>
                <p>{selectedActor.description}</p>
              </div>

              <div className="profile-section">
                <h3>Expertise</h3>
                <div className="expertise-tags">
                  {selectedActor.expertise.map((exp, idx) => (
                    <span key={idx} className="tag">{exp}</span>
                  ))}
                </div>
              </div>

              <div className="profile-section">
                <h3>Secteurs</h3>
                <div className="sector-tags">
                  {selectedActor.sector.map((sec, idx) => (
                    <span key={idx} className="tag">{sectorLabels[sec]}</span>
                  ))}
                </div>
              </div>

              <div className="profile-section">
                <h3>Langues</h3>
                <p>{selectedActor.languages.join(', ')}</p>
              </div>

              <div className="profile-section">
                <h3>Contact</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <FiMail /> {selectedActor.email}
                  </div>
                  {selectedActor.phone && (
                    <div className="contact-item">
                      <FiPhone /> {selectedActor.phone}
                    </div>
                  )}
                  {selectedActor.linkedin && (
                    <div className="contact-item">
                      <FiLinkedin /> linkedin.com/in/{selectedActor.linkedin}
                    </div>
                  )}
                </div>
              </div>

              <div className="profile-section">
                <div className="profile-status">
                  <span className={`status-indicator ${selectedActor.disponible ? 'available' : 'busy'}`}>
                    {selectedActor.disponible ? '● Disponible maintenant' : '● Actuellement occupé'}
                  </span>
                </div>
              </div>
            </div>

            <div className="profile-actions">
              <button className="btn-primary" onClick={() => setActiveTab('messagerie')}>
                <FiMessageSquare /> Envoyer un message
              </button>
              <button className="btn-secondary" onClick={() => setShowScheduleModal(true)}>
                <FiCalendar /> Planifier un rendez-vous
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Meeting Modal */}
      {showScheduleModal && selectedActor && (
        <div className="modal-overlay" onClick={() => setShowScheduleModal(false)}>
          <div className="modal-content schedule-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowScheduleModal(false)}>
              <FiX />
            </button>

            <div className="schedule-header">
              <h2>Planifier un rendez-vous</h2>
              <p>Avec {selectedActor.name} - {selectedActor.title}</p>
            </div>

            <div className="schedule-body">
              {/* Type de rendez-vous */}
              <div className="schedule-section">
                <h3>Type de rendez-vous</h3>
                <div className="meeting-types">
                  <button 
                    className={`meeting-type-btn ${meetingType === 'video' ? 'active' : ''}`}
                    onClick={() => setMeetingType('video')}
                  >
                    <FiVideo /> Visioconférence
                  </button>
                  <button 
                    className={`meeting-type-btn ${meetingType === 'phone' ? 'active' : ''}`}
                    onClick={() => setMeetingType('phone')}
                  >
                    <FiPhone /> Appel téléphonique
                  </button>
                  <button 
                    className={`meeting-type-btn ${meetingType === 'presentiel' ? 'active' : ''}`}
                    onClick={() => setMeetingType('presentiel')}
                  >
                    <FiMapPin /> En présentiel
                  </button>
                </div>
              </div>

              {/* Sélection de la date */}
              <div className="schedule-section">
                <h3>Sélectionnez une date</h3>
                <div className="date-grid">
                  {['Lun 19 Fév', 'Mar 20 Fév', 'Mer 21 Fév', 'Jeu 22 Fév', 'Ven 23 Fév', 'Lun 26 Fév'].map((date, idx) => (
                    <button
                      key={idx}
                      className={`date-btn ${selectedDate === date ? 'active' : ''}`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <span className="date-day">{date.split(' ')[0]}</span>
                      <span className="date-number">{date.split(' ')[1]}</span>
                      <span className="date-month">{date.split(' ')[2]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sélection de l'heure */}
              {selectedDate && (
                <div className="schedule-section">
                  <h3>Créneaux disponibles</h3>
                  <div className="time-slots">
                    {['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                      <button
                        key={time}
                        className={`time-slot-btn ${selectedTime === time ? 'active' : ''}`}
                        onClick={() => setSelectedTime(time)}
                      >
                        <FiClock /> {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              {selectedDate && selectedTime && (
                <div className="schedule-section">
                  <h3>Ajouter une note (optionnel)</h3>
                  <textarea 
                    className="schedule-notes"
                    placeholder="Précisez l'objet du rendez-vous ou des points à aborder..."
                    rows={4}
                  />
                </div>
              )}
            </div>

            {/* Récapitulatif */}
            {selectedDate && selectedTime && (
              <div className="schedule-summary">
                <div className="summary-icon">
                  <FiCalendar />
                </div>
                <div className="summary-details">
                  <h4>Récapitulatif</h4>
                  <p>
                    <strong>{meetingType === 'video' ? 'Visioconférence' : meetingType === 'phone' ? 'Appel téléphonique' : 'Rendez-vous en présentiel'}</strong>
                  </p>
                  <p>{selectedDate} à {selectedTime} (1h)</p>
                  <p className="summary-location">
                    {meetingType === 'video' && 'Un lien de visioconférence vous sera envoyé par email'}
                    {meetingType === 'phone' && `Numéro : ${selectedActor.phone || 'À confirmer'}`}
                    {meetingType === 'presentiel' && `Lieu : ${selectedActor.company}, ${selectedActor.location}`}
                  </p>
                </div>
              </div>
            )}

            <div className="schedule-actions">
              <button 
                className="btn-secondary" 
                onClick={() => {
                  setShowScheduleModal(false);
                  setSelectedDate('');
                  setSelectedTime('');
                }}
              >
                Annuler
              </button>
              <button 
                className="btn-primary"
                disabled={!selectedDate || !selectedTime}
                onClick={() => {
                  // Logique de confirmation
                  alert(`Rendez-vous planifié avec ${selectedActor.name} le ${selectedDate} à ${selectedTime}`);
                  setShowScheduleModal(false);
                  setSelectedDate('');
                  setSelectedTime('');
                }}
              >
                <FiCheckCircle /> Confirmer le rendez-vous
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NetworkingHub;
