import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export const getEvents = async () => {
  const res = await axios.get('/events');
  return res.data;
};

export const addEvent = async value => {
  const res = await axios.post('/events', value);
  return res.data;
};

export const deleteEvent = async id => {
  const res = await axios.delete(`/events/${id}`);
  return res.data;
};

export const updateEvent = async (id, value) => {
  const res = await axios.put(`/events/${id}`, value);
  return res.data;
};
