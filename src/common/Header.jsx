import { Link, useLocation } from "react-router-dom";
import "./common.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // 현재 페이지 경로 가져오기
  const { pathname } = useLocation();

  // 네비게이션 메뉴 항목들
  const navItems = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "My Work", to: "#work" },
  ];

  // header 태그를 가리키는 ref
  const headerRef = useRef(null);

  // 스크롤하면 헤더 배경색 바뀌는 기능
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return; // header 없으면 종료

    // 프로젝트 상세 페이지면 무조건 어두운 배경
    if (pathname.startsWith("/projects")) {
      header.classList.add("header--dark");
      return;
    }

    // 헤더 높이 구하기
    const headerHeight = header.getBoundingClientRect().height;

    // 스크롤 이벤트 함수
    const handleScroll = () => {
      // 스크롤이 헤더 높이보다 아래면 어두운 배경
      if (window.scrollY > headerHeight) {
        header.classList.add("header--dark");
      } else {
        // 스크롤이 헤더 높이보다 위면 투명 배경
        header.classList.remove("header--dark");
      }
    };

    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트 사라질 때 이벤트 제거
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); // pathname 바뀔 때마다 다시 실행

  // 네비게이션 메뉴를 가리키는 ref
  const navMenuRef = useRef(null);

  // 햄버거 버튼 클릭하면 메뉴 열고 닫기
  const toggleMenu = () => {
    const menu = navMenuRef.current;
    if (!menu) return; // menu 없으면 종료

    // open 클래스 추가/제거 (토글)
    menu.classList.toggle("open");
  };

  return (
    <header className="header" ref={headerRef}>
      {/* 로고 영역 */}
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

      {/* 네비게이션 메뉴 */}
      <nav className="header_nav">
        <ul className="header_menu" ref={navMenuRef}>
          {/* navItems 배열을 돌면서 메뉴 만들기 */}
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

      {/* 햄버거 메뉴 버튼 (모바일에서 보임) */}
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
