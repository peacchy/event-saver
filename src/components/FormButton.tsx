import { Button } from "@mui/material";
import { VFC } from "react";

interface FormButtonProps {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
}

export const FormButton: VFC<FormButtonProps> = ({ label, type }) => {
  return (
    <Button color="primary" variant="contained" fullWidth type={type}>
      {label}
    </Button>
  );
};
