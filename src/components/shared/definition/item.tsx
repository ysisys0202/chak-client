import { styles } from "./style.css";

type Props = {
  children: React.ReactNode;
};

const DefinitionItem = ({ children }: Props) => {
  return <div className={styles.item}>{children}</div>;
};

export default DefinitionItem;
