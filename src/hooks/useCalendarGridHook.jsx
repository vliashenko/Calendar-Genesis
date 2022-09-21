import {useState} from 'react';

const useCalendarGridHook = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentEvent, setCurrentEvent] = useState(null);

    const handleClose = () => setModalIsOpen(false);
    const handleOpen = (id) => {
        setModalIsOpen(true);
        setCurrentEvent(id);
    };

    const totalDays = 42;
    
    return { modalIsOpen, currentEvent, handleClose, handleOpen, totalDays }
};

export default useCalendarGridHook;