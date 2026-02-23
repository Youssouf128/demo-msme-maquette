import './NewsSection.css';

interface NewsItem {
  title: string;
  description: string;
  category: string;
  theme: string;
  image: string;
  link: string;
}

const NewsSection = () => {
  const news: NewsItem[] = [
    {
      title: 'Chiffres clés MSME 2025',
      description: "Chiffres clés de la propriété industrielle à Djibouti. En 2025, avec 16 807 dépôts et après plusieurs années de stabilisation, les brevets dépassent le niveau d'avant pandémie.",
      category: 'Nationale',
      theme: 'Propriété intellectuelle',
      image: '/images/1.png',
      link: '#chiffres-cles',
    },
    {
      title: 'Concours « Innovez » avec Science & Vie',
      description: "De jeunes esprits créatifs ont été accompagnés lors de la Journée des Inventeurs organisée par Science & Vie Junior. Ces innovations portées par des 10-16 ans témoignent d'une génération inventive.",
      category: 'Nationale',
      theme: 'Propriété intellectuelle',
      image: '/images/2.png',
      link: '#concours',
    },
    {
      title: 'Djibouti – République de Corée',
      description: "Le nouveau Ministère coréen de la propriété intellectuelle a réaffirmé sa coopération structurée autour de l'intelligence artificielle, des indications géographiques et de la défense des droits de propriété intellectuelle.",
      category: 'Internationale',
      theme: 'Propriété intellectuelle',
      image: '/images/3.png',
      link: '#coree',
    },
    {
      title: "Actualités des Chambres de recours de l'EUIPO",
      description: "Les Chambres de recours de l'EUIPO et l'APRAM ont organisé une conférence consacrée à l'actualité et aux dernières évolutions jurisprudentielles en matière de marques.",
      category: 'Internationale',
      theme: 'Propriété intellectuelle',
      image: '/images/4.jpg',
      link: '#euipo',
    },
  ];

  return (
    <section className="news-section" id="actualites">
      <div className="container">
        <h2 className="news-heading">
          <span className="news-prefix">_</span>Nos <span className="news-highlight">actualités</span>
        </h2>
        <div className="news-grid">
          {news.map((item, index) => (
            <article key={index} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="news-content">
                <div className="news-tags">
                  <span className="news-tag">{item.category}</span>
                  <span className="news-tag">{item.theme}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                <p className="news-description">{item.description}</p>
                <a href={item.link} className="news-link">
                  Lire la suite →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="news-pagination">
          <button className="pagination-btn">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
        </div>
        <div className="news-cta">
          <a href="#all-news" className="cta-button">Voir toutes les actualités</a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
