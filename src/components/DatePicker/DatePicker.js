import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DataPicker } from '@mui/x-date-pickers/DatePicker';

const style = {
  width: "16%",
  color: "grey",
  size: "small"
}

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

export default DatePicker;