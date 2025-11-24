import { Link } from "react-router-dom";
import "./semiProject.css";

const Semiproject = () => {
  return (
    <div className="semi-project-detail-container">
      <h1 className="semi-project-title">새미 프로젝트</h1>

      {/* 1. 대표 이미지 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-project.jpg`}
          alt="세미 프로젝트"
        />
      </section>

      {/* 2. 기술 스택 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-skill.jpg`}
          alt="기술 스택"
        />
      </section>

      {/* 3. 프로젝트 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-present.jpg`}
          alt="프로젝트 소개"
        />
      </section>

      {/* 4. 주요 기능 소개 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-function.jpg`}
          alt="주요기능"
        />
      </section>

      {/* 5. 역할 분담 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-oo.jpg`}
          alt="역할 분담"
        />
        <p className="semi-project-desc">
          저는 주문하기(지도 API 선택 → 옵션 선택 → 장바구니 → 결제)를
          담당했습니다. 사용자 경험이 끊기지 않도록 흐름을 세심하게
          설계하였습니다.
        </p>
      </section>

      {/* 6. 지도 기능 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-map.jpg`}
          alt="지도 기능"
        />
        <p className="semi-project-desc">
          네이버 지도 API를 이용해 매장 위치 표시·마커 기능 구현. 마커 클릭 시
          DB에 저장된 매장 주소/이름을 자동 연동하여 다음 페이지로 전달했습니다.
        </p>
      </section>

      {/* 7. 옵션 선택창 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-option.jpg`}
          alt="옵션 선택창"
        />
        <p className="semi-project-desc">
          음료/굿즈를 구분하여 옵션창 자동 변경. 옵션(샷, 휘핑, 컵 등) 선택 시
          가격 실시간 반영되도록 구성했습니다.
        </p>
      </section>

      {/* 8. 장바구니 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-cart.jpg`}
          alt="장바구니 기능"
        />
        <p className="semi-project-desc">
          선택 삭제 / 전체 금액 / 할인 금액 / 반올림 처리 등을 구현했습니다.
          멤버십 등급에 따른 자동 할인 기능도 포함되어 있습니다.
        </p>
      </section>

      {/* 9. 구매내역 */}
      <section className="semi-project-section">
        <img
          className="semi-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/semi-buy.jpg`}
          alt="구매 내역"
        />
        <p className="semi-project-desc">
          로그인한 사용자 기준으로 본인의 구매 내역만 조회되도록 구현했습니다.
          주문번호·날짜·매장 정보 등 상세 정보까지 확인 가능합니다.
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
