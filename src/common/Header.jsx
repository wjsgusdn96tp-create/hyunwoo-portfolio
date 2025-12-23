import { Link, useLocation } from "react-router-dom";
import "./common.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "홈", to: "#home" },
    { name: "개발자가 된 이유", to: "#why-developer" },
    { name: "학습 과정", to: "#journey" },
    { name: "소개", to: "#about" },
    { name: "기술 스택", to: "#skills" },
    { name: "문제 해결", to: "#problem-solving" },
    { name: "목표", to: "#goals" },
    { name: "프로젝트", to: "#work" },
  ];

  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    if (pathname.startsWith("/projects")) {
      header.classList.add("header--dark");
      return;
    }

    const headerHeight = header.getBoundingClientRect().height;

    const handleScroll = () => {
      if (window.scrollY > headerHeight) {
        header.classList.add("header--dark");
      } else {
        header.classList.remove("header--dark");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    const menu = navMenuRef.current;
    if (!menu) return;

    menu.classList.toggle("open");
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="header_logo">
        <img
          className="header_logo_img"
          src={`${
            import.meta.env.BASE_URL
          }profile_images/poteupollio-modified.jpg`}
        />
        <h1 className="header_logo_title">
          <a href="/hyunwoo-portfolio/#home">HyunWoo</a>
        </h1>
      </div>

      <nav className="header_nav">
        <ul className="header_menu" ref={navMenuRef}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                className="header_menu_item"
                href={`/hyunwoo-portfolio/${item.to}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className="header_toggle"
        aria-label="navigation menu toggle"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
