import Link from "next/link";
import { Icon, IconProps, Typography } from "chak-blocks/plain";
import { sidemenuItemStyles } from "./style.css";

type Props = {
  id: string;
  path: string;
  label: string;
  icon: IconProps["name"];
  onClick: () => void;
};

const SidemenuItem = ({ path, label, icon, onClick }: Props) => {
  return (
    <li>
      <Link href={path} onClick={onClick} className={sidemenuItemStyles.link}>
        <Icon name={icon} size={20} />
        <Typography variant="title5" theme="tertiary">
          {label}
        </Typography>
      </Link>
    </li>
  );
};

export default SidemenuItem;
