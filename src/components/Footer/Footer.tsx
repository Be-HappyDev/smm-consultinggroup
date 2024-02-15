import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.css";
import MailIcon from "../../image/Emailsmall.svg";
import PhoneSmallIcon from "../../image/phoneSmall.svg";

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
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            marginBottom: "20px",
            textAlign: "center  ",
            color: "#fff",
            fontSize: "20px",
          }}
        >
          Maira Suiunyshova CEO
        </Typography>
        <Box component={"div"} className={styles.footerContanctInfo}>
          <a href="mailto:info@smmconsultinggroup.com" className={styles.link}>
            <MailIcon />
            info@smmconsultinggroup.com
          </a>
          <a href="tel:+18003461745" className={styles.link}>
            <PhoneSmallIcon />
            +1(800)-346-1745
          </a>
          <Typography
            variant="body1"
            component={"p"}
            sx={{
              marginBottom: "20px",
              textAlign: { xs: "center", md: "left" },
              color: "#fff",
            }}
          >
            10175 Fortune Parkway Ste 1103 Jacksonville, FL 32256
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};
