import {useState, useEffect} from 'react';
import moment from "moment";
import shortid from 'shortid';

const useAddFormHook = () => {
    const [title, setTitle] = useState(() => {
        const items = localStorage.getItem("formValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.title : ""
    });
    const [desc, setDesc] = useState(() => {
        const items = localStorage.getItem("formValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.desc : ""
    });
    const [date, setDate] = useState(() => {
        const items = localStorage.getItem("formValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.date : ""
    });
    const [time, setTime] = useState(() => {
        const items = localStorage.getItem("formValues");
        const parsed = JSON.parse(items);
        return parsed ? parsed.time : ""
    });

    useEffect(() => {
        const formValues = { title, desc, date, time };
        localStorage.setItem("formValues", JSON.stringify(formValues))
    },[title,desc,date,time])

    const handleChange = (e) => {
        const { value, name } = e.target;
         
         switch (name) {
            case "title":
                return setTitle(value);
            case "desc":
                return setDesc(value);
            case "date":
                return setDate(value);
            case "time":
                return setTime(value);
            default: 
                return; 
        };
    };

    const handleSubmit = (e, setEvents, onClose) => {
        e.preventDefault();
        if(moment(date, 'MM.DD.YYYY',true).isValid()){
            setEvents(prev => [...prev, {title, desc, date, time, id: shortid(), createdAt: moment().format("MM.DD.YYYY hh:mm a")}])
            localStorage.setItem("formValues", JSON.stringify(""));
            onClose();
        } else {
            alert("Wrong date format, should be 'mm.dd.yyyy'")
        };

    };

    return { title,desc,date,time, handleChange, handleSubmit }
};

export default useAddFormHook;