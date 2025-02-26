import { lineClamp } from "@/styles/util.css";
import { Typography } from "chak-blocks/plain";

type Props = {
  children: React.ReactNode;
};

const DefinitionDescription = ({ children }: Props) => {
  return (
    <Typography as="dd" variant="text3" className={lineClamp({ lines: 1 })}>
      {children}
    </Typography>
  );
};

export default DefinitionDescription;
