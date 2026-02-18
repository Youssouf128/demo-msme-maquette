import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck, FiUpload, FiX, FiMessageCircle, FiAlertCircle, FiFileText, FiUsers, FiDollarSign, FiHome, FiAward, FiInfo, FiSettings, FiLogOut, FiMenu, FiBell } from 'react-icons/fi';
import './LabellisationForm.css';

interface FormData {
  // Informations entreprise
  companyName: string;
  registrationNumber: string;
  legalForm: string;
  creationDate: string;
  sector: string;
  
  // Innovation
  innovationType: string;
  innovationDescription: string;
  uniqueValue: string;
  targetMarket: string;
  
  // Équipe
  teamSize: string;
  foundersCount: string;
  keyMembers: string;
  
  // Modèle économique
  businessModel: string;
  revenue: string;
  funding: string;
  projectedGrowth: string;
  
  // Documents
  documents: File[];
}

const LabellisationForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    companyName: 'TechStart Solutions', // Pré-rempli
    registrationNumber: 'DJ-2024-00123', // Pré-rempli
    legalForm: 'SARL',
    creationDate: '2024-01-15',
    sector: '',
    innovationType: '',
    innovationDescription: '',
    uniqueValue: '',
    targetMarket: '',
    teamSize: '',
    foundersCount: '',
    keyMembers: '',
    businessModel: '',
    revenue: '',
    funding: '',
    projectedGrowth: '',
    documents: []
  });

  const steps = [
    { number: 1, title: 'Informations entreprise', icon: <FiFileText /> },
    { number: 2, title: 'Innovation', icon: <FiAlertCircle /> },
    { number: 3, title: 'Équipe', icon: <FiUsers /> },
    { number: 4, title: 'Modèle économique', icon: <FiDollarSign /> },
    { number: 5, title: 'Documents', icon: <FiUpload /> }
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData({ ...formData, documents: [...formData.documents, ...newFiles] });
    }
  };

  const removeFile = (index: number) => {
    const newDocs = formData.documents.filter((_, i) => i !== index);
    setFormData({ ...formData, documents: newDocs });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Simuler la soumission et retourner au dashboard
    alert('Demande de labellisation soumise avec succès ! Vous allez être redirigé vers votre tableau de bord.');
    navigate('/startup/dashboard');
  };

  const menuItems = [
    { id: 'dashboard', icon: <FiHome />, label: 'Tableau de bord', path: '/startup/dashboard' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation', path: '/startup/labellisation' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions', path: '/startup/dashboard' },
    { id: 'networking', icon: <FiUsers />, label: 'Networking', path: '/startup/dashboard' },
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
              className={`nav-item ${item.id === 'labellisation' ? 'active' : ''}`}
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
              <h1>Demande de Labellisation</h1>
              <p className="header-subtitle">Processus de labellisation dématérialisé</p>
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
    <div className="labellisation-form-page">
      {/* Info Banner */}
      <div className="info-banner">
        <FiAlertCircle />
        <div>
          <strong>Formulaire pré-rempli détecté</strong>
          <p>Vos informations ont été récupérées automatiquement depuis le Guichet Unique</p>
        </div>
      </div>

      {/* Helper Buttons */}
      <div className="helper-actions">
        <button className="helper-btn" onClick={() => setShowEligibility(true)}>
          <FiCheck /> Vérifier mon éligibilité
        </button>
        <button className="helper-btn" onClick={() => setShowChatbot(!showChatbot)}>
          <FiMessageCircle /> Aide IA
        </button>
      </div>

      <div className="form-container">
        {/* Progress Steps */}
        <div className="progress-steps">
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`step ${currentStep === step.number ? 'active' : ''} ${currentStep > step.number ? 'completed' : ''}`}
            >
              <div className="step-icon">
                {currentStep > step.number ? <FiCheck /> : step.icon}
              </div>
              <div className="step-content">
                <span className="step-number">Étape {step.number}</span>
                <span className="step-title">{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="form-content">
          {currentStep === 1 && (
            <div className="form-section">
              <h2>Informations sur l'entreprise</h2>
              <p className="section-description">Informations générales récupérées automatiquement</p>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>Nom de l'entreprise *</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="form-input"
                    disabled
                  />
                  <span className="helper-text">✓ Pré-rempli depuis le Guichet Unique</span>
                </div>

                <div className="form-group">
                  <label>Numéro d'enregistrement *</label>
                  <input
                    type="text"
                    value={formData.registrationNumber}
                    onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                    className="form-input"
                    disabled
                  />
                  <span className="helper-text">✓ Pré-rempli depuis le Guichet Unique</span>
                </div>

                <div className="form-group">
                  <label>Forme juridique *</label>
                  <select
                    value={formData.legalForm}
                    onChange={(e) => handleInputChange('legalForm', e.target.value)}
                    className="form-input"
                  >
                    <option value="SARL">SARL</option>
                    <option value="SA">SA</option>
                    <option value="SAS">SAS</option>
                    <option value="EI">Entreprise Individuelle</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Date de création *</label>
                  <input
                    type="date"
                    value={formData.creationDate}
                    onChange={(e) => handleInputChange('creationDate', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Secteur d'activité *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => handleInputChange('sector', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Sélectionnez un secteur</option>
                    <option value="tech">Technologies de l'information</option>
                    <option value="fintech">FinTech</option>
                    <option value="agritech">AgriTech</option>
                    <option value="healthtech">HealthTech</option>
                    <option value="edtech">EdTech</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-section">
              <h2>Innovation</h2>
              <p className="section-description">Décrivez votre innovation et sa valeur unique</p>
              
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Type d'innovation *</label>
                  <select
                    value={formData.innovationType}
                    onChange={(e) => handleInputChange('innovationType', e.target.value)}
                    className="form-input"
                  >
                    <option value="">Sélectionnez le type</option>
                    <option value="product">Innovation de produit</option>
                    <option value="process">Innovation de processus</option>
                    <option value="service">Innovation de service</option>
                    <option value="business-model">Innovation de modèle d'affaires</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>Description de l'innovation * (min. 200 caractères)</label>
                  <textarea
                    value={formData.innovationDescription}
                    onChange={(e) => handleInputChange('innovationDescription', e.target.value)}
                    className="form-textarea"
                    rows={5}
                    placeholder="Décrivez votre innovation, le problème qu'elle résout et son caractère novateur..."
                  />
                  <span className="char-count">{formData.innovationDescription.length} / 200 min</span>
                </div>

                <div className="form-group full-width">
                  <label>Proposition de valeur unique *</label>
                  <textarea
                    value={formData.uniqueValue}
                    onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                    className="form-textarea"
                    rows={4}
                    placeholder="Qu'est-ce qui rend votre solution unique par rapport à la concurrence ?"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Marché cible *</label>
                  <textarea
                    value={formData.targetMarket}
                    onChange={(e) => handleInputChange('targetMarket', e.target.value)}
                    className="form-textarea"
                    rows={3}
                    placeholder="Décrivez votre marché cible et vos clients potentiels..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="form-section">
              <h2>Équipe</h2>
              <p className="section-description">Composition et compétences de votre équipe</p>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>Nombre total de membres *</label>
                  <input
                    type="number"
                    value={formData.teamSize}
                    onChange={(e) => handleInputChange('teamSize', e.target.value)}
                    className="form-input"
                    min="1"
                  />
                </div>

                <div className="form-group">
                  <label>Nombre de fondateurs *</label>
                  <input
                    type="number"
                    value={formData.foundersCount}
                    onChange={(e) => handleInputChange('foundersCount', e.target.value)}
                    className="form-input"
                    min="1"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Membres clés et leurs compétences *</label>
                  <textarea
                    value={formData.keyMembers}
                    onChange={(e) => handleInputChange('keyMembers', e.target.value)}
                    className="form-textarea"
                    rows={6}
                    placeholder="Listez vos membres clés avec leurs rôles et compétences principales..."
                  />
                  <span className="helper-text">Exemple: CEO - Expert en développement logiciel, 10 ans d'expérience</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="form-section">
              <h2>Modèle économique</h2>
              <p className="section-description">Informations financières et stratégie commerciale</p>
              
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>Modèle d'affaires *</label>
                  <textarea
                    value={formData.businessModel}
                    onChange={(e) => handleInputChange('businessModel', e.target.value)}
                    className="form-textarea"
                    rows={4}
                    placeholder="Décrivez comment votre startup génère des revenus..."
                  />
                </div>

                <div className="form-group">
                  <label>Chiffre d'affaires actuel (DJF) *</label>
                  <input
                    type="text"
                    value={formData.revenue}
                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                    className="form-input"
                    placeholder="Ex: 5,000,000"
                  />
                </div>

                <div className="form-group">
                  <label>Financement obtenu (DJF) *</label>
                  <input
                    type="text"
                    value={formData.funding}
                    onChange={(e) => handleInputChange('funding', e.target.value)}
                    className="form-input"
                    placeholder="Ex: 10,000,000"
                  />
                </div>

                <div className="form-group full-width">
                  <label>Croissance projetée (3 ans) *</label>
                  <textarea
                    value={formData.projectedGrowth}
                    onChange={(e) => handleInputChange('projectedGrowth', e.target.value)}
                    className="form-textarea"
                    rows={4}
                    placeholder="Décrivez vos projections de croissance sur 3 ans..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="form-section">
              <h2>Documents justificatifs</h2>
              <p className="section-description">Téléchargez les pièces jointes nécessaires</p>
              
              <div className="upload-zone">
                <div className="upload-area">
                  <FiUpload className="upload-icon" />
                  <h3>Glissez-déposez vos fichiers ici</h3>
                  <p>ou</p>
                  <label className="upload-btn">
                    Parcourir les fichiers
                    <input
                      type="file"
                      multiple
                      onChange={handleFileUpload}
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      style={{ display: 'none' }}
                    />
                  </label>
                  <span className="upload-info">PDF, DOC, DOCX, JPG, PNG - Max 10MB par fichier</span>
                </div>

                {formData.documents.length > 0 && (
                  <div className="files-list">
                    <h4>Fichiers téléchargés ({formData.documents.length})</h4>
                    {formData.documents.map((file, index) => (
                      <div key={index} className="file-item">
                        <FiFileText className="file-icon" />
                        <div className="file-info">
                          <span className="file-name">{file.name}</span>
                          <span className="file-size">{(file.size / 1024).toFixed(2)} KB</span>
                        </div>
                        <button
                          className="remove-file-btn"
                          onClick={() => removeFile(index)}
                        >
                          <FiX />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="required-docs">
                  <h4>Documents requis :</h4>
                  <ul>
                    <li>✓ Statuts de l'entreprise</li>
                    <li>✓ Certificat d'enregistrement</li>
                    <li>✓ Business plan détaillé</li>
                    <li>✓ CV des fondateurs</li>
                    <li>✓ Preuves d'innovation (brevets, prototypes, etc.)</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="form-navigation">
            {currentStep > 1 && (
              <button className="nav-btn secondary" onClick={handlePrevious}>
                <FiArrowLeft /> Précédent
              </button>
            )}
            
            <div className="nav-spacer"></div>

            {currentStep < 5 ? (
              <button className="nav-btn primary" onClick={handleNext}>
                Suivant <FiArrowRight />
              </button>
            ) : (
              <button className="nav-btn primary submit" onClick={handleSubmit}>
                <FiCheck /> Soumettre la demande
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3><FiMessageCircle /> Assistant IA</h3>
            <button onClick={() => setShowChatbot(false)}><FiX /></button>
          </div>
          <div className="chatbot-content">
            <div className="chat-message bot">
              <p>Bonjour ! Je suis là pour vous aider avec votre demande de labellisation. Comment puis-je vous assister ?</p>
            </div>
            <div className="chat-message bot">
              <p>Quelques questions fréquentes :</p>
              <ul>
                <li>Quels sont les critères d'éligibilité ?</li>
                <li>Combien de temps prend l'examen ?</li>
                <li>Quels documents sont obligatoires ?</li>
              </ul>
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" placeholder="Posez votre question..." />
            <button>Envoyer</button>
          </div>
        </div>
      )}

      {/* Eligibility Check Modal */}
      {showEligibility && (
        <div className="modal-overlay" onClick={() => setShowEligibility(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Vérification d'éligibilité</h3>
              <button onClick={() => setShowEligibility(false)}><FiX /></button>
            </div>
            <div className="modal-body">
              <h4>Critères du Startup-Act :</h4>
              <div className="eligibility-criteria">
                <div className="criteria-item passed">
                  <FiCheck /> Entreprise créée depuis moins de 8 ans
                </div>
                <div className="criteria-item passed">
                  <FiCheck /> Innovation technologique ou de modèle d'affaires
                </div>
                <div className="criteria-item passed">
                  <FiCheck /> Siège social à Djibouti
                </div>
                <div className="criteria-item passed">
                  <FiCheck /> CA inférieur à 500M DJF
                </div>
              </div>
              <div className="eligibility-result success">
                <FiCheck className="result-icon" />
                <div>
                  <strong>Vous êtes éligible !</strong>
                  <p>Votre entreprise remplit tous les critères pour le label Startup-Act</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
        </div>
      </main>
    </div>
  );
};

export default LabellisationForm;
