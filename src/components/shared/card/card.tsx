import { Card as CardBase } from "chak-blocks/plain";
import { styles } from "./style.css";
import { combineClassNames } from "@/util/common";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
  const classNames = combineClassNames(className, styles.self);
  return (
    <CardBase variant="filled" rounded className={classNames}>
      {children}
    </CardBase>
  );
};

export default Card;
