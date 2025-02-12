import { Typography } from "chak-blocks/plain";
import { homeSectionHeaderStyles } from "./style.css";

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

const HomeSectionHeader = ({ title, description }: Props) => {
  return (
    <header>
      <Typography as="h2" variant="title5">
        {title}
      </Typography>
      {description && (
        <Typography
          theme="tertiary"
          className={homeSectionHeaderStyles.description}
        >
          {description}
        </Typography>
      )}
    </header>
  );
};

export default HomeSectionHeader;
