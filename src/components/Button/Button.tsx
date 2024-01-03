import { FC } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button: FC<ButtonProps> = ({ children, className, variant = "small", ...props }) => (
  <button
    className={cn(styles["button"], styles["accent"], className, {
      [styles["small"]]: variant === "small",
      [styles["big"]]: variant === "big",
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
