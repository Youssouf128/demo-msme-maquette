import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import { FiChevronUp } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <HiOutlineMail />
            </div>
            <div className="newsletter-text">
              <h2 className="newsletter-title">
                Restez <span className="newsletter-highlight">informé</span>
              </h2>
              <p className="newsletter-description">
                Vous êtes entrepreneur, innovateur ou porteur de projet ? La propriété 
                industrielle est un levier stratégique pour protéger et valoriser vos innovations. 
                Recevez chaque mois, notre lettre d'information.
              </p>
              <a href="#subscribe" className="newsletter-button">
                Je souhaite m'inscrire
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="/logo/logo_white.png" alt="MSME Djibouti" className="footer-logo-image" />
              </div>
              <p className="footer-description">
                MSME vous informe et vous oriente sur les formalités d'entreprises et les démarches en propriété intellectuelle
              </p>
              <div className="social-links">
                <a href="#facebook" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#twitter" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#linkedin" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="#instagram" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="footer-columns">
              <div className="footer-col">
                <h4>L'Institut</h4>
                <ul>
                  <li><a href="#gouvernance">Notre gouvernance</a></li>
                  <li><a href="#vision">Notre vision de l'innovation</a></li>
                  <li><a href="#missions">Missions & Stratégie</a></li>
                  <li><a href="#contrefacon">Lutte anti-contrefaçon</a></li>
                  <li><a href="#international">MSME à l'international</a></li>
                  <li><a href="#implantations">Nos implantations</a></li>
                  <li><a href="#annuaire">Annuaire des Conseils en PI</a></li>
                  <li><a href="#rejoindre">Nous rejoindre</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Nos sites internet</h4>
                <ul>
                  <li><a href="#depot">Dépôt de titres</a></li>
                  <li><a href="#guichet">Guichet unique des entreprises</a></li>
                  <li><a href="#data">Data MSME</a></li>
                  <li><a href="#pibd">Propriété industrielle - Bulletin documentaire (PIBD)</a></li>
                  <li><a href="#academie">Académie MSME</a></li>
                  <li><a href="#archives">Portail archives historiques</a></li>
                  <li><a href="#voyage">Voyage dans les IG</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Démarches & Formalités</h4>
                <ul>
                  <li><a href="#creer">Créer une entreprise</a></li>
                  <li><a href="#modifier">Modifier une entreprise</a></li>
                  <li><a href="#fermer">Fermer une entreprise</a></li>
                  <li><a href="#brevet">Déposer un brevet</a></li>
                  <li><a href="#marque">Déposer une marque</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom-sections">
            <div className="footer-bottom-row">
              <div className="footer-col">
                <h4>Aides</h4>
                <ul>
                  <li><a href="#aide-pi">Aide pour les démarches en PI</a></li>
                  <li><a href="#aide-formalites">Aide pour les formalités d'entreprises</a></li>
                  <li><a href="#faq">Foire aux questions</a></li>
                  <li><a href="#contact">Nous contacter</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Informations</h4>
                <ul>
                  <li><a href="#actualites">Actualités</a></li>
                  <li><a href="#presse">Espace presse</a></li>
                  <li><a href="#evenements">Événements</a></li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>Assistance Cyber en ligne</h4>
                <p className="footer-cyber">
                  Vous êtes victime d'actes de cybermalveillance? Faites votre diagnostic 17CYBER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-legal-links">
            <a href="#donnees">Données personnelles</a>
            <a href="#plan">Plan du site</a>
            <a href="#repertoire">Répertoire des informations publiques</a>
            <a href="#accessibilite">Accessibilité : partiellement conforme</a>
            <a href="#cookies">Cookies</a>
            <a href="#liens">Liens utiles</a>
            <a href="#conditions">Conditions générales d'utilisation</a>
          </div>
          <div className="footer-legal-links-second">
            <a href="#mentions">Mentions légales</a>
            <a href="#gestion-cookies">Gestion des cookies</a>
          </div>
        </div>
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Retour en haut">
          <FiChevronUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
