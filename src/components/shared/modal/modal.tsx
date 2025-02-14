"use client";

import { Button, Card, Icon } from "chak-blocks/plain";
import { modalStyles } from "./style.css";
import { useEffect, useRef } from "react";

type Props = { className?: string; children: React.ReactNode };

const Modal = ({ className, children }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!modalRef?.current?.open) {
    }
    modalRef.current?.showModal();
  });
  const handleCloseButton = () => {
    modalRef.current?.close();
  };

  return (
    <Card
      as="dialog"
      ref={modalRef}
      rounded
      className={`${modalStyles.self} ${className}`}
    >
      <Button
        variant="text"
        onClick={handleCloseButton}
        className={modalStyles.closeButton}
      >
        <Icon name="close" />
      </Button>
      {children}
    </Card>
  );
};

export default Modal;
