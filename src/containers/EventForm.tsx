import { Stack, styled } from "@mui/material";
import { useFormik } from "formik";
import { FormButton } from "../components/FormButton";
import { FormDateField } from "../components/FormDateField";
import { FormTextField } from "../components/FormTextField";
import { eventFormValidationSchema } from "./eventFormValidationSchema";

const EventSaver = styled("div")(({ theme }) => ({
  margin: theme.spacing(4),
}));

export interface EventFormValues {
  date: Date | null;
  email: string;
  firstName: string;
  lastName: string;
}

export const EventForm = () => {
  const { errors, touched, values, handleChange, handleSubmit, setFieldValue } =
    useFormik<EventFormValues>({
      initialValues: {
        date: null,
        email: "",
        firstName: "",
        lastName: "",
      },
      validationSchema: eventFormValidationSchema,
      onSubmit: (values) => alert(JSON.stringify(values)),
    });
  return (
    <EventSaver>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormTextField
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName ? errors.firstName : undefined}
            id="firstName"
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <FormTextField
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName ? errors.lastName : undefined}
            id="lastName"
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          <FormTextField
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email ? errors.email : undefined}
            id="email"
            label="Email address"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <FormDateField
            error={touched.date && Boolean(errors.date)}
            helperText={touched.date ? errors.date : undefined}
            label="Event Date"
            value={values.date}
            onChange={(date) => setFieldValue("date", date)}
          />
          <FormButton label="Submit" type="submit" />
        </Stack>
      </form>
    </EventSaver>
  );
};
