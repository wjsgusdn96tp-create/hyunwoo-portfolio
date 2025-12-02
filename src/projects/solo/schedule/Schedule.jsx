import "./schedule.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/ko";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const Schedule = () => {
  // moment 한국어 설정 커스터마이징
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

  const [events, setEvents] = useState([
    {
      title: "일하기",
      start: new Date(2025, 11, 5, 10, 0),
      end: new Date(2025, 11, 5, 11, 0),
    },
  ]);

  // 한국어 형식 설정
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
    </div>
  );
};

export default Schedule;
