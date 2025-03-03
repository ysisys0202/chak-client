import { ComponentType, ReactNode, Suspense } from "react";
import FullScreenLoader from "@/components/shared/loading/full-screen-loader";

const withSuspense = <Props extends object>(
  Component: ComponentType<Props>,
  fallback: ReactNode = <FullScreenLoader />
) => {
  const ContainerComponent: React.FC<Props> = ({ ...props }) => (
    <Suspense fallback={fallback}>
      <Component {...(props as Props)} />
    </Suspense>
  );

  ContainerComponent.displayName = `withSuspense(${
    Component.displayName || Component.name || "Component"
  })`;

  return ContainerComponent;
};

export default withSuspense;
