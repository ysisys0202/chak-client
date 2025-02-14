import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const ListRow = ({ className, children }: Props) => {
  return <li className={`${styles.row} ${className}`}>{children}</li>;
};

export default ListRow;
