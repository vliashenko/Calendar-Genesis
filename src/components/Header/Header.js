import { useState } from "react";
import DatePicker from "components/DatePicker/DatePicker";
import { Button, Div, Container, ButtonWrapper, TodayButton } from "./Header.styled";
import ModalWindow from "components/ModalWindow/ModalWindow";
import AddForm from "components/AddForm/AddForm";

const Header = ({ setEvents, value, setValue, selectDataHandler, currentDay, prevHandler, todayHandler, nextHandler }) => {
    
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleClose = () => setModalIsOpen(false);
    const handleOpen = () => setModalIsOpen(true);

    return (
        <Container>  
            <Div>
                <ButtonWrapper 
                    onClick={prevHandler}
                > 
                    &lt; 
                </ButtonWrapper>

                <TodayButton 
                    onClick={todayHandler}
                > 
                    {currentDay.format("MMMM")} {currentDay.format("YYYY")}
                </TodayButton>

                <ButtonWrapper 
                    onClick={nextHandler}
                > 
                    &gt;
                </ButtonWrapper>
            </Div>

            
            <Div>
                <Button 
                    onClick={handleOpen}
                >
                    +
                </Button>

                <DatePicker
                    value={value} 
                    setValue={setValue}
                    selectDataHandler={selectDataHandler}
                />
            </Div>

            {
                modalIsOpen && 
                    <ModalWindow 
                        onClose={handleClose}
                    >
                        <AddForm 
                            setEvents={setEvents}
                            onClose={handleClose}
                        />
                    </ModalWindow>
            }
            
        </Container>
    );
};

export default Header;