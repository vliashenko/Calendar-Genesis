import { useState } from "react";
import moment from "moment";
import shortid from "shortid";
import { StyledForm, Title, StyledField, Button, DateAndTime, Fields,style } from "./AddForm.styled.js"

const AddForm = ({ setEvents, onClose }) => {

    const [title, setTitle] = useState(() => {
        const items = localStorage.getItem("title");
        const parsed = JSON.parse(items);
        return parsed ? parsed : ""
    });
    const [desc, setDesc] = useState(() => {
        const items = localStorage.getItem("desc");
        const parsed = JSON.parse(items);
        return parsed ? parsed : ""
    });
    const [date, setDate] = useState(() => {
        const items = localStorage.getItem("date");
        const parsed = JSON.parse(items);
        return parsed ? parsed : ""
    });
    const [time, setTime] = useState(() => {
        const items = localStorage.getItem("time");
        const parsed = JSON.parse(items);
        return parsed ? parsed : ""
    });

    const helperChange = (setFunc, name, value) => {
        localStorage.setItem(name, JSON.stringify(value))
        setFunc(value)
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
         
         switch (name) {
            case "title":
                return helperChange(setTitle, "title", value)
            case "desc":
                return helperChange(setDesc, "desc", value);
            case "date":
                return helperChange(setDate, "date", value);
            case "time":
                return helperChange(setTime, "time", value);
            default: 
                return; 
         };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(moment(date, 'MM.DD.YYYY',true).isValid()){
            setEvents(prev => [...prev, {title, desc, date, time, id: shortid(), createdAt: moment().format("MM.DD.YYYY hh:mm a")}])
            onClose();
            localStorage.setItem("title", "");
            localStorage.setItem("desc", "");
            localStorage.setItem("date", "");
            localStorage.setItem("time", "");
        } else {
            alert("Wrong date format, should be 'mm.dd.yyyy'")
        };

    };

    return (
            <StyledForm onSubmit={(e) =>handleSubmit(e)}>

                <Title>
                    Add new idea item
                </Title>

                <StyledField 
                    required 
                    type="text"
                    placeholder="Title*" 
                    name="title"  
                    value={title}
                    onChange={(e) => handleChange(e)}
                />
                <StyledField 
                    type="text"
                    placeholder="Description" 
                    style={style}
                    name="desc"
                    value={desc}
                    onChange={(e) => handleChange(e)}
                />

                <Fields>
                    <DateAndTime 
                        required 
                        type="text"
                        placeholder="Date" 
                        name="date"  
                        value={date}
                        onChange={(e) => handleChange(e)}
                    />
                    <DateAndTime
                        placeholder="Time"
                        type="time"
                        name="time"
                        value={time}
                        onChange={(e) => handleChange(e)}
                    />
                </Fields>
                    <Button 
                        type="submit"
                    >
                        Save
                    </Button>
            </StyledForm>
    );
};

export default AddForm;