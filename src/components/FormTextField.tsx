import { TextField } from "@mui/material";
import { ChangeEvent, VFC } from "react";

interface FormTextFieldProps {
  error?: boolean;
  helperText?: boolean | string;
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent) => void;
}

export const FormTextField: VFC<FormTextFieldProps> = ({
  error,
  helperText,
  id,
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <TextField
      fullWidth
      id={id}
      size="small"
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
};
