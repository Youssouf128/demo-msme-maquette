import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiCheck, FiUpload, FiX, FiMessageCircle, FiAlertCircle, FiFileText, FiDollarSign, FiHome, FiAward, FiUsers, FiInfo, FiSettings, FiLogOut, FiMenu, FiBell } from 'react-icons/fi';
import './IncitationsForm.css';

interface FormData {
  deviceType: string;
  companyName: string;
  registrationNumber: string;
  sector: string;
  requestedAmount: string;
  justification: string;
  businessPlan: string;
  estimatedRevenue: string;
  documents: File[];
}

const IncitationsForm = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showChatbot, setShowChatbot] = useState(false);
  const [showSimulator, setShowSimulator] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    deviceType: '',
    companyName: 'TechStart Solutions', // Pré-rempli
    registrationNumber: 'DJ-2024-00123', // Pré-rempli
    sector: 'tech',
    requestedAmount: '',
    justification: '',
    businessPlan: '',
    estimatedRevenue: '',
    documents: []
  });

  const steps = [
    { number: 1, title: 'Type de dispositif', icon: <FiFileText /> },
    { number: 2, title: 'Informations entreprise', icon: <FiInfo /> },
    { number: 3, title: 'Détails financiers', icon: <FiDollarSign /> },
    { number: 4, title: 'Documents', icon: <FiUpload /> }
  ];

  const deviceTypes = [
    {
      id: 'exoneration-fiscale',
      title: 'Exonération fiscale',
      description: 'Exonération sur l\'impôt sur les sociétés pour les startups labellisées',
      benefits: 'Jusqu\'à 8 ans d\'exonération'
    },
    {
      id: 'subvention-innovation',
      title: 'Subvention à l\'innovation',
      description: 'Aide financière pour projets innovants',
      benefits: 'Jusqu\'à 100,000 DJF'
    },
    {
      id: 'aide-emploi',
      title: 'Aide à l\'emploi',
      description: 'Prise en charge partielle des cotisations sociales',
      benefits: '50% des charges pendant 2 ans'
    },
    {
      id: 'financement-rd',
      title: 'Financement R&D',
      description: 'Soutien aux activités de recherche et développement',
      benefits: 'Jusqu\'à 200,000 DJF'
    }
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
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    alert('Demande d\'incitation soumise avec succès ! Vous allez être redirigé vers votre tableau de bord.');
    navigate('/startup/dashboard');
  };

  const menuItems = [
    { id: 'dashboard', icon: <FiHome />, label: 'Tableau de bord', path: '/startup/dashboard' },
    { id: 'labellisation', icon: <FiAward />, label: 'Labellisation', path: '/startup/dashboard' },
    { id: 'incitations', icon: <FiDollarSign />, label: 'Incitations & Subventions', path: '/startup/incitations' },
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
              <h1>Demande d'Incitation</h1>
              <p className="header-subtitle">Accédez aux exonérations et aides financières</p>
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
          <div className="incitations-form-page">
            {/* Info Banner */}
            <div className="info-banner">
              <FiAlertCircle />
              <div>
                <strong>Formulaire pré-rempli détecté</strong>
                <p>Vos informations ont été récupérées automatiquement depuis votre profil</p>
              </div>
            </div>

            {/* Helper Buttons */}
            <div className="helper-actions">
              <button className="helper-btn" onClick={() => setShowSimulator(true)}>
                <FiDollarSign /> Simulateur financier
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
                    <h2>Sélectionnez le type de dispositif</h2>
                    <p className="section-description">Choisissez le type d'aide ou d'exonération que vous souhaitez demander</p>
                    
                    <div className="device-grid">
                      {deviceTypes.map((device) => (
                        <div
                          key={device.id}
                          className={`device-card ${formData.deviceType === device.id ? 'selected' : ''}`}
                          onClick={() => handleInputChange('deviceType', device.id)}
                        >
                          <div className="device-header">
                            <FiDollarSign className="device-icon" />
                            <h3>{device.title}</h3>
                          </div>
                          <p className="device-description">{device.description}</p>
                          <div className="device-benefits">
                            <FiCheck /> {device.benefits}
                          </div>
                          {formData.deviceType === device.id && (
                            <div className="selected-badge">
                              <FiCheck /> Sélectionné
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="form-section">
                    <h2>Informations sur l'entreprise</h2>
                    <p className="section-description">Informations pré-remplies depuis votre profil</p>
                    
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
                        <span className="helper-text">✓ Pré-rempli</span>
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
                        <span className="helper-text">✓ Pré-rempli</span>
                      </div>

                      <div className="form-group full-width">
                        <label>Secteur d'activité *</label>
                        <select
                          value={formData.sector}
                          onChange={(e) => handleInputChange('sector', e.target.value)}
                          className="form-input"
                        >
                          <option value="tech">Technologies de l'information</option>
                          <option value="fintech">FinTech</option>
                          <option value="agritech">AgriTech</option>
                          <option value="healthtech">HealthTech</option>
                          <option value="edtech">EdTech</option>
                        </select>
                      </div>

                      <div className="form-group full-width">
                        <label>Justification de la demande * (min. 200 caractères)</label>
                        <textarea
                          value={formData.justification}
                          onChange={(e) => handleInputChange('justification', e.target.value)}
                          className="form-textarea"
                          rows={6}
                          placeholder="Expliquez pourquoi vous demandez cette aide et comment elle sera utilisée..."
                        />
                        <span className="char-count">{formData.justification.length} / 200 min</span>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="form-section">
                    <h2>Détails financiers</h2>
                    <p className="section-description">Informations sur votre situation financière</p>
                    
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Montant demandé (DJF) *</label>
                        <input
                          type="text"
                          value={formData.requestedAmount}
                          onChange={(e) => handleInputChange('requestedAmount', e.target.value)}
                          className="form-input"
                          placeholder="Ex: 50,000"
                        />
                      </div>

                      <div className="form-group">
                        <label>Chiffre d'affaires estimé (DJF) *</label>
                        <input
                          type="text"
                          value={formData.estimatedRevenue}
                          onChange={(e) => handleInputChange('estimatedRevenue', e.target.value)}
                          className="form-input"
                          placeholder="Ex: 5,000,000"
                        />
                      </div>

                      <div className="form-group full-width">
                        <label>Résumé du business plan *</label>
                        <textarea
                          value={formData.businessPlan}
                          onChange={(e) => handleInputChange('businessPlan', e.target.value)}
                          className="form-textarea"
                          rows={8}
                          placeholder="Décrivez votre modèle d'affaires, vos objectifs et comment cette aide contribuera à votre développement..."
                        />
                      </div>

                      <div className="form-group full-width">
                        <div className="simulator-box">
                          <FiDollarSign className="simulator-icon" />
                          <div>
                            <strong>Besoin d'aide pour estimer l'impact ?</strong>
                            <p>Utilisez notre simulateur financier pour calculer l'impact de cette aide sur votre entreprise</p>
                            <button className="btn-link" onClick={() => setShowSimulator(true)}>
                              Ouvrir le simulateur
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 4 && (
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
                          <li>✓ Business plan détaillé</li>
                          <li>✓ Bilan financier (si disponible)</li>
                          <li>✓ Prévisionnel financier sur 3 ans</li>
                          <li>✓ Label Startup-Act (pour exonérations fiscales)</li>
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

                  {currentStep < 4 ? (
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
          </div>
        </div>
      </main>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <h3><FiMessageCircle /> Assistant IA</h3>
            <button onClick={() => setShowChatbot(false)}><FiX /></button>
          </div>
          <div className="chatbot-content">
            <div className="chat-message bot">
              <p>Bonjour ! Je suis là pour vous aider avec votre demande d'incitation. Comment puis-je vous assister ?</p>
            </div>
            <div className="chat-message bot">
              <p>Questions fréquentes :</p>
              <ul>
                <li>Suis-je éligible aux exonérations fiscales ?</li>
                <li>Quel montant puis-je demander ?</li>
                <li>Combien de temps prend le traitement ?</li>
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

      {/* Simulator Modal */}
      {showSimulator && (
        <div className="modal-overlay" onClick={() => setShowSimulator(false)}>
          <div className="modal-content simulator-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3><FiDollarSign /> Simulateur financier</h3>
              <button onClick={() => setShowSimulator(false)}><FiX /></button>
            </div>
            <div className="modal-body">
              <div className="simulator-section">
                <h4>Impact d'une exonération fiscale</h4>
                <div className="simulator-inputs">
                  <div className="input-group">
                    <label>Chiffre d'affaires annuel (DJF)</label>
                    <input type="number" placeholder="5,000,000" />
                  </div>
                  <div className="input-group">
                    <label>Taux d'imposition (%)</label>
                    <input type="number" placeholder="25" />
                  </div>
                  <div className="input-group">
                    <label>Durée d'exonération (années)</label>
                    <input type="number" placeholder="5" />
                  </div>
                </div>
                <div className="simulator-results">
                  <div className="result-card">
                    <h5>Économie fiscale estimée</h5>
                    <p className="result-value">6,250,000 DJF</p>
                    <span className="result-subtitle">Sur 5 ans</span>
                  </div>
                  <div className="result-card">
                    <h5>Économie annuelle</h5>
                    <p className="result-value">1,250,000 DJF</p>
                    <span className="result-subtitle">Par an</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IncitationsForm;
