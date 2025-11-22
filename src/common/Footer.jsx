import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="section">
      <div className="max-container">
        <h2 className="title">Contact Me</h2>
        <p className="description">wjsgusdn1tp@gmail.com</p>
        <p className="description">wjsgusdn1tp@naver.com</p>
        <ul className="contact_links">
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <Link
              to="https://wjsgusdn96tp-create.github.io/hyunwoo-portfolio/"
              className="contact_link"
            >
              https://wjsgusdn96tp-create.github.io/hyunwoo-portfolio/
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
