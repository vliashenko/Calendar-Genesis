import { useState, useEffect } from 'react';
import { DatePicker } from '../../components';
import { ModalWindow } from '../../components';
import { AddForm } from '../../components';
import {
  Button,
  Div,
  Container,
  ButtonWrapper,
  TodayButton,
} from './Header.styled';
import PropTypes from 'prop-types';

const Header = ({
  setEvents,
  value,
  setValue,
  selectDataHandler,
  currentDay,
  prevHandler,
  todayHandler,
  nextHandler,
  // handleAddEvent,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(() => {
    const items = localStorage.getItem('modalIsOpen');
    const parsed = JSON.parse(items);
    return parsed ? parsed : false;
  });

  useEffect(() => {
    localStorage.setItem('modalIsOpen', JSON.stringify(modalIsOpen));
  }, [modalIsOpen]);

  const handleClose = () => setModalIsOpen(false);
  const handleOpen = () => setModalIsOpen(true);

  return (
    <Container>
      <Div>
        <ButtonWrapper onClick={prevHandler}>&lt;</ButtonWrapper>

        <TodayButton onClick={todayHandler}>
          {currentDay.format('MMMM')} {currentDay.format('YYYY')}
        </TodayButton>

        <ButtonWrapper onClick={nextHandler}>&gt;</ButtonWrapper>
      </Div>

      <Div>
        <Button onClick={handleOpen}>+</Button>

        <DatePicker
          value={value}
          setValue={setValue}
          selectDataHandler={selectDataHandler}
        />
      </Div>

      {modalIsOpen && (
        <ModalWindow onClose={handleClose}>
          <AddForm
            // handleAddEvent={handleAddEvent}
            setEvents={setEvents}
            onClose={handleClose}
          />
        </ModalWindow>
      )}
    </Container>
  );
};

Header.propTypes = {
  currentDay: PropTypes.object.isRequired,
  value: PropTypes.object,
  setEvents: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  selectDataHandler: PropTypes.func.isRequired,
  prevHandler: PropTypes.func.isRequired,
  todayHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  // handleAddEvent: PropTypes.func.isRequired,
};

export default Header;
