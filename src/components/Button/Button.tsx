import { FC } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

const Button: FC<ButtonProps> = ({ children, className, appearence = "small", ...props }) => (
  <button
    className={cn(styles["button"], styles["accent"], className, {
      [styles["small"]]: appearence === "small",
      [styles["big"]]: appearence === "big",
    })}
    {...props}
  >
    {children}
  </button>
);

export default Button;
