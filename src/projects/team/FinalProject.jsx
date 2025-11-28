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
        <h2 className="final-section-title">쪽지 기능 (담당: 전현우)</h2>

        <div className="final-my-role">
          <h3 className="final-role-title">담당 역할</h3>
          <p className="final-role-desc">
            쪽지 기능의 프론트엔드와 백엔드를 모두 담당했습니다.
          </p>
          <ul className="final-tech-list">
            <li>
              <strong>프론트엔드:</strong> React, useState를 사용한 모달 상태
              관리, Axios로 API 통신
            </li>
            <li>
              <strong>백엔드:</strong> Spring Boot, MyBatis로 RESTful API 개발
            </li>
            <li>
              <strong>데이터베이스:</strong> Oracle SQL로 쪽지 데이터 관리
            </li>
          </ul>
        </div>

        <div className="final-challenge">
          <h3 className="final-challenge-title">어려웠던 점과 해결 방법</h3>
          <p className="final-challenge-desc">
            <strong>문제:</strong> 쪽지를 삭제할 때 내 보관함에서만 지워지고,
            상대방 쪽에서는 계속 보여야 했습니다.
            <br />
            <strong>해결:</strong> 데이터베이스에서 실제로 삭제하지 않고,
            DEL_SEND와 DEL_RECEIVE 컬럼을 추가해 논리적 삭제를 구현했습니다.
            보낸 사람이 삭제하면 DEL_SEND를 1로 변경하고, 받은 사람이 삭제하면
            DEL_RECEIVE를 1로 변경하여 각자의 보관함에서만 안 보이도록
            처리했습니다.
          </p>
        </div>

        {/* 쪽지 발송 */}
        <h4 className="final-small-title">쪽지 발송 기능</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message1.jpg`}
        />
        <p className="final-project-desc">
          쪽지가 정상적으로 발송되었음을 사용자에게 알려주는 확인 모달입니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Frontend - 쪽지 발송
const sendNote = () => {
  const data = {
    sendId: memberId,        // 보내는 사람 ID
    receiveId: note.noteId,  // 받는 사람 ID
    noteContent: note.noteContent  // 쪽지 내용
  };
  
  axios.post(\`\${backServer}/note\`, data)
    .then((res) => {
      if (res.data === 0) {
        Swal.fire({ title: "자기 자신에게는 쪽지를 보낼 수 없습니다." });
      } else {
        Swal.fire({ title: "쪽지를 보냈습니다.", icon: "success" });
      }
    });
};

// Backend - Controller
@PostMapping
public ResponseEntity<Integer> insertNote(@RequestBody NoteDTO note) {
    int result = noteService.receiveNote(note);
    return ResponseEntity.ok(result);
}`}
          </pre>
        </div>

        {/* 보낸/받은 쪽지 리스트 */}
        <h4 className="final-small-title">보낸 쪽지 리스트</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message2.jpg`}
        />
        <p className="final-project-desc">
          사용자가 지금까지 발송한 모든 쪽지를 날짜, 제목, 상대방 기준으로
          확인할 수 있습니다.
        </p>

        <h4 className="final-small-title">받은 쪽지 리스트</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message3.jpg`}
        />
        <p className="final-project-desc">
          다른 사용자로부터 받은 쪽지를 모아 볼 수 있는 화면입니다. 읽지 않은
          쪽지는 배경색을 다르게 처리해 강조했습니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Backend - 받은 쪽지 조회
@GetMapping("/received/{memberId}")
public ResponseEntity<List<NoteDTO>> receiveList(
    @PathVariable String memberId) {
    List<NoteDTO> list = noteService.receiveList(memberId);
    return ResponseEntity.ok(list);
}

// MyBatis - SQL
<select id="selectReceivedNotes" resultType="note">
  SELECT note_no, note_content, note_content_read,
         to_char(note_date, 'YYYY-MM-DD HH24:MI:SS') as noteDate,
         send_id
  FROM note_tbl
  WHERE receive_id = #{memberId} AND del_receive = 0
  ORDER BY note_date DESC
