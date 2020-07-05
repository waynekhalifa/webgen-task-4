export function validateLogin(values) {
  const errors = {};
  // email field
  if (!values.email) {
    errors.email = "Email is a required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password
  if (!values.password) {
    errors.password = "Password is a required field";
  } else if (values.password.length < 6) {
    errors.password = "Password must at least 6 characters";
  }

  return errors;
}

export function validateRegister(values) {
  const errors = {};
  // name
  if (!values.name) {
    errors.name = "Full Name is a required field";
  }

  // email field
  if (!values.email) {
    errors.email = "Email is a required field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password
  if (!values.password) {
    errors.password = "Password is a required field";
  } else if (values.password.length < 6) {
    errors.password = "Password must at least 6 characters";
  }

  return errors;
}
