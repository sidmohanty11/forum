export const validateEmail = (value: string) => {
  let error = "";

  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }

  return error;
};

export const validatePassword = (value: string) => {
  let error = "";
  if (!value) {
    error = "Required";
  } else if (
    !/^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/.test(value)
  ) {
    error = "Invalid Password";
  }

  return error;
};

export const validateStringPresent = (value: string) => {
  let error = "";
  if (!value) {
    error = "Required";
  }
  return error;
};

export const validateRegNo = (value: string) => {
  let error = "";
  if (!value) {
    error = "Required";
  } else if (value.length !== 10) {
    error = "Not a valid Registration Number";
  }
  return error;
};
