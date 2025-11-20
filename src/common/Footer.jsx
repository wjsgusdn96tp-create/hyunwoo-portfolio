import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="section">
      <div className="max-container">
        <h2 className="title">푸터 자리</h2>
        <p className="description">wjsgusdn1tp@gmail.com</p>
        <ul className="contact_links">
          <li>
            <Link to="" className="contact_link">
              깃허브
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
