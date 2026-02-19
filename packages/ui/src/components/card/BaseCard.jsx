// BaseCard.jsx
export default function BaseCard({ children, className = '', ...props }) {
  const baseStyle = `bg-white rounded-lg border border-gray-200 shadow-sm p-4 ${className}`;
  return (
    <div className={baseStyle} {...props}>
      {children}
    </div>
  );
}
