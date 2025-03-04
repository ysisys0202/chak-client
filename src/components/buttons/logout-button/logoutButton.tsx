"use client";

import { shades } from "@/constants/colors";
import { Button, Icon } from "chak-blocks/plain";
import { logoutButtonStyles } from "./style.css";
import { useLogoutMutation } from "@/query/auth";

const LogoutButton = ({ className }: { className?: string }) => {
  const { mutate, isPending } = useLogoutMutation();
  const handleLogout = () => {
    mutate();
  };
  return (
    <Button
      theme="dark"
      variant="text"
      onClick={handleLogout}
      disabled={isPending}
      className={`${className} ${logoutButtonStyles.self}`}
    >
      로그아웃 <Icon name="logout" size={20} color={shades[600]} />
    </Button>
  );
};

export default LogoutButton;
