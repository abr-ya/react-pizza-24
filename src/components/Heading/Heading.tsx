import cn from "classnames";

import styles from "./Heading.module.css";
import { HeadingProps } from "./Heading.props";

const Heading = ({ children, className, variant = "h1", ...props }: HeadingProps) => {
  const allClasses = cn(className, styles.heading, styles[variant]);
  const Tag = variant;

  return (
    <Tag className={allClasses} {...props}>
      {children}
    </Tag>
  );
};

export default Heading;
