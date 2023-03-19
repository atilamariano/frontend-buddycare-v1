import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Modal from "react-modal";
import "react-big-calendar/lib/css/react-big-calendar.css";
import useCalendarModal from "../../hooks/useCalendarModal";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Evento 1",
    start: new Date(2023, 2, 19),
    end: new Date(2023, 2, 20),
    note: "Nota do evento 1",
    alarm: "09:00",
  },
  {
    title: "Evento 2",
    start: new Date(2023, 2, 21),
    end: new Date(2023, 2, 22),
    note: "Nota do evento 2",
    alarm: "10:00",
  },
  {
    title: "Evento 3",
    start: new Date(2023, 2, 25),
    end: new Date(2023, 2, 26),
    note: "Nota do evento 3",
    alarm: "11:00",
  },
];

const CalendarComponent = () => {
  const { modalIsOpen, event, handleEventClick, closeModal } = useCalendarModal();

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={true}
        onSelectEvent={handleEventClick}
      />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{event.title}</h2>
        <p>{event.note}</p>
        <p>Alarme: {event.alarm}</p>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
