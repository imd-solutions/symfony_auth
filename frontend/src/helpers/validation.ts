export const validateValues = (inputValues: any) => {
  const errors: any = {};
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (inputValues.name?.length === 0) {
    errors.name = "Please complete the name field";
  }
  if (inputValues.name?.length > 0 && inputValues.name?.length < 2) {
    errors.name = "Name is too short";
  }
  if (!inputValues.email.match(validEmail)) {
    errors.email = "Invalid email address";
  }
  if (inputValues.email.length === 0) {
    errors.email = "Please complete the email field.";
  }
  if (inputValues.password.length === 0) {
    errors.password = "Please complete the password field.";
  }
  if (inputValues.email.length > 0 && inputValues.email.length < 5) {
    errors.email = "Email is too short";
  }
  if (inputValues.password.length === 0) {
    errors.password = "Please complete the password field";
  }
  if (inputValues.password.length > 0 && inputValues.password.length < 6) {
    errors.password = "Confirm Password is too short";
  }

  if (inputValues.confirm_password?.length === 0) {
    errors.confirm_password = "Please complete the confirm password field";
  }
  if (
    inputValues.confirm_password?.length > 0 &&
    inputValues.confirm_password?.length < 6
  ) {
    errors.confirm_password = "Confirm Password is too short";
  }

  if (
    inputValues.confirm_password &&
    inputValues.password !== inputValues.confirm_password
  ) {
    errors.confirm_password = "Passwords do not match. Please try again.";
  }
  return errors;
};
