import { Typography } from "chak-blocks/plain";
import { sectionHeaderStyles } from "./style.css";

type Props = {
  title: React.ReactNode;
  description?: React.ReactNode;
};

const SectionHeader = ({ title, description }: Props) => {
  return (
    <header>
      <Typography as="h2" variant="title5" color="#32302A">
        {title}
      </Typography>
      {description && (
        <Typography
          theme="tertiary"
          className={sectionHeaderStyles.description}
        >
          {description}
        </Typography>
      )}
    </header>
  );
};

export default SectionHeader;
