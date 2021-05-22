import '../../css/work.css';
import imgVancoAuc from '../../images/vanco-auc.png';
import imgCovidDashboard from '../../images/covid-dashboard.png';

function Portfolio(props) {
  const work = [
    {
      id: 'novid',
      url: 'https://prestongeyer713.github.io/novid/',
      title: 'Novid - Local Restaurant search for COVID',
      imgSrc: 'https://user-images.githubusercontent.com/75324665/107859719-6862d280-6e09-11eb-8b0a-dbfc54e8da06.gif',
      alt: 'screencast of novid web app',
      languages: 'JQuery | Leaflet.js | Axios',
    },
    {
      id: 'vanco-auc',
      url: 'https://github.com/kpessa/vanco-auc',
      title: 'Vancomycin AUC Calculator',
      imgSrc: imgVancoAuc,
      alt: 'image of landing page for vanco auc project',
      languages: 'VBA',
    },
    {
      id: '',
      url: 'https://project-2-covid.herokuapp.com/',
      title: 'COVID-19 Dashboard',
      imgSrc: imgCovidDashboard,
      alt: 'screenshot of covid dashboard app',
      languages: 'Python | Flask | Plotly | D3.js | Leaflet',
    },
  ];

  const workDivs = work.map((project, i) => {
    return (
      <a className="work" key={i} id={project.id} href={project.url} target="_blank" rel="noreferrer">
        <h2>{project.title}</h2>
        <img src={project.imgSrc} alt={project.alt} />
        <p>{project.languages}</p>
      </a>
    );
  });

  return (
    <section>
      <h1 id="work" style={{ textAlign: 'center', marginTop: '1rem' }}>
        Portfolio
      </h1>
      <div className="workDivs">{workDivs}</div>
    </section>
  );
}

export default Portfolio;
