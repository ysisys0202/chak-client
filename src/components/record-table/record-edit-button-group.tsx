import { Button } from "chak-blocks/plain";
import ButtonGroup from "./button-group";

const RecordEditButtonGroup = ({ className }: { className?: string }) => {
  return (
    <ButtonGroup className={className}>
      <Button theme="primary">저장하기</Button>
      <Button theme="dark" variant="outlined">
        뒤로가기
      </Button>
    </ButtonGroup>
  );
};

export default RecordEditButtonGroup;
