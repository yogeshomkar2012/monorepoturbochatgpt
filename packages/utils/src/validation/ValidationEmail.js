const ValidationEmail = (email) => {
  if (!email.trim()) {
    return "Email Is Required";
  }
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(email)) {
    return "EnValid Email Format";
  }
  return "";
};
export default ValidationEmail;
