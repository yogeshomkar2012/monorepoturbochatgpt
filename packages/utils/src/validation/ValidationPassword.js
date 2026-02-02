const ValidationPassword = (password) => {
  if (!password.trim()) return "Password Is Required";
  if (password.trim().length < 6)
    return "Password Must Be Atleast 6 charecters";
  if (!/[A-Z]/.test(password)) return "Must include an uppercase letter";
  if (!/[a-z]/.test(password)) return "Must include a lowercase letter";
  if (!/[0-9]/.test(password)) return "Must include at least one number";
  if (!/[@$!%*?&#]/.test(password)) return "Must include a symbol (@$!%*?&)";
};
export default ValidationPassword;
