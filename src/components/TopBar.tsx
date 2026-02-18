import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <p className="welcome-text">★ République de Djibouti — Ministère délégué chargé de l'Économie Numérique et de l'Innovation</p>
        <div className="top-bar-links">
          <a href="#procedures" className="top-link">procedures.sqits.dj ↗</a>
          <Link to="/g2b" className="top-link">g2b.sqits.dj ↗</Link>
          <a href="#cle" className="top-link">CLE Djibouti ↗</a>
          <select className="language-selector">
            <option value="fr">🇫🇷 Français</option>
            <option value="ar">🇸🇦 العربية</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
