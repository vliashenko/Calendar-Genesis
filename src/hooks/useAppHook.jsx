import {useState, useEffect} from 'react';
import moment from "moment";

const useAppHook = () => {
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
    
      const handleUpdateEvent = (id, values) => {
        const { newTitle, newDesc, newDate, newTime, updatedAt } = values;
        const newState = events.map(obj => {
          if(obj.id === id) {
            return {...obj, title: newTitle, desc: newDesc, date: newDate, time: newTime, updatedAt}
          }
          return obj;
        })
        setEvents(newState);
      };
    
      const handleDelete = (id) => {
        const newEvents = events.filter(ev => ev.id !== id);
        setEvents(newEvents);
      };
    
      const firstDay = currentDay.clone().startOf("month").startOf("week");
    
      const prevHandler = () => setCurrentDay(prev => prev.clone().subtract(1, "month"));;
      const todayHandler = () => setCurrentDay(moment());;
      const nextHandler = () => setCurrentDay(prev => prev.clone().add(1, "month"));;
      const selectDataHandler = (value) => value === null ? setCurrentDay(moment()) : setCurrentDay(value);

      return {
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
      };
};

export default useAppHook;