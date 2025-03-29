import React from "react";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function BeforeLoginLayout({ children, modal }: Props) {
  return (
    <div
      className="w-dvw
      h-dvh
      flex"
    >
      {children}
      {modal}
    </div>
  );
}
