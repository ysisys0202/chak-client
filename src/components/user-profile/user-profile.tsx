"use client";

import { Typography } from "chak-blocks/plain";
import Image from "next/image";
import { gray } from "@/constants/colors";
import { useAuth } from "@/providers/auth";
import { userProfileStyles } from "./style.css";
type ProfileImageProps = {
  className?: string;
};

const UserProfile = ({ className }: ProfileImageProps) => {
  const {
    user: { nickname, profileImage },
  } = useAuth();
  return (
    <div className={`${userProfileStyles.self} ${className}`}>
      <div className={userProfileStyles.profileImage}>
        <Image
          src={profileImage || "/image/default-user-profile.png"}
          alt={`${nickname}님의 프로필 이미지`}
          width={80}
          height={80}
        />
      </div>
      <Typography variant="title5" color={gray[500]}>
        {nickname}
      </Typography>
    </div>
  );
};

export default UserProfile;
