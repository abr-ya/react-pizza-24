import { forwardRef } from "react";
import cn from "classnames";

import styles from "./Search.module.css";
import { SearchProps } from "./Search.props";
import Icon from "./search-icon.svg";

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input({ isValid = true, className, ...props }, ref) {
  return (
    <div className={styles.wrapper}>
      <input
        ref={ref}
        className={cn(styles.input, className, {
          [styles["invalid"]]: isValid,
        })}
        {...props}
      />
      <img className={styles.icon} src={Icon} alt="search-icon" />
    </div>
  );
});

export default Search;
