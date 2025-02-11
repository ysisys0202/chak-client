import Sidemenu from "@/components/sidemenu/sidemenu";
import { sidemenuLayoutStyles } from "./style.css";

const SidemenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={sidemenuLayoutStyles.self}>
      <Sidemenu className={sidemenuLayoutStyles.sidemenu} />
      <div className={sidemenuLayoutStyles.content}> {children}</div>
    </div>
  );
};

export default SidemenuLayout;
