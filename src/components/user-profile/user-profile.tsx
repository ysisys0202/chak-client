"use client";

import { Typography } from "chak-blocks/plain";
import Image from "next/image";
import { shades } from "@/constants/colors";
import { useAuth } from "@/providers/auth";
import { styles } from "./style.css";

type ProfileImageProps = {
  className?: string;
};

const UserProfile = ({ className }: ProfileImageProps) => {
  const { user } = useAuth();
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
