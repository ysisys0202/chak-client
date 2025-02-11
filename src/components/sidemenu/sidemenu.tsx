import Link from "next/link";
import path from "@/constants/path";
import { IconProps, Typography } from "chak-blocks/plain";
import SidemenuItem from "@/components/sidemenu/sidemenu-item";
import UserProfile from "@/components/user-profile/user-profile";
import { sidemenuStyles } from "./style.css";
import { visuallyHidden } from "@/styles/util.css";
import LogoutButton from "../buttons/logout-button/logoutButton";
type SideMenu = {
  id: string;
  label: string;
  icon: IconProps["name"];
  path: string;
};

const sideMenuList: SideMenu[] = [
  {
    id: "home",
    label: "홈",
    icon: "home",
    path: path.home,
  },
  {
    id: "my-record",
    label: "나의 기록",
    icon: "book",
    path: path.home,
  },
];

const Sidemenu = ({ className }: { className: string }) => {
  return (
    <aside className={`${sidemenuStyles.self} ${className}`}>
      <Link href={path.home} className={sidemenuStyles.logo}>
        <Typography variant="title4" strong>
          Chak
        </Typography>
      </Link>
      <UserProfile nickname="김유저" className={sidemenuStyles.userProfile} />
      <nav className={sidemenuStyles.nav}>
        <h2 className={visuallyHidden}>Chak 서비스 메뉴</h2>
        <ul>
          {sideMenuList.map(({ id, label, path, icon }) => (
            <SidemenuItem
              key={id}
              id={id}
              label={label}
              path={path}
              icon={icon}
            />
          ))}
        </ul>
      </nav>
      <LogoutButton className={sidemenuStyles.logoutButton} />
    </aside>
  );
};

export default Sidemenu;
