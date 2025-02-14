import { Button } from "chak-blocks/plain";
import { styles } from "./style.css";

type Props = {
  className: React.ReactNode;
  onSearch: (keyword: string) => void;
};

const Searchbar = ({ className }: Props) => {
  return (
    <div className={`${styles.self} ${className}`}>
      <input type="text" className={styles.input} />
      <Button
        variant="contained"
        theme="dark"
        size="sm"
        type="button"
        className={styles.button}
      >
        검색
      </Button>
    </div>
  );
};

export default Searchbar;
