"use client";

import { ToastProvider as Provider } from "chak-blocks/context";

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default ToastProvider;
