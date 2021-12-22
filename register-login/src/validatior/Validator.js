export default function validateInfo(form) {
  let errors = {};

  if (!form.firstName.trim()) {
    errors.firstName = "Firstname required";
  }
  if (!form.lastName.trim()) {
    errors.lastName = "Lastname required";
  }
  if (!form.username.trim()) {
    errors.username = "Username required";
  }

  if (!form.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "Email address is invalid";
  }
  if (!form.password) {
    errors.password = "Password is required";
  } else if (form.password.length < 4) {
    errors.password = "Password needs to be 4 characters or more";
  }

  return errors;
}
