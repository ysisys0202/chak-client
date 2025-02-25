import { combineClassNames } from "@/util/common";

type Props = { className?: string; children: React.ReactNode };

const HomeSection = ({ className, children }: Props) => {
  const classNames = combineClassNames(className);
  return <section className={classNames}>{children}</section>;
};

export default HomeSection;