</select>`}
          </pre>
        </div>

        {/* 쪽지 삭제 */}
        <h4 className="final-small-title">쪽지 삭제 기능 (논리적 삭제)</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message4.jpg`}
        />
        <p className="final-project-desc">
          선택된 쪽지 삭제가 완료되었음을 안내하는 모달입니다. 논리적 삭제를
          통해 상대방 쪽지함에는 영향을 주지 않습니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Frontend - 논리적 삭제
const deleteNotes = () => {
  // 받은함에서 삭제 → receive 컬럼 업데이트
  // 보낸함에서 삭제 → send 컬럼 업데이트
  const deleteType = selectMenu === "send" ? "receive" : "send";
  
  axios.patch(
    \`\${backServer}/note/update?deleteType=\${deleteType}\`,
    selectNoteNos
  )
  .then((res) => {
    Swal.fire({ title: "삭제 완료", icon: "success" });
    menuClick(selectMenu);
  });
};

// MyBatis - 논리적 삭제 SQL
<update id="sendUpdateList">
  UPDATE note_tbl SET del_send = 1
  WHERE note_no IN
    <foreach collection="selectNoteNos" item="send" 
             open="(" close=")" separator=",">
      #{send.noteNos}
    </foreach>
</update>`}
          </pre>
        </div>

        {/* 쪽지 상세 조회 */}
        <h4 className="final-small-title">쪽지 상세 조회</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-message5.jpg`}
        />
        <p className="final-project-desc">
          쪽지의 전체 내용을 확인할 수 있는 화면입니다. 클릭 시 해당 쪽지의 읽음
          상태를 업데이트합니다.
        </p>
      </section>

      {/* 7. 투표 기능 */}
      <section className="final-project-section">
        <h2 className="final-section-title">투표 게시판 기능 (담당: 전현우)</h2>

        <div className="final-my-role">
          <h3 className="final-role-title">담당 역할</h3>
          <p className="final-role-desc">
            투표 게시판의 프론트엔드와 백엔드를 모두 담당했습니다.
          </p>
          <ul className="final-tech-list">
            <li>
              <strong>프론트엔드:</strong> React, Chart.js를 사용한 투표 결과
              그래프 시각화
            </li>
            <li>
              <strong>백엔드:</strong> Spring Boot로 투표 생성, 참여, 결과 조회
              API 개발
            </li>
            <li>
              <strong>데이터베이스:</strong> Oracle SQL로 투표 데이터 및 선택지
              관리
            </li>
          </ul>
        </div>

        <div className="final-challenge">
          <h3 className="final-challenge-title">어려웠던 점과 해결 방법</h3>
          <p className="final-challenge-desc">
            <strong>문제:</strong> Chart.js 라이브러리를 처음 사용해서 투표 결과
            데이터를 그래프에 연결하는 것이 어려웠습니다.
            <br />
            <strong>해결:</strong> Chart.js 공식 문서를 참고하여 데이터 형식을
            맞추고, 투표 결과를 labels 배열과 values 배열로 변환하여
            해결했습니다. 또한 모든 투표가 0표일 때도 그래프가 보이도록 임시
            데이터를 추가하는 로직을 구현했습니다.
          </p>
        </div>

        {/* 투표 생성 */}
        <h4 className="final-small-title">투표 생성</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote1.jpg`}
        />
        <p className="final-project-desc">
          사용자가 제목과 선택지를 입력하여 새 투표를 생성할 수 있는
          페이지입니다. 입력값 검증을 통해 빈 값이 제출되지 않도록 처리했습니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Frontend - 투표 생성
