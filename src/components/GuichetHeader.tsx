import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './GuichetHeader.css';

const GuichetHeader = () => {
  return (
    <header className="guichet-header">
      <div className="guichet-header-top">
        <Link to="/" className="guichet-logo">
          <img src="/logo/logo_header.png" alt="MSME Djibouti" className="guichet-logo-image" />
        </Link>
        
        <div className="guichet-header-actions">
          <a href="#" className="guichet-action-btn">
            <img src="https://via.placeholder.com/40" alt="Bot" />
            <span>Puis-je vous accompagner ?</span>
          </a>
          <a href="#aide" className="guichet-link">
            ? AIDE EN LIGNE
          </a>
          <a href="#contact" className="guichet-link">
            📞 NOUS CONTACTER
          </a>
        </div>
      </div>
    </header>
  );
};

export default GuichetHeader;
