import { Typography } from "chak-blocks/plain";
import Image from "next/image";
import { userProfileStyles } from "./style.css";
import { gray } from "@/constants/colors";

type ProfileImageProps = {
  imageUrl?: string;
  nickname: string;
  className?: string;
};

const UserProfile = ({ imageUrl, nickname, className }: ProfileImageProps) => {
  return (
    <div className={`${userProfileStyles.self} ${className}`}>
      <div className={userProfileStyles.profileImage}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={`${name}님의 프로필 이미지`}
            width={40}
            height={40}
          />
        )}
      </div>
      <Typography variant="title5" color={gray[500]}>
        {nickname}
      </Typography>
    </div>
  );
};

export default UserProfile;
