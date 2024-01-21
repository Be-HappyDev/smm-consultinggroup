import classNames from "classnames";
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./GridBox.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const GridBox = ({ children, className, ...rest }: Props) => {
  return (
    <div className={classNames(styles.GridBox, className)} {...rest}>
      {children}
    </div>
  );
};
