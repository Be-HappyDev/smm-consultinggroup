import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Section.module.css";

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
  children: ReactNode
}

export const Section = ({ children, ...rest }: Props) => {
  return <section {...rest} className={styles.section}>{children}</section>;
};
