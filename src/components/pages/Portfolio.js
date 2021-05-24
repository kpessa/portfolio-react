import '../../css/portfolio.scss';
const { portfolioArray } = require('../../data/portfolioArray');

function Portfolio(props) {
  const workDivs = portfolioArray.map((project, i) => {
    return (
      <a className="work" key={i} id={project.id} href={project.url} target="_blank" rel="noreferrer">
        <h2>{project.title}</h2>
        <img src={project.imgSrc} alt={project.alt} />
        <p>{project.languages}</p>
      </a>
    );
  });

  return (
    <section className="portfolio">
      <h1 id="work" style={{ textAlign: 'center', marginTop: '1rem' }}>
        Portfolio
      </h1>
      <div className="workDivs">{workDivs}</div>
    </section>
  );
}

export default Portfolio;
