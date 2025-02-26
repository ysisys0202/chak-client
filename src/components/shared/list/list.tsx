import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const List = ({ className, children }: Props) => {
  return <ul className={`${className}`}>{children}</ul>;
};

export default List;
