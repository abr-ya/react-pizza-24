import { HTMLAttributes, ReactNode } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3";
}
