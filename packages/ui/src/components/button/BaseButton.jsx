const BaseButton = ({ className = "", ...props }) => {
  const baseStyle =
    "cursor-pointer capitalize px-4 py-2 font-medium transition rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  return <button className={`${baseStyle} ${className}`} {...props} />;
};

export default BaseButton;
