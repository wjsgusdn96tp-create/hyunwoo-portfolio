import { Link } from "react-router-dom";
import "./semiProject.css";

const Semiproject = () => {
  return (
    <div className="semi-project-detail-container">
      <h1 className="semi-project-title">세미 프로젝트</h1>

      {/* 1. 대표 이미지 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-project.jpg`}
          alt="대표 이미지"
        />
      </section>

      {/* 2. 기술 스택 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-skill.jpg`}
          alt="기술 스택"
        />
      </section>

      {/* 3. 프로젝트 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-present.jpg`}
          alt="프로젝트 소개"
        />
      </section>

      {/* 4. 주요 기능 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-function.jpg`}
          alt="주요기능"
        />
      </section>

      {/* 5. 역할 분담 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">담당 기능</h2>

        <img
          className="semi-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-oo.jpg`}
          alt="역할 분담"
        />
      </section>

      {/* 6. 지도 기능 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">지도 기능</h2>

        <h4 className="semi-small-title">매장 위치 표시 · 마커 상세정보</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-map.jpg`}
          alt="지도 기능"
        />
        <p className="semi-project-desc">
          네이버 지도 API를 사용하여 매장 위치를 지도에 시각적으로 표시했습니다.
          마커 클릭 시 DB의 매장 정보(주소·이름)를 불러오며, 선택된 정보가
          자동으로 다음 주문 페이지에 전달되도록 연동했습니다.
        </p>
      </section>

      {/* 7. 옵션 선택 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">옵션 선택 기능</h2>

        <h4 className="semi-small-title">음료 / 굿즈 옵션 자동 전환</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-option.jpg`}
          alt="옵션 선택"
        />
        <p className="semi-project-desc">
          샷 추가, 휘핑, 컵 선택 등 다양한 옵션을 적용할 수 있도록 설계했습니다.
          옵션 선택 시 가격이 자동 계산되며, 사용자가 선택을 직관적으로 파악할
          수 있도록 인터페이스를 구성하였습니다.
        </p>
      </section>

      {/* 8. 장바구니 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">장바구니 기능</h2>

        <h4 className="semi-small-title">총 금액 · 할인 · 반올림 자동 계산</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-cart.jpg`}
          alt="장바구니 기능"
        />
        <p className="semi-project-desc">
          장바구니 목록 관리, 선택 삭제, 총 금액/할인/반올림 계산 로직을
          구현했습니다. 멤버십 등급에 따라 자동으로 가격이 조정되는 기능도
          포함했습니다.
        </p>
      </section>

      {/* 9. 구매 내역 */}
      <section className="semi-project-section">
        <h2 className="semi-section-title">구매 내역</h2>

        <h4 className="semi-small-title">로그인 기반 개인화 조회</h4>
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-buy.jpg`}
          alt="구매 내역"
        />
        <p className="semi-project-desc">
          로그인된 사용자 기준으로 본인의 구매 내역만 조회할 수 있도록
          구현했습니다. 주문 번호 · 날짜 · 매장 정보 · 총 금액까지 상세 정보를
          제공해 사용자 편의성을 높였습니다.
        </p>
      </section>

      {/* 뒤로가기 */}
      <div className="semi-back-button-box">
        <Link to="/" className="semi-back-button">
          ← 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default Semiproject;
