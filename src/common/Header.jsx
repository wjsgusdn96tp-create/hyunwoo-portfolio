import { Link } from "react-router-dom";
import "./common.css";
const Header = () => {
  // 네비게이션 항목
  const navItems = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "My Work", to: "#work" },
  ];

  return (
    <header className="header">
      <div className="header_logo">
        <img
          className="header_logo_img"
          src="/profile_images/poteupollio-modified.jpg"
        />
        <h1 className="header_logo_title">
          <Link to="#home" onClick={() => handleNavClick("home")}>
            HyunWoo
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="header_menu">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                className="header_menu_item"
                to={item.to}
                onClick={() =>
                  handleNavClick(item.name.toLowerCase().replace(" ", ""))
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
