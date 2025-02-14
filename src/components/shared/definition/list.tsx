import DefinitionItem from "./item";
import DefinitionTerm from "./term";
import DefinitionDescription from "./description ";
import { styles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const DefinitionList = ({ className, children }: Props) => {
  return <dl className={`${styles.list} ${className}`}>{children}</dl>;
};

DefinitionList.Item = DefinitionItem;
DefinitionList.Term = DefinitionTerm;
DefinitionList.Description = DefinitionDescription;

export default DefinitionList;
