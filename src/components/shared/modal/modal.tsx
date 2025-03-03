"use client";

import { createPortal } from "react-dom";
import { Button, Card, Icon } from "chak-blocks/plain";
import { modalStyles } from "./style.css";
import { useRef } from "react";
import Dimmed from "../dimmed/dimmed";

type Props = {
  onClose?: () => void;
  className?: string;
  children: React.ReactNode;
};

const Modal = ({ onClose, className, children }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    onClose?.();
  };

  return createPortal(
    <Dimmed
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <Card
        ref={modalRef}
        rounded
        className={`${modalStyles.self} ${className}`}
      >
        <Button
          variant="text"
          onClick={handleClose}
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
