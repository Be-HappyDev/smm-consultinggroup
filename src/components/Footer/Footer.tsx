import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import MailIcon from "../../images/Emailsmall.svg";
import PhoneSmallIcon from "../../images/phoneSmall.svg";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Box className={styles.footerContact}>
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            marginBottom: "20px",
            textAlign: "center  ",
            color: "#fff",
          }}
        >
          Contact
        </Typography>
        <Box component={"div"} className={styles.footerContanctInfo}>
          <a href="mailto:m.suiunyshova@gmail.com" className={styles.link}>
            <MailIcon />
            m.suiunyshova@gmail.com
          </a>
          <a href="tel:904-587-9682" className={styles.link}>
            <PhoneSmallIcon />
            904-587-9682
          </a>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              marginBottom: "20px",
              textAlign: "left",
              color: "#fff",
            }}
          >
            73 Suzanne Lake Dr, St. <br /> Augustine FL 32095
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
