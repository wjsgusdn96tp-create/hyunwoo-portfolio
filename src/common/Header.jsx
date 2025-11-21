import { Link } from "react-router-dom";
import "./common.css";
import { useEffect, useRef } from "react";
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
    console.log(headerHeight);

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

  return (
    <header className="header" ref={headerRef}>
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
      <nav className="header_nav">
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