const insertSubmit = () => {
  const voteData = {
    memberNo: memberNo,
    voteTitle: voteTitle,
    voteContent: voteList,        // 선택지 배열
    voteEndDate: endDate + endTime
  };

  axios.post(\`\${backServer}/vote\`, voteData)
    .then((res) => {
      Swal.fire({ title: "투표가 생성되었습니다.", icon: "success" });
      navigate("/vote/list");
    });
};

// Backend Service - 트랜잭션 처리
@Transactional
public int insertVote(VoteDTO vote) {
    int voteNo = voteDao.getVoteNo();
    vote.setVoteNo(voteNo);
    int result = voteDao.insertVote(vote);
    
    // 선택지들을 반복하며 저장
    for(int i = 0; i < vote.getVoteContent().size(); i++) {
        VoteOption option = new VoteOption();
        option.setVoteNo(voteNo);
        option.setVoteContent(vote.getVoteContent().get(i));
        result += voteDao.insertContent(option);
    }
    return result;
}`}
          </pre>
        </div>

        {/* 투표 목록 */}
        <h4 className="final-small-title">투표 목록</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote2.jpg`}
        />
        <p className="final-project-desc">
          전체 투표글을 목록으로 보여주며, 투표 종료 여부와 생성 날짜 등을 쉽게
          확인할 수 있습니다. 페이징 처리로 한 페이지에 15개씩 보여줍니다.
        </p>

        {/* 투표 참여 */}
        <h4 className="final-small-title">투표 참여</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote3.jpg`}
        />
        <p className="final-project-desc">
          투표 제목과 선택지를 확인한 뒤 직접 투표에 참여할 수 있습니다. 재투표
          기능을 통해 투표를 변경할 수 있도록 했습니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Frontend - 투표 및 재투표
const voteResult = () => {
  const resultData = {
    voteNo: vote.voteNo,
    memberNo: memberNo,
    voteOptionNo: selectedOption
  };

  if (defaultCheck === undefined) {
    // 최초 투표 (INSERT)
    axios.post(\`\${backServer}/vote/result\`, resultData)
      .then((res) => {
        Swal.fire({ title: "투표 완료", icon: "success" });
      });
  } else {
    // 재투표 (UPDATE)
    axios.patch(\`\${backServer}/vote/reVote\`, resultData)
      .then((res) => {
        Swal.fire({ title: "재투표 완료", icon: "success" });
      });
  }
};

// MyBatis - 재투표 SQL
<update id="reVote">
  UPDATE vote_result_tbl
  SET vote_option_no = #{voteOptionNo}
  WHERE vote_no = #{voteNo} AND member_no = #{memberNo}
</update>`}
          </pre>
        </div>

        {/* 투표 결과 분석 */}
        <h4 className="final-small-title">투표 결과 분석</h4>
        <img
          className="final-project-sub-image"
          src={`${import.meta.env.BASE_URL}profile_images/final-vote4.jpg`}
        />
        <p className="final-project-desc">
          투표 종료 후 선택지별 득표수를 원형 그래프로 시각화하여 한눈에 이해할
          수 있도록 제공합니다. Chart.js의 datalabels 플러그인을 사용하여
          퍼센트를 표시했습니다.
        </p>

        <div className="final-crud-box">
          <h4 className="final-code-label">핵심 코드</h4>
          <pre className="final-code-block">
            {`// Frontend - Chart.js 그래프
const data = {
  labels: labels,  // 선택지 이름들
  datasets: [{
    data: values,  // 득표수들
    backgroundColor: [
      "#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF"
    ]
  }]
};

<Pie
  data={data}
  options={{
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data
            .reduce((sum, v) => sum + v, 0);
          const percent = ((value / total) * 100).toFixed(1);
          return \`\${percent}%\`;
        }
      }
    }
  }}
/>`}
          </pre>
        </div>
      </section>

      {/* GitHub 링크 - Link 컴포넌트로 수정 */}
      <section className="final-project-section">
        <div className="final-github-box">
          <h3 className="final-github-title">프로젝트 코드 보기</h3>
          <button
            onClick={() =>
              window.open(
                "https://github.com/seojm0629/final_project",
                "_blank"
              )
            }
            className="final-github-link"
          >
            GitHub 저장소 바로가기 →
          </button>
        </div>
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
