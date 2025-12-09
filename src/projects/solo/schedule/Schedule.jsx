import "./schedule.css";
import { Calendar, momentLocalizer } from "react-big-calendar"; // 캘린더 라이브러리
import moment from "moment"; // 날짜 처리 라이브러리
import "moment/locale/ko"; // moment 한국어 설정
import "react-big-calendar/lib/css/react-big-calendar.css"; // 캘린더 기본 CSS
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // 예쁜 알림창 라이브러리

const Schedule = () => {
  // 환경변수에서 백엔드 서버 주소 가져오기
  const SERVER_HOST = import.meta.env.VITE_BACK_SERVER;

  // moment 한국어 설정 (요일을 한글로 표시)
  moment.updateLocale("ko", {
    weekdaysShort: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
    weekdays: [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ],
  });

  // moment를 캘린더에서 사용할 수 있도록 localizer 생성
  const localizer = momentLocalizer(moment);

  // 캘린더에 표시할 일정 목록 상태
  const [scheduleList, setScheduleList] = useState([]);

  // 컴포넌트가 처음 로드될 때 DB에서 일정 목록 가져오기
  useEffect(() => {
    axios
      .get(SERVER_HOST + "/schedule/list") // 백엔드에 GET 요청
      .then((res) => {
        // DB에서 받은 데이터를 캘린더가 이해할 수 있는 형식으로 변환
        const list = res.data.map((item) => ({
          title: item.scheduleTitle, // 제목
          start: new Date(item.scheduleDate + " " + item.startTime), // 시작 시간
          end: new Date(item.scheduleDate + " " + item.endTime), // 종료 시간
          scheduleNo: item.scheduleNo, // 일정 번호 (수정/삭제 시 필요)
        }));
        setScheduleList(list); // 상태 업데이트
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); // 빈 배열 = 컴포넌트 마운트 시 한 번만 실행

  // 일정 등록 모달 표시 여부
  const [showModal, setShowModal] = useState(false);

  // 상세보기 모달 표시 여부
  const [showDetailModal, setShowDetailModal] = useState(false);

  // 선택된 일정 정보 (수정/삭제할 때 사용)
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  // 새로 등록할 일정 정보
  const [newSchedule, setNewSchedule] = useState({
    title: "", // 제목
    start: null, // 시작 시간
    end: null, // 종료 시간
  });

  // 오늘 날짜 (시간은 00:00:00으로 설정하여 날짜만 비교)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // 지금 시간 (분 단위 비교용)
  const now = new Date();

  // 캘린더 빈 공간 클릭 시 실행 (일정 등록 모달 열기)
  const clickEmptySpace = ({ start, end }) => {
    // 시간이 00:00:00인지 확인 (분 단위로 계산)
    const startTime = start.getHours() * 60 + start.getMinutes();
    const endTime = end.getHours() * 60 + end.getMinutes();

    // 월 뷰에서 날짜만 클릭한 경우 모달 안 열기
    // (시작과 종료가 모두 자정이고 하루 이상 차이나면 월 뷰 클릭)
    if (startTime === 0 && endTime === 0 && end - start >= 86400000) {
      return; // 함수 종료
    }

    // 과거 날짜는 선택 불가
    if (start < today) {
      Swal.fire({
        icon: "warning",
        title: "과거 날짜 선택 불가",
        text: "과거 날짜는 선택할 수 없습니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return; // 함수 종료
    }

    // 새 일정 정보 초기화
    setNewSchedule({
      title: "",
      start: start, // 클릭한 시작 시간
      end: end, // 클릭한 종료 시간
    });
    setShowModal(true); // 등록 모달 열기
  };

  // 일정 클릭 시 실행 (상세보기 모달 열기)
  const clickSchedule = (schedule) => {
    setSelectedSchedule(schedule); // 클릭한 일정 정보 저장
    setShowDetailModal(true); // 상세보기 모달 열기
  };

  // 제목 입력 시 상태 업데이트
  const changeTitle = (e) => {
    const { name, value } = e.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };

  // 일정 저장 버튼 클릭 시
  const saveSchedule = () => {
    // 과거 시간 등록 불가
    if (newSchedule.start < now) {
      Swal.fire({
        icon: "warning",
        title: "과거 시간 선택 불가",
        text: "현재 시간보다 이전 일정은 등록할 수 없습니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    // 제목이 비어있으면 경고
    if (!newSchedule.title) {
      Swal.fire({
        icon: "warning",
        title: "제목 입력",
        text: "제목을 입력해주세요.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    // 기존 일정과 시간 중복 체크
    const isOverlap = scheduleList.some((schedule) => {
      const scheduleStart = new Date(schedule.start).getTime(); // 기존 일정 시작
      const scheduleEnd = new Date(schedule.end).getTime(); // 기존 일정 종료
      const newStart = new Date(newSchedule.start).getTime(); // 새 일정 시작
      const newEnd = new Date(newSchedule.end).getTime(); // 새 일정 종료

      // 시간이 겹치는지 확인 (3가지 경우)
      return (
        (newStart >= scheduleStart && newStart < scheduleEnd) || // 새 일정 시작이 기존 일정 중간
        (newEnd > scheduleStart && newEnd <= scheduleEnd) || // 새 일정 종료가 기존 일정 중간
        (newStart <= scheduleStart && newEnd >= scheduleEnd) // 새 일정이 기존 일정을 완전히 포함
      );
    });

    // 중복되면 경고
    if (isOverlap) {
      Swal.fire({
        icon: "warning",
        title: "시간 중복",
        text: "이미 일정이 있는 시간대입니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    // 백엔드로 데이터 전송 (POST 요청)
    axios
      .post(SERVER_HOST + "/schedule/insert", {
        scheduleTitle: newSchedule.title,
        scheduleContent: null, // 내용은 사용하지 않으므로 null
        scheduleDate: moment(newSchedule.start).format("YYYY-MM-DD"), // 날짜
        startTime: moment(newSchedule.start).format("HH:mm"), // 시작 시간
        endTime: moment(newSchedule.end).format("HH:mm"), // 종료 시간
      })
      .then((res) => {
        if (res.data > 0) {
          // 등록 성공 (result > 0)
          // DB에서 다시 가져오기
          axios.get(SERVER_HOST + "/schedule/list").then((res) => {
            const list = res.data.map((item) => ({
              title: item.scheduleTitle,
              start: new Date(item.scheduleDate + " " + item.startTime),
              end: new Date(item.scheduleDate + " " + item.endTime),
              scheduleNo: item.scheduleNo,
            }));
            setScheduleList(list);
          });
          setShowModal(false); // 모달 닫기
          Swal.fire({
            icon: "success",
            title: "등록 완료",
            text: "일정이 등록되었습니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#4285f4",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "등록 실패",
          text: "일정 등록에 실패했습니다.",
          confirmButtonText: "확인",
          confirmButtonColor: "#4285f4",
        });
      });
  };

  // 등록 모달 닫기
  const closeModal = () => {
    setShowModal(false);
  };

  // 상세 모달 닫기
  const closeDetailModal = () => {
    setShowDetailModal(false);
    setSelectedSchedule(null); // 선택된 일정 초기화
  };

  // 일정 수정 버튼 클릭 시
  const updateSchedule = () => {
    // 과거 시간 수정 불가
    if (selectedSchedule.start < now) {
      Swal.fire({
        icon: "warning",
        title: "과거 시간 선택 불가",
        text: "현재 시간보다 이전으로 수정할 수 없습니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    // 제목이 비어있으면 경고
    if (!selectedSchedule.title) {
      Swal.fire({
        icon: "warning",
        title: "제목 입력",
        text: "제목을 입력해주세요.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    // 시간 중복 체크 (자기 자신은 제외)
    // some 함수: 배열의 각 항목을 하나씩 검사하여 조건에 맞는 게 하나라도 있으면 true 반환
    const isOverlap = scheduleList.some((schedule) => {
      // 자기 자신은 중복 체크에서 제외
      // 예: 원래 12시~13시 일정을 12시~14시로 수정할 때, 자기 자신과는 중복 체크 안 함
      if (schedule.scheduleNo === selectedSchedule.scheduleNo) {
        return false; // 자기 자신이면 false 반환 (중복 아님)
      }

      // 시간을 숫자로 변환 (비교하기 쉽게)
      const scheduleStart = new Date(schedule.start).getTime(); // 기존 일정 시작 (밀리초)
      const scheduleEnd = new Date(schedule.end).getTime(); // 기존 일정 종료 (밀리초)
      const newStart = new Date(selectedSchedule.start).getTime(); // 수정할 일정 시작 (밀리초)
      const newEnd = new Date(selectedSchedule.end).getTime(); // 수정할 일정 종료 (밀리초)

      // 시간이 겹치는지 확인 (3가지 경우)
      return (
        (newStart >= scheduleStart && newStart < scheduleEnd) ||
        (newEnd > scheduleStart && newEnd <= scheduleEnd) ||
        (newStart <= scheduleStart && newEnd >= scheduleEnd)
      );
    });

    // 중복되면 경고창 띄우고 함수 종료
    if (isOverlap) {
      Swal.fire({
        icon: "warning",
        title: "시간 중복",
        text: "이미 일정이 있는 시간대입니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    axios
      .patch(SERVER_HOST + "/schedule/update", {
        scheduleNo: selectedSchedule.scheduleNo,
        scheduleTitle: selectedSchedule.title,
        scheduleContent: null,
        scheduleDate: moment(selectedSchedule.start).format("YYYY-MM-DD"),
        startTime: moment(selectedSchedule.start).format("HH:mm"),
        endTime: moment(selectedSchedule.end).format("HH:mm"),
      })
      .then((res) => {
        if (res.data > 0) {
          const updatedList = scheduleList.map((schedule) =>
            schedule.scheduleNo === selectedSchedule.scheduleNo
              ? selectedSchedule
              : schedule
          );

          setScheduleList(updatedList);
          setShowDetailModal(false);

          Swal.fire({
            icon: "success",
            title: "수정 완료",
            text: "일정이 수정되었습니다.",
            confirmButtonText: "확인",
            confirmButtonColor: "#4285f4",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "수정 실패",
          text: "일정 수정에 실패했습니다.",
          confirmButtonText: "확인",
          confirmButtonColor: "#4285f4",
        });
      });
  };

  const scheduleDelete = () => {
    // 삭제 확인 물어보기
    Swal.fire({
      icon: "warning",
      title: "일정 삭제",
      text: "정말 삭제하시겠습니까?",
      showCancelButton: true, // 취소 버튼 표시
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      confirmButtonColor: "#d33", // 빨간색
      cancelButtonColor: "#4285f4",
    }).then((result) => {
      // 확인 버튼 클릭 시에만 삭제 실행
      if (result.isConfirmed) {
        axios
          .delete(
            SERVER_HOST + "/schedule/delete/" + selectedSchedule.scheduleNo
          )
          .then((res) => {
            if (res.data > 0) {
              const updatedList = scheduleList.filter(
                (schedule) =>
                  schedule.scheduleNo !== selectedSchedule.scheduleNo
              );

              setScheduleList(updatedList);
              setShowDetailModal(false);

              Swal.fire({
                icon: "success",
                title: "삭제 완료",
                text: "일정이 삭제되었습니다.",
                confirmButtonText: "확인",
                confirmButtonColor: "#4285f4",
              });
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire({
              icon: "error",
              title: "삭제 실패",
              text: "일정 삭제가 실패했습니다.",
              confirmButtonText: "확인",
              confirmButtonColor: "#4285f4",
            });
          });
      }
    });
  };
  // 캘린더 날짜 표시 형식 설정
  const formats = {
    dateFormat: "D",
    dayFormat: "D일 ddd",
    weekdayFormat: "ddd",
    monthHeaderFormat: "YYYY년 M월",
    dayHeaderFormat: "M월 D일 dddd",
    dayRangeHeaderFormat: ({ start, end }) =>
      `${moment(start).format("M월 D일")} - ${moment(end).format("M월 D일")}`,
    agendaHeaderFormat: ({ start, end }) =>
      `${moment(start).format("M월 D일")} - ${moment(end).format("M월 D일")}`,
    agendaDateFormat: "M월 D일 dddd",
    agendaTimeFormat: "A h:mm",
    agendaTimeRangeFormat: ({ start, end }) =>
      `${moment(start).format("A h:mm")} - ${moment(end).format("A h:mm")}`,
  };

  return (
    <div className="schedule-main-container">
      <div style={{ height: "600px" }}>
        <Calendar
          localizer={localizer}
          events={scheduleList}
          startAccessor="start"
          endAccessor="end"
          culture="ko"
          formats={formats}
          selectable
          onSelectSlot={clickEmptySpace}
          onSelectEvent={clickSchedule}
          messages={{
            next: "다음",
            previous: "이전",
            today: "오늘",
            month: "월",
            week: "주",
            day: "일",
            agenda: "일정",
            date: "날짜",
            time: "시간",
            event: "일정",
            noEventsInRange: "이 기간에 일정이 없습니다.",
          }}
        />
      </div>

      {/* 일정 등록 모달 (showModal이 true일 때만 표시) */}
      {/* 제목 입력 */}
      {showModal && (
        <div className="schedule-modal-overlay">
          <div className="schedule-modal">
            <h2 className="schedule-modal-title">일정 추가</h2>
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">제목</label>
              <input
                className="schedule-modal-input"
                type="text"
                name="title"
                value={newSchedule.title}
                onChange={changeTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveSchedule(); // 엔터 누르면 저장
                  } else if (e.key === "Escape") {
                    closeModal(); // ESC 누르면 닫기
                  }
                }}
              />
            </div>

            <div className="schedule-modal-field">
              <label className="schedule-modal-label">시작</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(new Date()).format("YYYY-MM-DDTHH:mm")}
                value={moment(newSchedule.start).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setNewSchedule({
                    ...newSchedule,
                    start: new Date(e.target.value),
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveSchedule();
                  } else if (e.key === "Escape") {
                    closeModal();
                  }
                }}
              />
            </div>

            <div className="schedule-modal-field">
              <label className="schedule-modal-label">종료</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(newSchedule.start).format("YYYY-MM-DDTHH:mm")}
                value={moment(newSchedule.end).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setNewSchedule({
                    ...newSchedule,
                    end: new Date(e.target.value),
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    saveSchedule();
                  } else if (e.key === "Escape") {
                    closeModal();
                  }
                }}
              />
            </div>

            <div className="schedule-modal-buttons">
              <button
                className="schedule-modal-save-btn"
                onClick={saveSchedule}
              >
                저장
              </button>
              <button
                className="schedule-modal-cancel-btn"
                onClick={closeModal}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 상세보기 모달 (showDetailModal이 true이고 selectedSchedule이 있을 때만 표시) */}
      {/* 제목 입력 (수정 가능) */}
      {showDetailModal && selectedSchedule && (
        <div className="schedule-modal-overlay">
          <div className="schedule-modal">
            <h2 className="schedule-modal-title">일정 상세</h2>

            <div className="schedule-modal-field">
              <label className="schedule-modal-label">제목</label>
              <input
                className="schedule-modal-input"
                type="text"
                value={selectedSchedule.title}
                onChange={(e) =>
                  setSelectedSchedule({
                    ...selectedSchedule,
                    title: e.target.value,
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateSchedule(); // 엔터 누르면 수정
                  } else if (e.key === "Escape") {
                    closeDetailModal(); // ESC 누르면 닫기
                  }
                }}
              />
            </div>
            {/* 시작 시간 입력 (수정 가능) */}
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">시작</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(new Date()).format("YYYY-MM-DDTHH:mm")}
                value={moment(selectedSchedule.start).format(
                  "YYYY-MM-DDTHH:mm"
                )}
                onChange={(e) =>
                  setSelectedSchedule({
                    ...selectedSchedule,
                    start: new Date(e.target.value),
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateSchedule();
                  } else if (e.key === "Escape") {
                    closeDetailModal();
                  }
                }}
              />
            </div>
            {/* 종료 시간 입력 (수정 가능) */}
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">종료</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(selectedSchedule.start).format("YYYY-MM-DDTHH:mm")}
                value={moment(selectedSchedule.end).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setSelectedSchedule({
                    ...selectedSchedule,
                    end: new Date(e.target.value),
                  })
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateSchedule();
                  } else if (e.key === "Escape") {
                    closeDetailModal();
                  }
                }}
              />
            </div>

            <div className="schedule-modal-buttons">
              <button
                className="schedule-modal-save-btn"
                onClick={updateSchedule}
              >
                수정
              </button>
              <button
                className="schedule-modal-cancel-btn"
                onClick={scheduleDelete}
              >
                삭제
              </button>
              <button
                className="schedule-modal-cancel-btn"
                onClick={closeDetailModal}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
