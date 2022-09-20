import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DataPicker } from '@mui/x-date-pickers/DatePicker';
import { style } from "./DatePicker.styled";
import PropTypes from "prop-types";

const DatePicker = ({ value, setValue, selectDataHandler }) => {
  
  const dataHandler = async (newValue) => {
    await setValue(newValue);
    await selectDataHandler(newValue)
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DataPicker
        label="Choose Date"
        value={value}
        onChange={(newValue) => {
            JSON.stringify(newValue?._d) !== "null" &&
            dataHandler(newValue);
        }}
        onAccept={() =>selectDataHandler(value)}
        renderInput={(params) => <TextField {...style} {...params} />}
      />
    </LocalizationProvider>
  );
};

DatePicker.propTypes = {
  value: PropTypes.object,
  setValue: PropTypes.func.isRequired,
  selectDataHandler: PropTypes.func.isRequired
}

export default DatePicker;