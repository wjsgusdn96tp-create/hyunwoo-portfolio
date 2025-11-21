import { Link } from "react-router-dom";
import "./common.css";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  // 네비게이션 항목
  const navItems = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Skills", to: "#skills" },
    { name: "My Work", to: "#work" },
  ];

  // header DOM을 직접 가리키기 위한 "ref" 만들기
  const headerRef = useRef(null);

  // 스크롤 할때 header에 header--dark 클래스를 붙이기 때기 기능
  useEffect(() => {
    // headerRef.current = 실제 헤더 DOM 요소
    const header = headerRef.current;

    // 만약 ref가 아직 연결 안 됐으면 종료
    if (!header) return;

    // header의 실제 높이를 가져오기 → 스크롤 기준점
    const headerHeight = header.getBoundingClientRect().height;

    const handleScroll = () => {
      //window.scrollY = 지금 얼마나 아래로 내려왔는지(px)
      if (window.scrollY > headerHeight) {
        // 기준보다 더 내려왔으면 → 어두운 모드 ON
        header.classList.add("header--dark");
      } else {
        // 다시 위로 올라가면 → 어두운 모드 OFF
        header.classList.remove("header--dark");
      }
    };
    // 스크롤 이벤트 등록
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트가 사라질 때 이벤트 제거 (메모리 누수 방지)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    // Link가 원래 하던 기본 동작(주소창에 #home 붙이고, 브라우저가 바로 점프하는 동작)을 막는다.
    // 이렇게 막아야 우리가 직접 스크롤 위치를 계산해서 부드럽게 이동시킬 수 있다.
    event.preventDefault();

    // 현재 열린 메뉴(ul.header_menu)를 가져온다.
    // navMenuRef는 <ul className="header_menu" ref={navMenuRef}> 에 연결되어 있다.
    const menu = navMenuRef.current;

    // 메뉴 DOM이 제대로 연결되어 있다면
    if (menu) {
      // 'open' 클래스를 제거해서 메뉴를 닫는다.
      // 모바일 화면에서 햄버거 메뉴를 눌러서 열어놨던 것을 다시 닫는 역할이다.
      menu.classList.remove("open");
    }

    // 이동할 섹션의 id 문자열을 만든다.
    // targetId 값이 "#home" 처럼 #으로 시작하면 그대로 쓰고,
    // "home" 처럼 #이 없으면 앞에 #을 붙여서 "#home" 형태로 만든다.
    const selector = targetId.startsWith("#") ? targetId : `#${targetId}`;

    // document.querySelector 로 해당 id를 가진 섹션 DOM을 찾는다.
    // 예: selector가 "#home"이면 <section id="home"> 를 찾게 된다.
    const section = document.querySelector(selector);

    // 해당 id를 가진 섹션이 없으면 (null이면) 그냥 함수 종료한다. 더 이상 할 일이 없다.
    if (!section) return;

    // 섹션의 현재 화면에서의 위치 정보를 가져온다.
    // getBoundingClientRect().top 은 "현재 화면의 맨 위에서 섹션까지의 거리(px)"를 의미한다.
    const top = section.getBoundingClientRect().top + window.scrollY;
    // window.scrollY 를 더해주는 이유:
    // - getBoundingClientRect().top 은 화면 기준(뷰포트 기준) 거리이고
    // - window.scrollY 는 문서 전체의 스크롤 위치이기 때문에
    // 둘을 합치면 "문서 맨 위에서 섹션까지의 실제 거리"가 된다.

    // 계산한 top 위치로 부드럽게 스크롤 이동한다.
    // behavior: "smooth" 를 주면 천천히 스르르 내려가는 효과가 난다.
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
          src="/profile_images/poteupollio-modified.jpg"
        />
        <h1 className="header_logo_title">
          <Link to="#home" onClick={(e) => handleNavClick(e, "#home")}>
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
                to={item.to}
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
