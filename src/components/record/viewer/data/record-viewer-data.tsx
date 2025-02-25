import { combineClassNames } from "@/util/common";
import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordData = ({ className, children }: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return <div className={classNames}>{children}</div>;
};

export default RecordData;
