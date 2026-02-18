import GuichetHeader from '../components/GuichetHeader';
import './GuichetUnique.css';

const GuichetUnique = () => {
  return (
    <div className="guichet-unique">
      <GuichetHeader />
      
      <main className="guichet-main">
        <div className="guichet-hero">
          <h1>Bienvenue sur le portail G2B</h1>
          <p className="hero-subtitle">Votre plateforme de gestion des formalités d'entreprise</p>
        </div>

        <div className="guichet-content">
          <div className="guichet-section">
            <div className="guichet-card animate-slide-in">
              <h2>Première visite ?</h2>
              <p>Le portail G2B vous permet <strong>d'effectuer toutes vos démarches en ligne</strong> de manière sécurisée.</p>
              <button className="guichet-btn-primary">Créer votre compte</button>

              <h3>Protégez vos innovations.</h3>
              <ul>
                <li>Accédez aux démarches de <strong>propriété intellectuelle</strong> : dépôt de marque, brevet, dessins et modèles, etc.</li>
              </ul>

              <h3>Réalisez vos formalités d'entreprise sur G2B.</h3>
              <ul>
                <li><strong>Centralisez</strong> toutes vos formalités de création, modification et cessation d'activités.</li>
                <li><strong>Procédez</strong> au dépôt de vos comptes annuels ou d'actes isolés.</li>
                <li><strong>Suivez l'avancement</strong> du traitement de vos demandes.</li>
              </ul>
            </div>
          </div>

          <div className="guichet-section">
            <div className="guichet-card guichet-login-card animate-slide-in-delay">
              <div className="login-logo">
                <img src="/logo/logo_g2b.png" alt="G2B" />
              </div>
              
              <h2>Connectez-vous</h2>
              
              <div className="connection-method">
                <h3>Via 🔗 G2B Connect</h3>
                
                <div className="form-group">
                  <label>Adresse courriel</label>
                  <input type="email" placeholder="votre@email.com" className="guichet-input" />
                </div>

                <div className="form-group">
                  <label>Mot de passe</label>
                  <input type="password" placeholder="••••••••" className="guichet-input" />
                </div>

                <a href="#" className="forgot-link">➤ Mot de passe oublié</a>
                <p className="info-text">ℹ️ En savoir plus sur G2B Connect</p>

                <button className="guichet-btn-primary">Se connecter</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="guichet-footer">
        <div className="guichet-footer-links">
          <a href="#">G2B ↗</a>
          <a href="#">CONDITIONS GÉNÉRALES D'UTILISATION</a>
          <a href="#">ACCESSIBILITÉ : PARTIELLEMENT CONFORME</a>
          <a href="#">DONNÉES PERSONNELLES ↗</a>
          <a href="#">CONTACTER G2B ↗</a>
          <a href="#">PLAN DU SITE</a>
        </div>
        <p className="guichet-footer-copy">© G2B 2026 - Portail G2B - Version 1.25.2</p>
      </footer>
    </div>
  );
};

export default GuichetUnique;
