const Button = ({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
  ...props
}) => {
  return (
    <button className={`py-3 ${bgColor} ${textColor} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
