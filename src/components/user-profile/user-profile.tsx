import Image from "next/image";
import { Typography } from "chak-blocks/plain";
import { getAuthServer } from "@/api/server/auth";
import { shades } from "@/constants/colors";
import { styles } from "./style.css";

type ProfileImageProps = {
  className?: string;
};

const UserProfile = async ({ className }: ProfileImageProps) => {
  const user = await getAuthServer();
  return (
    <div className={`${styles.self} ${className}`}>
      <div className={styles.profileImage}>
        <Image
          src={user?.profileImage || "/image/default-user-profile.png"}
          alt={`${user?.nickname}님의 프로필 이미지`}
          fill
        />
      </div>
      <Typography variant="title5" color={shades[600]}>
        {user?.nickname}
      </Typography>
    </div>
  );
};

export default UserProfile;
