import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import MailIcon from "../../image/Emailsmall.svg";
import PhoneSmallIcon from "../../image/phoneSmall.svg";
import styles from "./Contact.module.css";

export const ContactPage = () => {
  return (
    <Container maxWidth="xl">
      <Box
        component={"div"}
        sx={{
          padding: "50px 0",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              component={"div"}
              sx={{
                width: "100%",
                maxWidth: "500px",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.8203674389247!2d-81.55075612545569!3d30.185124911893404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5cb6d5b84abff%3A0x6b9ab56b45d412d8!2s10175%20Fortune%20Pkwy%20UNIT%201103%2C%20Jacksonville%2C%20FL%2032256%2C%20%D0%A1%D0%A8%D0%90!5e0!3m2!1sru!2skg!4v1705946732020!5m2!1sru!2skg"
                style={{ border: 0, width: '100%',  height: "450px" }}
                loading="lazy"
                // referrerpolicy={"no-referrer-when-downgrade"}
              ></iframe>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
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
                10175 Fortune Parkway Ste 1103 Jacksonville, FL 32256
              </Typography>

              <Box component={"div"}>
                <a
                  href="mailto:info@smmconsultinggroup.com"
                  className={styles.link}
                >
                  <MailIcon />
                  info@smmconsultinggroup.com
                </a>
                <a href="tel:+1(904)587-9682" className={styles.link}>
                  <PhoneSmallIcon />
                  +1(904)587-9682
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
