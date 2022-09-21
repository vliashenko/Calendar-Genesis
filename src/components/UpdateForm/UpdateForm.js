import { useState, useEffect } from "react";
import useUpdateFormHook from "hooks/useUpdateFormHook";
import { ButtonContainer, StyledForm, SubTitle, Title, StyledField, Button, DateAndTime, Fields,style } from "./UpdateForm.styled"
import PropTypes from "prop-types";

const UpdateForm = ({ handleDelete, onClose, events, currentEvent, handleUpdateEvent }) => {

    const {
        handleSubmit,
        handleDeleteEvent,
        handleChange
    } = useUpdateFormHook();

    const event = events?.filter(ev => ev.id === currentEvent);

    const [{ id, title, desc, time, date, createdAt, updatedAt }] = event;

    const [newTitle, setNewTitle] = useState(() => {
        const items = localStorage.getItem("UpdateFormValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.newTitle : title
    });
    const [newDesc, setNewDesc] = useState(() => {
        const items = localStorage.getItem("UpdateFormValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.newDesc : desc
    });
    const [newDate, setNewDate] = useState(() => {
        const items = localStorage.getItem("UpdateFormValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.newDate : date
    });
    const [newTime, setNewTime] = useState(() => {
        const items = localStorage.getItem("UpdateFormValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.newTime : time
    });

    useEffect(() => {
        const formValues = { newTitle, newDesc, newDate, newTime };
        localStorage.setItem("UpdateFormValues", JSON.stringify(formValues))
    },[newTitle,newDesc,newDate,newTime])

    return (
        <StyledForm onSubmit={(e) =>handleSubmit(e, id,newTitle,newDesc,newDate,newTime,handleUpdateEvent,onClose,date)}>
                <Title>
                    Update idea item
                </Title>

                <SubTitle>
                    Created at: {createdAt}
                </SubTitle>

                {
                    updatedAt && 
                        <SubTitle>
                            Updated at: {updatedAt}
                        </SubTitle>
                }

                <StyledField 
                    required 
                    type="text"
                    placeholder="Title*" 
                    name="title" 
                    value={newTitle} 
                    onChange={(e) => handleChange(e, setNewTitle, setNewDesc, setNewDate, setNewTime)}
                />
                <StyledField 
                    type="text"
                    placeholder="Description" 
                    style={style}
                    name="desc"
                    value={newDesc}
                    onChange={(e) => handleChange(e, setNewTitle, setNewDesc, setNewDate, setNewTime)}
                />

                <Fields>
                    <DateAndTime 
                        required 
                        type="text"
                        placeholder="Date" 
                        name="date"  
                        value={newDate}
                        onChange={(e) => handleChange(e, setNewTitle, setNewDesc, setNewDate, setNewTime)}
                    />
                    <DateAndTime
                        placeholder="Time"
                        type="time"
                        name="time"
                        value={newTime}
                        onChange={(e) => handleChange(e, setNewTitle, setNewDesc, setNewDate, setNewTime)}
                    />
                </Fields>
                <ButtonContainer>
                    <Button
                        delete
                        onClick={() => handleDeleteEvent(id, onClose, handleDelete)}
                    >
                        Delete
                    </Button>

                    <Button 
                        type="submit"
                    >
                        Update
                    </Button>
                </ButtonContainer>
            </StyledForm>
    );
};

UpdateForm.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            desc: PropTypes.string.isRequired,
            time: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            createdAt: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
    currentEvent: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    onClose: PropTypes.PropTypes.func.isRequired,
    handleUpdateEvent: PropTypes.PropTypes.func.isRequired
}

export default UpdateForm;