import '../css/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const iconsArr = [
    {
      url: 'https://www.facebook.com/kurt.pessa',
      icon: faFacebookSquare,
    },
    {
      url: 'https://www.instagram.com/kpessa/',
      icon: faInstagram,
    },
    {
      url: 'https://www.linkedin.com/in/kurtpessa/',
      icon: faLinkedin,
    },
    {
      url: 'https://github.com/kpessa',
      icon: faGithub,
    },
  ];

  const icons = iconsArr.map((icon, i) => {
    return (
      <a href={icon.url} target="_blank" rel="noreferrer" key={`a${i}`}>
        <FontAwesomeIcon icon={icon.icon} size="2x" key={`icon${i}`} />
      </a>
    );
  });

  return (
    <footer style={{ marginTop: 'auto' }}>
      <div></div>
      <div>{icons}</div>
      <div>
        <span>Copyright KP&copy; 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
