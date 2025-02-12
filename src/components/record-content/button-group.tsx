import { Button } from "chak-blocks/plain";
import { buttonGroupStyle } from "./style.css";

const ButtonGroup = ({ className }: { className: string }) => {
  return (
    <div className={`${className} ${buttonGroupStyle}`}>
      <Button theme="primary">수정하기</Button>
      <Button theme="error" variant="outlined">
        삭제하기
      </Button>
    </div>
  );
};

export default ButtonGroup;
