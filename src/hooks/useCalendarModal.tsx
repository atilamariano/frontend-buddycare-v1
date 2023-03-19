import { useState } from "react";

interface MyEvent {
  title: string;
  start: Date;
  end: Date;
  note: string;
  alarm: string;
}

const useCalendarModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [event, setEvent] = useState<MyEvent>({ title: "", start: new Date(), end: new Date(), note: "", alarm: "" });

  const handleEventClick = (event: MyEvent) => {
    setEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return {
    modalIsOpen,
    event,
    handleEventClick,
    closeModal,
  };
};

export default useCalendarModal;
