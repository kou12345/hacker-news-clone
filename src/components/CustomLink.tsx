import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const CustomLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      style={{
        textDecoration: "none",
        color: "white",
      }}
    >
      {props.children}
    </Link>
  );
};
