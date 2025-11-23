import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // 현재 주소(pathname)를 가져온다.
  // 예: "/", "/projects/team/semi"
  const { pathname } = useLocation();

  useEffect(() => {
    // pathname이 바뀔 때마다 실행됨
    // 즉, 다른 페이지로 이동할 때마다 발동함

    // window.scrollTo(0,0)
    // → 화면 맨 위(0)로 스크롤을 강제로 이동시키는 명령
    window.scrollTo(0, 0);
  }, [pathname]);
  //  의존성 배열 [pathname]
  // → pathname(주소)이 바뀔 때마다 useEffect 내부 코드가 실행됨

  return null; // 렌더링할 UI는 없음 (기능만 하는 컴포넌트)
};

export default ScrollToTop;
