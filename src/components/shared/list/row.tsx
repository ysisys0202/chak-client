import { styles } from "./style.css";

type Props = {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
};

const ListRow = ({
  leftContent,
  centerContent,
  rightContent,
  className,
}: Props) => {
  return (
    <li className={`${styles.row} ${className}`}>
      {leftContent && (
        <div className="content-area content-area-left">{leftContent}</div>
      )}
      {centerContent && (
        <div className="content-area content-area-center">{centerContent}</div>
      )}
      {rightContent && (
        <div className="content-area content-area-right">{rightContent}</div>
      )}
    </li>
  );
};

export default ListRow;
