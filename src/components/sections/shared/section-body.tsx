import { Card } from "chak-blocks/plain";
import { background } from "@/constants/colors";
import { sectionBodyStyles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SectionBody = ({ className, children }: Props) => {
  return (
    <Card
      as="div"
      rounded
      variant="filled"
      color={background.ghost}
      className={`${sectionBodyStyles.self} ${className}`}
    >
      {children}
    </Card>
  );
};

export default SectionBody;
