import moment from "moment";
import { GridContainer, GridCell, RowInCell , DayWrapper, CurrentDay, DayTask } from "./CalendarGrid.styled";
import PropTypes from "prop-types";

const CalendarGrid = ({ firstDay, currentDay, events }) => {

    const totalDays = 42;
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
                                    >
                                        {ev.title}
                                    </DayTask>
                                ))
                            }
                        </GridCell>
                   ) 
                })
            }
        </GridContainer>
    );
};

CalendarGrid.propTypes = {
    firstDay: PropTypes.object.isRequired,
    currentDay: PropTypes.object.isRequired,
    events: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })
    )
}

export default CalendarGrid;