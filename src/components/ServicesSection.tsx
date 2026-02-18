import { useState } from 'react';
import './ServicesSection.css';

interface ServiceCard {
  title: string;
  description: string;
  duration?: string;
  requirements?: string;
  status?: string;
  badge?: string;
  link: string;
  linkText: string;
}

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<'mpme' | 'prestataires' | 'administration'>('mpme');

  const servicesMPME: ServiceCard[] = [
    {
      title: "Label Startup CLE",
      description: "Obtenez votre label officiel de startup auprès du Centre de Leadership et d'Entrepreneuriat. Ce label vous permet d'accéder à des avantages fiscaux, des formations spécialisées et un accompagnement personnalisé pour développer votre entreprise innovante.",
      badge: "En ligne",
      link: '#label-startup',
      linkText: 'Découvrir',
    },
    {
      title: 'Programme MSMES 2025',
      description: "Programme de financement et d'accompagnement pour les MPME en partenariat avec la Banque Mondiale et le CLE Djibouti. Bénéficiez d'un soutien financier pouvant aller jusqu'à 2 millions de FDJ et d'un coaching adapté à vos besoins.",
      badge: "Nouveau",
      link: '#programme-msmes',
      linkText: 'Découvrir',
    },
    {
      title: 'Mise en relation Mentor',
      description: "Accédez à notre réseau de 127 mentors agréés par le CLE pour vous accompagner dans le développement de votre entreprise. Bénéficiez de l'expérience et des conseils d'experts dans votre domaine d'activité.",
      badge: "En ligne",
      link: '#mentor',
      linkText: 'Découvrir',
    },
    {
      title: 'Formation gestion financière PME',
      description: "Formation pratique de 2 jours dispensée par l'Institut de Formation Professionnelle pour maîtriser les bases de la gestion financière, la comptabilité et les outils de pilotage financier adaptés aux PME.",
      badge: "En ligne",
      link: '#formation-gestion',
      linkText: 'Découvrir',
    },
  ];

  const servicesPrestataires: ServiceCard[] = [
    {
      title: "Attestation de conformité fiscale",
      description: "Obtenez votre attestation de conformité fiscale auprès de la Direction des Impôts de Djibouti. Document indispensable pour participer aux appels d'offres publics et prouver votre situation fiscale régulière.",
      badge: "Documents",
      link: '#conformite-fiscale',
      linkText: 'Découvrir',
    },
    {
      title: 'Label Export & Commerce international',
      description: "Certification officielle délivrée par la Chambre de Commerce de Djibouti pour les entreprises souhaitant développer leurs activités à l'export. Un audit préalable est requis pour évaluer votre capacité à exporter.",
      badge: "Nouveau",
      link: '#label-export',
      linkText: 'Découvrir',
    },
  ];

  const servicesAdministration: ServiceCard[] = [
    {
      title: "Les documents justifiant l'existence d'une entreprise",
      description: "Il est désormais possible d'obtenir une attestation d'immatriculation au Registre national des entreprises (RNE), un autre document prouvant l'immatriculation de votre entreprise que l'extrait Kbis.",
      link: '#documents',
      linkText: 'En savoir plus',
    },
    {
      title: 'Prédiagnostic PI',
      description: "Le Prédiagnostic PI de MSME est un accompagnement pour aider les entreprises à comprendre l'importance de la propriété intellectuelle dans leur stratégie globale. Ce programme est destiné aux entrepreneurs qui souhaitent développer leur activité...",
      link: '#prediagnostic',
      linkText: 'Découvrir',
    },
  ];

  return (
    <section className="services-section-tabs" id="services">
      <div className="container">
        <h2 className="services-heading">
          <span className="services-prefix">_</span>Nos <span className="services-highlight">services</span>
        </h2>
        
        <div className="services-tabs">
          <button
            className={`tab-button ${activeTab === 'mpme' ? 'active' : ''}`}
            onClick={() => setActiveTab('mpme')}
          >
            MPME & Startups
          </button>
          <button
            className={`tab-button ${activeTab === 'prestataires' ? 'active' : ''}`}
            onClick={() => setActiveTab('prestataires')}
          >
            Prestataires & Experts
          </button>
          <button
            className={`tab-button ${activeTab === 'administration' ? 'active' : ''}`}
            onClick={() => setActiveTab('administration')}
          >
            Administration & Partenaires
          </button>
        </div>

        <div className="services-tab-content">
          <div className="services-cards-grid">
            {activeTab === 'mpme' && servicesMPME.map((service, index) => (
              <div key={index} className="services-card">
                {service.badge && <div className="service-badge">{service.badge}</div>}
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-description">{service.description}</p>
                <a href={service.link} className="services-card-link">
                  {service.linkText} →
                </a>
              </div>
            ))}
            {activeTab === 'prestataires' && servicesPrestataires.map((service, index) => (
              <div key={index} className="services-card">
                {service.badge && <div className="service-badge">{service.badge}</div>}
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-description">{service.description}</p>
                <a href={service.link} className="services-card-link">
                  {service.linkText} →
                </a>
              </div>
            ))}
            {activeTab === 'administration' && servicesAdministration.map((service, index) => (
              <div key={index} className="services-card">
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-description">{service.description}</p>
                <a href={service.link} className="services-card-link">
                  {service.linkText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
