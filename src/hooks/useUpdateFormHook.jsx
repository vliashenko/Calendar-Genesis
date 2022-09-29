import moment from 'moment';

const useUpdateFormHook = () => {
  const handleSubmit = (
    e,
    id,
    newTitle,
    newDesc,
    newDate,
    newTime,
    handleUpdateEvent,
    onClose,
    date
  ) => {
    e.preventDefault();
    const values = {
      newTitle,
      newDesc,
      newDate,
      newTime,
      updatedAt: moment().format('MM.DD.YYYY HH:mm a'),
    };

    if (moment(date, 'MM.DD.YYYY', true).isValid()) {
      handleUpdateEvent(id, values);
      localStorage.setItem('UpdateFormValues', JSON.stringify(''));
      onClose();
    } else {
      alert("Wrong date format, should be 'mm.dd.yyyy'");
    }
  };

  const handleDeleteEvent = (id, onClose, handleDelete) => {
    onClose();
    localStorage.setItem('UpdateFormValues', JSON.stringify(''));
    handleDelete(id);
  };

  const handleChange = (e, setNewTitle, setNewDesc, setNewDate, setNewTime) => {
    const { value, name } = e.target;

    switch (name) {
      case 'title':
        return setNewTitle(value);
      case 'desc':
        return setNewDesc(value);
      case 'date':
        return setNewDate(value);
      case 'time':
        return setNewTime(value);
      default:
        return;
    }
  };

  return {
    handleSubmit,
    handleDeleteEvent,
    handleChange,
  };
};

export default useUpdateFormHook;
