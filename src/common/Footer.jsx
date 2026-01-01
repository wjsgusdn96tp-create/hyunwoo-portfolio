import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id="contact" className="section">
      <div className="max-container">
        <h2 className="title">Contact Me</h2>
        <ul className="contact_links">
          <li>
            <a
              href="https://github.com/wjsgusdn96tp-create"
              className="contact_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
        <div className="contact_emails">
          <p>wjsgusdn1tp@gmail.com</p>
          <p>wjsgusdn1tp@naver.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
