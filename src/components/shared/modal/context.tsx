import { createContext, useContext } from "react";

export type ModalContextValues = {
  open: ({ content }: { content: React.ReactNode }) => void;
  close: () => void;
};

export const ModalContext = createContext<ModalContextValues>({
  open: () => {},
  close: () => {},
});

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("ModalProvider 안에서 사용해주세요.");
  }

  return context;
};

export default ModalContext;
