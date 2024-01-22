import MailIcon from "../../images/Emailsmall.svg";
import IphoneIcon from "../../images/phoneSmall.svg";
import styles from "./Header.module.css";

export const IconComp = () => {
  return (
    <>
      <a className={styles.link} href="mailto:info@smmconsultinggroup.com">
        <MailIcon />
      </a>
      <a className={styles.link} href="tel:+1(904)587-9682 ">
        <IphoneIcon />
      </a>
    </>
  );
};
