import { Card } from "chak-blocks/plain";
import { homeSectionBodyStyles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const HomeSectionBody = ({ className, children }: Props) => {
  return (
    <Card
      as="div"
      rounded
      variant="filled"
      className={`${homeSectionBodyStyles.self} ${className}`}
    >
      {children}
    </Card>
  );
};

export default HomeSectionBody;
