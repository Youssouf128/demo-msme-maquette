import { useNavigate } from 'react-router-dom';
import GuichetHeader from '../components/GuichetHeader';
import { FiTrendingUp, FiUsers, FiDollarSign, FiBarChart2, FiMail, FiLock } from 'react-icons/fi';
import { HiLightBulb } from 'react-icons/hi';
import './StartupPortal.css';

const StartupPortal = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/startup/dashboard');
  };

  return (
    <div className="startup-portal">
      <GuichetHeader />
      
      <main className="startup-main">
        <div className="startup-hero">
          <h1>Portail Startup Djibouti</h1>
          <p className="hero-subtitle">Écosystème d'innovation et d'entrepreneuriat</p>
        </div>

        <div className="startup-content">
          <div className="startup-section info-section">
            <div className="startup-card startup-info-card">
              <div className="card-header">
                <div className="icon-badge"><FiTrendingUp /></div>
                <h2>Rejoignez l'écosystème startup</h2>
              </div>
              
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon"><HiLightBulb /></span>
                  <div className="feature-content">
                    <h3>Incubation & Accélération</h3>
                    <p>Programmes d'accompagnement pour votre startup</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon"><FiDollarSign /></span>
                  <div className="feature-content">
                    <h3>Financement</h3>
                    <p>Accédez aux fonds d'investissement et subventions</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon"><FiUsers /></span>
                  <div className="feature-content">
                    <h3>Networking</h3>
                    <p>Connectez-vous avec investisseurs et mentors</p>
                  </div>
                </div>
                
                <div className="feature-item">
                  <span className="feature-icon"><FiBarChart2 /></span>
                  <div className="feature-content">
                    <h3>Ressources & Outils</h3>
                    <p>Formations, workshops et outils de gestion</p>
                  </div>
                </div>
              </div>

              <button className="startup-btn-primary">Découvrir les programmes</button>
            </div>
          </div>

          <div className="startup-section login-section">
            <div className="startup-card startup-login-card">
              <div className="login-header">
                <div className="login-icon">
                  <img src="/logo/logo_g2b.png" alt="Startup Portal" />
                </div>
                <h2>Espace Entrepreneur</h2>
                <p className="login-subtitle">Connectez-vous pour accéder à votre tableau de bord</p>
              </div>
              
              <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                  <label>Email professionnel</label>
                  <input 
                    type="email" 
                    placeholder="entrepreneur@startup.dj" 
                    className="startup-input" 
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Mot de passe</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="startup-input" 
                    required
                  />
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Rester connecté</span>
                  </label>
                  <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                </div>

                <button type="submit" className="startup-btn-login">Se connecter</button>

                <div className="divider">
                  <span>ou</span>
                </div>

                <button className="startup-btn-secondary">
                  <span className="btn-icon"><FiMail /></span>
                  Créer un compte startup
                </button>
              </form>

              <div className="login-footer">
                <p><FiLock className="lock-icon" /> Connexion sécurisée SSL</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="startup-footer">
        <div className="startup-footer-content">
          <div className="footer-links">
            <a href="#">À PROPOS</a>
            <a href="#">CONTACT</a>
            <a href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
            <a href="#">CONDITIONS D'UTILISATION</a>
          </div>
          <p className="footer-copy">© Startup Djibouti 2026 - Portail d'Innovation - Version 1.0.0</p>
        </div>
      </footer>
    </div>
  );
};

export default StartupPortal;
