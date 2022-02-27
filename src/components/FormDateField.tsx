import { DatePicker, LocalizationProvider } from "@mui/lab";
import { styled, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { pl } from "date-fns/locale";
import { VFC } from "react";

// const DateField = styled(TextField)((props) => ({
//   "& .MuiFormLabel-root": {
//     color: props.error ? props.theme.palette.error.dark : undefined,
//   },
//   "& .MuiFormHelperText-root": {
//     color: props.error ? props.theme.palette.error.dark : undefined,
//   },
//   "& .MuiOutlinedInput-root fieldset": {
//     borderColor: props.error ? props.theme.palette.error.dark : undefined,
//   },
// }));

interface FormDateFieldProps {
  error?: boolean;
  helperText?: string;
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
}

export const FormDateField: VFC<FormDateFieldProps> = ({
  error,
  helperText,
  label,
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={pl}>
      <DatePicker
        mask="__.__.____"
        label={label}
        value={value}
        onChange={onChange}
        minDate={new Date()}
        renderInput={(params) => (
          <TextField
            size="small"
            error={error}
            helperText={helperText}
            disabled={true}
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};
