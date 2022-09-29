import { useState, useEffect } from 'react';
// import * as API from '../services/calendarAPI';
import moment from 'moment';

const useAppHook = () => {
  const [events, setEvents] = useState(() => {
    const items = localStorage.getItem('events');
    const parsed = JSON.parse(items);
    return parsed ? parsed : [];
  });

  const [currentDay, setCurrentDay] = useState(() => {
    const items = localStorage.getItem('currentDay');
    const parsed = JSON.parse(items);
    return parsed ? moment(parsed) : moment();
  });

  const [value, setValue] = useState(null);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('currentDay', JSON.stringify(moment(currentDay)));
  }, [events, currentDay]);

  // useEffect(() => {
  //   handleGetEvents();
  // }, []);

  // const handleGetEvents = async () => {
  //   try {
  //     const events = await API.getEvents();
  //     setEvents(events);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleAddEvent = async values => {
  //   try {
  //     const event = await API.addEvent(values);
  //     setEvents(prev => [...prev, event]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleUpdateEvent = async (id, values) => {
  //   const { newTitle, newDesc, newDate, newTime, updatedAt } = values;

  //   try {
  //     const newObject = events.map(obj => {
  //       if (obj.id === id) {
  //         return {
  //           ...obj,
  //           title: newTitle,
  //           desc: newDesc,
  //           date: newDate,
  //           time: newTime,
  //           updatedAt,
  //         };
  //       }
  //       return obj;
  //     });
  //     const [newObj] = newObject;

  //     const eventUpdated = await API.updateEvent(id, newObj);

  //     const newState = events.map(event =>
  //       event.id === id ? eventUpdated : event
  //     );
  //     setEvents(newState);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const handleDelete = async id => {
  //   try {
  //     await API.deleteEvent(id);
  //     const newEvents = events.filter(ev => ev.id !== id);
  //     setEvents(newEvents);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleUpdateEvent = (id, values) => {
    const { newTitle, newDesc, newDate, newTime, updatedAt } = values;
    const newState = events.map(obj => {
      if (obj.id === id) {
        return {
          ...obj,
          title: newTitle,
          desc: newDesc,
          date: newDate,
          time: newTime,
          updatedAt,
        };
      }
      return obj;
    });
    setEvents(newState);
  };

  const handleDelete = id => {
    const newEvents = events.filter(ev => ev.id !== id);
    setEvents(newEvents);
  };

  const firstDay = currentDay.clone().startOf('month').startOf('week');

  const prevHandler = () =>
    setCurrentDay(prev => prev.clone().subtract(1, 'month'));
  const todayHandler = () => setCurrentDay(moment());
  const nextHandler = () => setCurrentDay(prev => prev.clone().add(1, 'month'));
  const selectDataHandler = value =>
    value === null ? setCurrentDay(moment()) : setCurrentDay(value);

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
    events,
    // handleAddEvent,
  };
};

export default useAppHook;
