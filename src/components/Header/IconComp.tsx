import MailIcon from "../../images/Emailsmall.svg";
import IphoneIcon from "../../images/phoneSmall.svg";
import styles from "./Header.module.css";

export const IconComp = () => {
  return (
    <>
      <a className={styles.link} href="mailto:m.suiunyshova@gmail.com">
        <MailIcon />
      </a>
      <a className={styles.link} href="tel:904-587-9682">
        <IphoneIcon />
      </a>
    </>
  );
};
