import * as Yup from "yup";

const FIELD_LIMIT = 50;

const textInputSchema = (fieldLimit: number) =>
  Yup.string().trim().max(fieldLimit, `Maximum length is ${fieldLimit}`);

export const eventFormValidationSchema = Yup.object({
  firstName: textInputSchema(FIELD_LIMIT)
    .matches(/^[a-zA-Z]+[a-zA-Z\s]*$/, {
      message: "First name must contain only letters and spaces",
      excludeEmptyString: true,
    })
    .required("Required"),
  lastName: textInputSchema(FIELD_LIMIT)
    .matches(/^[a-zA-Z-]+$/, {
      message: "Last name must contain only letters and hypens",
      excludeEmptyString: true,
    })
    .required("Required"),
  email: textInputSchema(FIELD_LIMIT)
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, {
      message: "Invalid email address",
      excludeEmptyString: true,
    })
    .required("Required"),
  date: Yup.date()
    .min(new Date(), "Date must be today or older")
    .required("Required")
    .nullable()
    .typeError("Invalid date"),
});
