"use client";

import { gray } from "@/constants/colors";
import { Button, Icon } from "chak-blocks/plain";
import { logoutButtonStyles } from "./style.css";

const LogoutButton = ({ className }: { className?: string }) => {
  return (
    <Button
      theme="dark"
      variant="text"
      className={`${className} ${logoutButtonStyles.self}`}
    >
      로그아웃 <Icon name="logout" size={20} color={gray[600]} />
    </Button>
  );
};

export default LogoutButton;
