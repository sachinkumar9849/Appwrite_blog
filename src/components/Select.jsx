import { useId } from "react";

const Select = ({ option, lable, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <>
      {lable && <lable htmFor={id}></lable>}
      <select id={id} {...props} ref={ref} className={`${className}`}>
        {option?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default React.forwardRef(Select);
