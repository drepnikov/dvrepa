import * as React from "react";
import Link from "next/link";

interface IMyLinkProps {
  to: string;
  title: string;
  className?: string;
}

const MyLink: React.FC<IMyLinkProps> = ({ to, title, className }) => {
  return (
    <Link href={to}>
      <a className={className}>{title}</a>
    </Link>
  );
};

export { MyLink };
