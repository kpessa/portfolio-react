import '../css/footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

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

  const icons = iconsArr.map(icon => {
    return (
      <a href={icon.url} target="_blank" key={icon.icon}>
        <FontAwesomeIcon icon={icon.icon} size="2x" />
      </a>
    );
  });

  return (
    <footer>
      <div></div>
      <div>{icons}</div>
      <div>
        <span>Copyright KP&copy; 2021</span>
      </div>
    </footer>
  );
};

export default Footer;
