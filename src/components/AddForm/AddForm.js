import useAddFormHook from 'hooks/useAddFormHook.jsx';
import {
  StyledForm,
  Title,
  StyledField,
  Button,
  DateAndTime,
  Fields,
  style,
} from './AddForm.styled.js';
import PropTypes from 'prop-types';
const AddForm = ({ setEvents, onClose /*, handleAddEvent*/ }) => {
  const { title, desc, date, time, handleChange, handleSubmit } =
    useAddFormHook();

  return (
    <StyledForm
      onSubmit={e => handleSubmit(e, setEvents, onClose /*, handleAddEvent*/)}
    >
      <Title>Add new idea item</Title>

      <StyledField
        required
        type="text"
        placeholder="Title*"
        name="title"
        value={title}
        onChange={e => handleChange(e)}
      />
      <StyledField
        type="text"
        placeholder="Description"
        style={style}
        name="desc"
        value={desc}
        onChange={e => handleChange(e)}
      />

      <Fields>
        <DateAndTime
          required
          type="text"
          placeholder="Date"
          name="date"
          value={date}
          onChange={e => handleChange(e)}
        />
        <DateAndTime
          placeholder="Time"
          type="time"
          name="time"
          value={time}
          onChange={e => handleChange(e)}
        />
      </Fields>
      <Button type="submit">Save</Button>
    </StyledForm>
  );
};

AddForm.propTypes = {
  setEvents: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  // handleAddEvent: PropTypes.func.isRequired,
};

export default AddForm;
