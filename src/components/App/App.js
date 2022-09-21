import useAppHook from "hooks/useAppHook.jsx";
import { Header } from "../../components";
import { CalendarGrid } from "../../components";
import { Wrapper } from "./App.styled";

export const App = () => {

  const {
    setEvents,
    currentDay,
    prevHandler,
    todayHandler,
    nextHandler,
    value,
    setValue,
    selectDataHandler,
    handleDelete,
    handleUpdateEvent,
    firstDay,
    events
  } = useAppHook();

  return (
    <Wrapper>
      <Header
        setEvents={setEvents}
        currentDay={currentDay}
        prevHandler={prevHandler}
        todayHandler={todayHandler}
        nextHandler={nextHandler}
        value={value} 
        setValue={setValue}
        selectDataHandler={selectDataHandler}
      />
      <CalendarGrid
        handleDelete={handleDelete}
        handleUpdateEvent={handleUpdateEvent}
        currentDay={currentDay}
        firstDay={firstDay}
        events={events}
      />
    </Wrapper>
  );
};
