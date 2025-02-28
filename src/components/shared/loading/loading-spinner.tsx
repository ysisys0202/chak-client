import { combineClassNames } from "@/util/common";
import { styles } from "./loading-spinner.css";

type Props = {
  size?: number;
  className?: string;
};

const Spinner = ({ size = 40, className }: Props) => {
  const classNames = combineClassNames(className, styles.self);

  return (
    <svg
      className={classNames}
      width={size}
      height={size}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
};

export default Spinner;
