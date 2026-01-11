export default function Button({ children, onClick, type = "button" }) {
  const baseStyle =
    "cursor-pointer capitalize px-4 py-2 font-medium transition rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  return (
    <button type={type} onClick={onClick} className={baseStyle}>
      {children}
    </button>
  );
}
