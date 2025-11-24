import { Link } from "react-router-dom";
import "./finalProject.css";

const FinalProject = () => {
  return (
    <div className="final-project-detail-container">
      <h1 className="final-project-title">파이널 프로젝트</h1>

      {/* 1. 대표 이미지 */}
      <section className="final-project-section">
        <img
          className="final-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-project.jpg`}
          alt="대표 이미지"
        />
      </section>

      {/* 2. 기술 스택 */}
      <section className="final-project-section">
        <img
          className="final-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-skill.jpg`}
          alt="기술 스택"
        />
      </section>

      {/* 3. 프로젝트 소개 */}
      <section className="final-project-section">
        <img
          className="final-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-present.jpg`}
          alt="프로젝트 소개"
        />
      </section>

      {/* 4. 역할 분담 */}
      <section className="final-project-section">
        <img
          className="final-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-role.jpg`}
          alt="역할 분담"
        />
      </section>

      {/* 5. 주요 기능 소개 */}
      <section className="final-project-section">
        <img
          className="final-top-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-function.jpg`}
          alt="주요 기능"
        />
      </section>

      {/* 6. 쪽지 기능 */}
      <section className="final-project-section">
        <h2 className="final-section-title">쪽지 기능</h2>
        <p className="final-project-p">
          쪽지의 모든 기능은 모달 기반으로 구성되어 있습니다.
        </p>

        <h4 className="final-small-title">쪽지 발송 성공 모달</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message1.jpg`}
        />
        <p className="final-project-desc">
          쪽지가 정상적으로 발송되었음을 사용자에게 알려주는 확인 모달입니다.
          사용자는 모달을 통해 발송 여부를 즉시 확인할 수 있습니다.
        </p>

        <h4 className="final-small-title">보낸 쪽지 리스트</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message2.jpg`}
        />
        <p className="final-project-desc">
          사용자가 지금까지 발송한 모든 쪽지를 날짜, 제목, 상대방 기준으로
          확인할 수 있습니다. 필요한 경우 상세 내용을 볼 수 있습니다.
        </p>

        <h4 className="final-small-title">받은 쪽지 리스트</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message3.jpg`}
        />
        <p className="final-project-desc">
          다른 사용자로부터 받은 쪽지를 모아 볼 수 있는 화면입니다. 새로운
          쪽지는 강조 표기되어 한눈에 구분이 가능합니다.
        </p>

        <h4 className="final-small-title">쪽지 삭제 완료 모달</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message4.jpg`}
        />
        <p className="final-project-desc">
          선택된 쪽지 삭제가 완료되었음을 안내하는 모달입니다. 실수로 삭제하지
          않도록 한 번 더 확인 절차를 제공합니다.
        </p>

        <h4 className="final-small-title">쪽지 상세 조회</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message5.jpg`}
        />
        <p className="final-project-desc">
          쪽지의 전체 내용을 확인할 수 있는 화면으로, 발신자, 수신자, 보낸 시간,
          내용을 한 화면에서 확인할 수 있습니다.
        </p>
      </section>

      {/* 7. 투표 기능 */}
      <section className="final-project-section">
        <h2 className="final-section-title">투표 게시판 기능</h2>

        <h4 className="final-small-title">투표 생성</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote1.jpg`}
        />
        <p className="final-project-desc">
          사용자가 제목과 선택지를 입력하여 새 투표를 생성할 수 있는
          페이지입니다.
        </p>

        <h4 className="final-small-title">투표 목록</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote2.jpg`}
        />
        <p className="final-project-desc">
          전체 투표글을 목록으로 보여주며, 투표 종료 여부와 생성 날짜 등을 쉽게
          확인할 수 있습니다.
        </p>

        <h4 className="final-small-title">투표 참여</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote3.jpg`}
        />
        <p className="final-project-desc">
          투표 제목과 선택지를 확인한 뒤 직접 투표에 참여할 수 있으며, 남은 투표
          시간도 제공됩니다.
        </p>

        <h4 className="final-small-title">투표 결과 분석</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote4.jpg`}
        />
        <p className="final-project-desc">
          투표 종료 후 선택지별 득표수를 원형 그래프로 시각화하여 한눈에 이해할
          수 있도록 제공합니다.
        </p>
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
