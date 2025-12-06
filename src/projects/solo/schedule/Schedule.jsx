import "./schedule.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // 추가

const Schedule = () => {
  const SERVER_HOST = import.meta.env.VITE_BACK_SERVER;

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

  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);
  // 컴포넌트 로드 시 일정 목록 가져오기
  useEffect(() => {
    axios
      .get(SERVER_HOST + "/schedule/list")
      .then((res) => {
        // DB 데이터를 캘린더 형식으로 변환
        const scheduleList = res.data.map((item) => ({
          title: item.scheduleTitle,
          start: new Date(item.scheduleDate + " " + item.startTime),
          end: new Date(item.scheduleDate + " " + item.endTime),
          content: item.scheduleContent,
          scheduleNo: item.scheduleNo,
        }));
        setEvents(scheduleList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    content: "",
    start: null,
    end: null,
  });

  // 오늘 날짜 (시간 제외)
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSelectSlot = ({ start, end }) => {
    // 과거 날짜 선택 막기
    if (start < today) {
      Swal.fire({
        icon: "warning",
        title: "과거 날짜 선택 불가",
        text: "과거 날짜는 선택할 수 없습니다.",
        confirmButtonText: "확인",
        confirmButtonColor: "#4285f4",
      });
      return;
    }

    setNewEvent({
      title: "",
      content: "",
      start: start,
      end: end,
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSave = () => {
    if (newEvent.title) {
      axios
        .post(SERVER_HOST + "/schedule/insert", {
          scheduleTitle: newEvent.title,
          scheduleContent: newEvent.content,
          scheduleDate: moment(newEvent.start).format("YYYY-MM-DD"),
          startTime: moment(newEvent.start).format("HH:mm"),
          endTime: moment(newEvent.end).format("HH:mm"),
        })
        .then((res) => {
          if (res.data > 0) {
            setEvents([...events, newEvent]);
            setShowModal(false);
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
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

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
          events={events}
          startAccessor="start"
          endAccessor="end"
          culture="ko"
          formats={formats}
          selectable
          onSelectSlot={handleSelectSlot}
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
          }}
        />
      </div>

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
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">내용</label>
              <textarea
                className="schedule-modal-textarea"
                name="content"
                value={newEvent.content}
                onChange={handleInputChange}
              />
            </div>
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">시작</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(today).format("YYYY-MM-DDTHH:mm")} // 과거 날짜 선택 불가
                value={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, start: new Date(e.target.value) })
                }
              />
            </div>
            <div className="schedule-modal-field">
              <label className="schedule-modal-label">종료</label>
              <input
                className="schedule-modal-input"
                type="datetime-local"
                min={moment(newEvent.start).format("YYYY-MM-DDTHH:mm")} // 시작 시간 이후만 선택 가능
                value={moment(newEvent.end).format("YYYY-MM-DDTHH:mm")}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                }
              />
            </div>
            <div className="schedule-modal-buttons">
              <button className="schedule-modal-save-btn" onClick={handleSave}>
                저장
              </button>
              <button
                className="schedule-modal-cancel-btn"
                onClick={handleClose}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
