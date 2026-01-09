export default function BaseInput({ className = "", type = "text", ...props }) {
  const baseInputStyles = `border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
    className || ""
  }`;
  return (
    <input
      type={type}
      className={`${baseInputStyles} ${className}`}
      {...props}
    />
  );
}
