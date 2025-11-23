import { Link } from "react-router-dom";
import "./finalProject.css";

const FinalProject = () => {
  return (
    <div className="final-project-detail-container">
      <h1 className="final-project-title">파이널 프로젝트</h1>

      {/* 1. 대표 이미지 */}
      <section className="final-project-section">
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-project.jpg`}
          alt="파이널 프로젝트 대표 이미지"
        />
      </section>

      {/* 2. 기술 스택 */}
      <section className="final-project-section">
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-skill.jpg`}
          alt="기술 스택"
        />
      </section>

      {/* 3. 프로젝트 소개 */}
      <section className="final-project-section">
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-03.jpg`}
          alt="프로젝트 소개"
        />
        <p className="final-project-desc">여기에 파이널 프로젝트 소개글</p>
      </section>

      {/* 4. 주요 기능 소개 */}
      <section className="final-project-section">
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-04.jpg`}
          alt="주요 기능"
        />
        <p className="final-project-desc">여기에 주요 기능 설명</p>
      </section>

      {/* 5. 역할 분담 */}
      <section className="final-project-section">
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-05.jpg`}
          alt="역할 분담"
        />
        <p className="final-project-desc">여기에 역할 설명</p>
      </section>

      {/* 뒤로가기 */}
      <div className="final-back-button-box">
        <Link to="/" className="final-back-button">
          ← 메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
};

export default FinalProject;
