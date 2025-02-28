import { combineClassNames } from "@/util/common";
import React, { SelectHTMLAttributes } from "react";
import { styles } from "./style.css";

const Select = ({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <select {...props} className={classNames}>
      {children}
    </select>
  );
};

export default Select;
