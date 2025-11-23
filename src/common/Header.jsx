import { Link, useLocation } from "react-router-dom";
import "./common.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { pathname } = useLocation();
  // 네비게이션 항목
  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "My Work", to: "work" },
  ];

  // header DOM을 직접 가리키기 위한 "ref" 만들기
  const headerRef = useRef(null);

  // 스크롤 할때 header에 header--dark 클래스를 붙이기 때기 기능
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    // ✔ 상세 페이지에서는 항상 dark 적용되게 하기
    if (pathname.startsWith("/projects")) {
      header.classList.add("header--dark");
      return; // 더 이상 아래 스크롤 이벤트 처리 안 함
    }

    // ✔ 메인 화면에서는 스크롤에 따라 dark 적용
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

  // navbar 메뉴 DOM을 가리키는 ref (토글용)
  const navMenuRef = useRef(null);
  // 토글 버튼 클릭 시 메뉴에 'open' 클래스 붙였다/떼기
  const handleToggleClick = () => {
    const menu = navMenuRef.current;
    if (!menu) return;
    menu.classList.toggle("open");
  };

  // 메뉴 항목 클릭 시: 해당 섹션으로 스크롤 + 메뉴 닫기
  const handleNavClick = (event, targetId) => {
    event.preventDefault();

    // 상세 페이지(= 메인이 아닌 모든 페이지)
    if (pathname !== "/") {
      window.location.assign(`/#${targetId}`);
      return;
    }

    // 메인 페이지에 있을 때 → 스크롤 이동
    const menu = navMenuRef.current;
    if (menu) menu.classList.remove("open");

    const selector = `#${targetId}`;
    const section = document.querySelector(selector);

    if (!section) return;

    const top = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
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
          <Link to="/" onClick={(e) => handleNavClick(e, "home")}>
            HyunWoo
          </Link>
        </h1>
      </div>
      <nav className="header_nav">
        <ul className="header_menu" ref={navMenuRef}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                className="header_menu_item"
                to="/"
                onClick={(e) => handleNavClick(e, item.to)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="header_toggle"
        aria-label="navigation menu toggle"
        onClick={handleToggleClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
