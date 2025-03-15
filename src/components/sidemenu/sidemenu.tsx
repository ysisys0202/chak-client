import Link from "next/link";
import Image from "next/image";
import { IconProps } from "chak-blocks/plain";
import path from "@/constants/path";
import SidemenuDimmed from "@/components/sidemenu/sidemenu-dimmed";
import SidemenuContainer from "@/components/sidemenu/sidemenu-container";
import SidemenuItem from "@/components/sidemenu/sidemenu-item";
import UserProfile from "@/components/user-profile/user-profile";
import LogoutButton from "@/components/buttons/logout-button/logoutButton";
import { visuallyHidden } from "@/styles/util.css";
import { sidemenuStyles } from "./style.css";

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
    path: path.record,
  },
];

const Sidemenu = ({ className }: { className: string }) => {
  return (
    <>
      <SidemenuContainer className={className}>
        <Link href={path.home} className={sidemenuStyles.logo}>
          <Image src="/image/logo.svg" alt="Chak" width={68} height={20} />
        </Link>
        <UserProfile className={sidemenuStyles.userProfile} />
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
      </SidemenuContainer>
      <SidemenuDimmed />
    </>
  );
};

export default Sidemenu;
