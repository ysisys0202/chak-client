import { sectionBodyStyles } from "./style.css";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const SectionBody = ({ className, children }: Props) => {
  return (
    <div className={`${sectionBodyStyles.self} ${className}`}>{children}</div>
  );
};

export default SectionBody;
