import Sidemenu from "@/components/sidemenu/sidemenu";
import { sidemenuLayoutStyles } from "./style.css";
import { AuthProvider } from "@/providers/auth";

const SidemenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <div className={sidemenuLayoutStyles.self}>
        <Sidemenu className={sidemenuLayoutStyles.sidemenu} />
        <div className={sidemenuLayoutStyles.content}> {children}</div>
      </div>
    </AuthProvider>
  );
};

export default SidemenuLayout;
