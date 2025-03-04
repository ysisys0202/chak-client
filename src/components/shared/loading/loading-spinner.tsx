import { Typography } from "chak-blocks/plain";
import { shades } from "@/constants/colors";
import { combineClassNames } from "@/util/common";
import { styles } from "./loading-spinner.css";

type Props = {
  size?: number;
  message?: string;
  className?: string;
};

const Spinner = ({ size = 40, message, className }: Props) => {
  const classNames = combineClassNames(className, styles.self);

  return (
    <div className={classNames}>
      <svg
        className={styles.svg}
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
      {message && (
        <Typography variant="text2" color={shades[600]}>
          {message}
        </Typography>
      )}
    </div>
  );
};

export default Spinner;
