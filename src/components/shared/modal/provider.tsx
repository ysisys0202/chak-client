import { PropsWithChildren, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./modal";
import ModalContext from "./context";

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );

  const resetState = () => {
    setModalContent(null);
    setIsOpen(false);
  };

  const open = ({ content }: { content: React.ReactNode }) => {
    if (modalContent) {
      setModalContent(null);
    }
    setIsOpen(true);
    setModalContent(content);
  };

  const close = () => {
    resetState();
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        close,
      }}
    >
      {children}
      {isOpen &&
        modalContent &&
        createPortal(<Modal>{modalContent}</Modal>, document.body)}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
