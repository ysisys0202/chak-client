"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, Card, Icon } from "chak-blocks/plain";
import { modalStyles } from "./style.css";
import Dimmed from "@/components/shared/dimmed/dimmed";

type Props = {
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ onClose, className, children }: Props) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return createPortal(
    <Dimmed
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose?.();
        }
      }}
    >
      <Card rounded className={`${modalStyles.self} ${className}`}>
        <Button
          type="button"
          variant="text"
          onClick={() => {
            onClose?.();
          }}
          className={modalStyles.closeButton}
        >
          <Icon name="close" />
        </Button>
        {children}
      </Card>
    </Dimmed>,
    document.body
  );
};

export default Modal;
