import { combineClassNames } from "@/util/common";
import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const RecordCardContainer = ({ className, children }: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return <ul className={classNames}>{children}</ul>;
};

export default RecordCardContainer;
