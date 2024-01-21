import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MailIcon from "../../images/Emailsmall.svg";
import PhoneSmallIcon from "../../images/phoneSmall.svg";
import styles from "./Contact.module.css";

export const ContactPage = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component={"div"}
            sx={{
              maxWidth: "500px",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            MAP
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={"div"}
            sx={{
              maxWidth: "500px",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                marginBottom: "20px",
              }}
            >
              Get in touch
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              sx={{
                marginBottom: "70px",
              }}
            >
              Don{"'"}t let lackluster technology slow you down.
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                marginBottom: "20px",
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body1"
              component={"p"}
              sx={{
                marginBottom: "20px",
                textAlign: "left",
              }}
            >
              73 Suzanne Lake Dr, St. <br /> Augustine FL 32095
            </Typography>

            <Box component={"div"}>
              <a href="mailto:m.suiunyshova@gmail.com" className={styles.link}>
                <MailIcon />
                m.suiunyshova@gmail.com
              </a>
              <a href="tel:904-587-9682" className={styles.link}>
                <PhoneSmallIcon />
                904-587-9682
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
