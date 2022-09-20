import { useState, useEffect } from "react";
import moment from "moment";
import { Header } from "../../components";
import { CalendarGrid } from "../../components";
import { Wrapper } from "./App.styled";

export const App = () => {

  const [events, setEvents] = useState(() => {
    const items = localStorage.getItem("events");
    const parsed = JSON.parse(items);
    return parsed ? parsed : []
  });

  const [currentDay, setCurrentDay] = useState(() => {
    const items = localStorage.getItem("currentDay");
    const parsed = JSON.parse(items);
    return parsed ? moment(parsed) : moment()
  });

 
  const [value, setValue] = useState(null);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events))  
    localStorage.setItem("currentDay", JSON.stringify(moment(currentDay)))   
  }, [events,currentDay]);

  
  const firstDay = currentDay.clone().startOf("month").startOf("week");

  const prevHandler = () => setCurrentDay(prev => prev.clone().subtract(1, "month"));;
  const todayHandler = () => setCurrentDay(moment());;
  const nextHandler = () => setCurrentDay(prev => prev.clone().add(1, "month"));;
  const selectDataHandler = (value) => value === null ? setCurrentDay(moment()) : setCurrentDay(value);

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
        currentDay={currentDay}
        firstDay={firstDay}
        events={events}
      />
    </Wrapper>
  );
};
