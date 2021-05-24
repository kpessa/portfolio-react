import '../../css/resume.scss';
import resumePNG from '../../images/resume.png';
import resumePDF from '../../images/resume.pdf';
import { faFilePdf } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Resume(props) {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <a className="resume-pdf" href={resumePDF}>
        <FontAwesomeIcon icon={faFilePdf} className="resume-icon" size="2x" />
        <p className="resume-p">pdf</p>
      </a>
      <img className="resume-img" src={resumePNG} alt="screenshot of resume" />
    </div>
  );
}

export default Resume;
