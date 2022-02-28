import { validateYupSchema } from "formik";
import { ValidationError } from "yup";
import { EventFormValues } from "../EventForm";
import { eventFormValidationSchema } from "../eventFormValidationSchema";

const validFormInput: EventFormValues = {
  date: new Date(Date.now() + 100000),
  firstName: "Name",
  lastName: "Surname",
  email: "test@abc.com",
};

it("should not throw error for valid form input", async () => {
  const validatePromise = validateYupSchema(
    validFormInput,
    eventFormValidationSchema
  );

  await expect(validatePromise).resolves.toBeTruthy();
});

describe("First name input", () => {
  it("should throw validation error about first name format", async () => {
    const firstName = "Name123";

    const validatePromise = validateYupSchema(
      { ...validFormInput, firstName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("First name must contain only letters and spaces")
    );
  });

  it("should throw validation error about first name length", async () => {
    const firstName = "a".repeat(60);

    const validatePromise = validateYupSchema(
      { ...validFormInput, firstName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Maximum length is 50")
    );
  });

  it("should throw validation error about first name being empty", async () => {
    const firstName = "";

    const validatePromise = validateYupSchema(
      { ...validFormInput, firstName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Required")
    );
  });
});

describe("Last name input", () => {
  it("should throw validation error about last name format", async () => {
    const lastName = "Surname%&@";

    const validatePromise = validateYupSchema(
      { ...validFormInput, lastName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Last name must contain only letters and hypens")
    );
  });

  it("should throw validation error about last name length", async () => {
    const lastName = "a".repeat(60);

    const validatePromise = validateYupSchema(
      { ...validFormInput, lastName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Maximum length is 50")
    );
  });

  it("should throw validation error about last name being empty", async () => {
    const lastName = "";

    const validatePromise = validateYupSchema(
      { ...validFormInput, lastName },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Required")
    );
  });
});

describe("Email address input", () => {
  it("should throw validation error about email address format", async () => {
    const email = "Surname%&@";

    const validatePromise = validateYupSchema(
      { ...validFormInput, email },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Invalid email address")
    );
  });

  it("should throw validation error about email address length", async () => {
    const email = `${"a".repeat(50)}@test.com`;

    const validatePromise = validateYupSchema(
      { ...validFormInput, email },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Maximum length is 50")
    );
  });

  it("should throw validation error about email address being empty", async () => {
    const email = "";

    const validatePromise = validateYupSchema(
      { ...validFormInput, email },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Required")
    );
  });
});

describe("Event date input", () => {
  it("should throw validation error about event date format", async () => {
    const date = new Date().setMonth(13);

    const validatePromise = validateYupSchema(
      { ...validFormInput, date },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Invalid date")
    );
  });

  it("should throw validation error about event date length", async () => {
    const date = new Date(Date.now() - 100000);

    const validatePromise = validateYupSchema(
      { ...validFormInput, date },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Date must be today or older")
    );
  });

  it("should throw validation error about event date being empty", async () => {
    const date = "";

    const validatePromise = validateYupSchema(
      { ...validFormInput, date },
      eventFormValidationSchema
    );

    await expect(validatePromise).rejects.toThrowError(
      new ValidationError("Required")
    );
  });
});
