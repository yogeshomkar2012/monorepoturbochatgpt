// BaseCard.jsx
const BaseCard = ({ children, className = '' }) => (
  <div
    className={`bg-white shadow-sm rounded-lg border border-slate-200 ${className}`}
  >
    {children}
  </div>
);

// MUST attach these to the function object
BaseCard.Header = ({ title, action }) => (
  <div className="flex items-center justify-between p-4 border-b border-slate-100">
    <div className="font-semibold">{title}</div>
    {action}
  </div>
);

BaseCard.Body = ({ children }) => <div className="p-4">{children}</div>;

export default BaseCard; // Default export
