import useCalendarGridHook from "hooks/useCalendarGridHook";
import ModalWindow from "components/ModalWindow/ModalWindow";
import UpdateForm from "components/UpdateForm/UpdateForm";
import moment from "moment";
import { GridContainer, GridCell, RowInCell , DayWrapper, CurrentDay, DayTask } from "./CalendarGrid.styled";
import PropTypes from "prop-types";

const CalendarGrid = ({ handleDelete, firstDay, currentDay, events,  handleUpdateEvent }) => {

    const {
        modalIsOpen,
        currentEvent,
        handleClose,
        handleOpen,
        totalDays
    } = useCalendarGridHook();

    const day = firstDay.clone();
    const daysArray = [...Array(totalDays)].map(() => day.add(1, "day").clone());
    
    const isCurrentDay = (day) => moment().isSame(day, "day");
    const isCurrentMonth = (day) => currentDay.isSame(day, "month");
    
    return (
        <GridContainer>
            {
                daysArray.map((day,i) => {
                   return (
                        <GridCell 
                            key={day.format("DDMMYYYY")}
                            isSelectedMonth={isCurrentMonth(day)}
                            isWeekend={day.day() === 6 || day.day() === 0}    
                        >
                            <RowInCell>
                                <DayWrapper>
                                    {moment().days(i + 1).format("ddd")}
                                </DayWrapper>

                                <DayWrapper>
                                    {
                                        isCurrentDay(day) ? (
                                            <CurrentDay>
                                                {day.format("D")}
                                            </CurrentDay>
                                        ) : (
                                            day.format("D")
                                        )
                                    }
                                </DayWrapper>
                            </RowInCell>
                            {
                               events
                               .filter(ev => moment(ev.date).format("X") >= day.format("X") && moment(ev.date).format("X") <= day.clone().endOf("day").format("X"))
                                .map(ev => (
                                    <DayTask 
                                        key={ev.id}
                                        onClick={() => handleOpen(ev.id)}
                                    >
                                        {ev.title}
                                    </DayTask>
                                ))
                            }
                        </GridCell>
                   ) 
                })
            }
            {
                modalIsOpen &&
                    <ModalWindow 
                        onClose={handleClose}
                    >
                        <UpdateForm
                            onClose={handleClose}
                            handleUpdateEvent={handleUpdateEvent}
                            handleDelete={handleDelete}
                            events={events}
                            currentEvent={currentEvent}
                        />
                    </ModalWindow>
            }

        </GridContainer>
    );
};

CalendarGrid.propTypes = {
    firstDay: PropTypes.object.isRequired,
    currentDay: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleUpdateEvent: PropTypes.func.isRequired
}

export default CalendarGrid;