import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import React, { useState } from "react";

const CustomDatePicker = (props) => {
  const [date, setDate] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker"
        format="dd/MM/yyyy"
        clearable
        value={date}
        onChange={(event) => {
          console.log("Date picker value: ", event);
          console.log(props.columnDef.tableData.id);
          setDate(event);
          props.onFilterChanged(props.columnDef.tableData.id, event);
        }}
        KeyboardButtonProps={{
          "aria-label": "change date"
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
export default CustomDatePicker;
