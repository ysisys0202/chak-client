import { Typography } from "chak-blocks/plain";
import { styles } from "./style.css";

type Props = {
  children: React.ReactNode;
};

const DefinitionTerm = ({ children }: Props) => {
  return (
    <Typography as="dt" variant="text3" className={styles.term}>
      {children}
    </Typography>
  );
};

export default DefinitionTerm;
