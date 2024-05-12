export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  //   const isFullName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fullName);

  if (!isEmailValid) return "Email is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
