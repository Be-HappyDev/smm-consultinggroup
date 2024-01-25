import { cstyles } from "@/configs/globalStyle";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import picturse from "../../images/img/Telecom.webp";
import picturse2 from "../../images/img/internetAndConnectivity.webp";

import AppIcon from "../../images/application.svg";
import PhoneIphoneIcon from "../../images/phoneiphone.svg";

import styles from "./AboutPage.module.css";
import { Container } from "@mui/system";
import { Section } from "@/components/Section/Section";

export const AboutPage = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          component={"div"}
          sx={{
            maxWidth: "620px",
            margin: "0 auto",
            padding: "50px 0",
          }}
        >
          <Typography
            variant="h2"
            component={"h2"}
            sx={{
              textAlign: "center",
              fontWeight: cstyles.fontWeights.bold,
              fontSize: { xs: "20px", md: "40px" },
              marginBottom: "20px",
            }}
          >
            {
              '"We assess your business, its processes and goals so we can offer best-fit solutions."'
            }
          </Typography>
          <Typography
            variant="h5"
            component={"h5"}
            sx={{
              textAlign: "center",
              fontWeight: cstyles.fontWeights.bold,
              fontSize: "20px",
              marginBottom: "60px",
              color: cstyles.colors.primary,
            }}
          >
            Smm Consulting Group
          </Typography>
          <Typography
            variant="h5"
            component={"h5"}
            sx={{
              textAlign: "left",
              lineHeight: "40px",
              fontWeight: cstyles.fontWeights.medium,
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            We strive to create lasting relationships with our clients - and
            have been successful in doing so. You can rest assured that we are
            able to take care of everything you need.
          </Typography>
        </Box>
      </Container>

      <Box component={"div"} className={styles.aboutBanner}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box component={"div"} className={styles.Banner}>
              <Image src={picturse} alt="about banner" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component={"div"} className={styles.blockRight}>
              <Typography
                variant="h3"
                component={"h3"}
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: { xs: "25px", md: "50px" },
                  fontSize: { xs: "25px", md: "50px" },
                }}
              >
                We offer the exact IT your business needs
              </Typography>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "space-between" },
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      width: "72px",
                      height: "72px",
                      backgroundColor: "#004CA1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    <AppIcon />
                  </Box>
                </Box>

                <Box
                  component={"div"}
                  sx={{
                    maxWidth: "450px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"h5"}
                    sx={{
                      marginBottom: "10px",
                      fontWeight: "bold",
                      fontSize: { xs: "15px", md: "20px" },

                      color: "#fff",
                    }}
                  >
                    True Full-Service Technology Partner
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"p"}
                    sx={{
                      marginBottom: "10px",
                      color: "#fff",
                      fontSize: { xs: "13px", md: "17px" },
                    }}
                  >
                    We ensure that we can provide the full range of services.
                    This way, you can partner up with us comfortably, knowing we
                    are able to anticipate, respond and manage all IT-related
                    scenarios.
                  </Typography>
                </Box>
              </Box>

              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-between" },
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "center", md: "space-between" },
                }}
              >
                <Box
                  component={"div"}
                  sx={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component={"div"}
                    sx={{
                      width: "72px",
                      height: "72px",
                      backgroundColor: "#004CA1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "100%",
                    }}
                  >
                    <PhoneIphoneIcon />
                  </Box>
                </Box>

                <Box
                  component={"div"}
                  sx={{
                    maxWidth: "450px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component={"h5"}
                    sx={{
                      marginBottom: "10px",
                      fontWeight: "bold",
                      fontSize: { xs: "15px", md: "20px" },
                      color: "#fff",
                    }}
                  >
                    Best-Fit Technology Implementations
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"p"}
                    sx={{
                      marginBottom: "10px",
                      color: "#fff",
                      fontSize: { xs: "13px", md: "17px" },
                    }}
                  >
                    What makes us stand out from other service providers is our
                    experience in analyzing business processes and selecting the
                    right technology to enhance profitability and ease of use.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Section>
        <Box component={"div"} className={styles.compensateLayout}>
          <Box component={"div"} className={styles.leftPhotoBlock}>
            <Image src={picturse2} alt={"technicians"} />
          </Box>
          <Box component={"div"} className={styles.rightContentBlock}>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                color: "#0053AF",
                marginBottom: "10px",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              A story about us
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: { xs: "16px", md: "30px" },
              }}
            >
              Decades of experience in offering perfect-fit solutions
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: { xs: "12px", md: "15px" }, fontWeight: "600" }}
            >
              SMM Consulting Group is a locally owned Technology Services
              Provider, offering a full range of IT services to business of all
              sizes and industries in United States.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: { xs: "12px", md: "15px" }, fontWeight: "600" }}
            >
              We work to make technology easy to understand and effortless to
              apply to business and personal needs.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: { xs: "12px", md: "15px" }, fontWeight: "600" }}
            >
              Starting with your technology pain points, we identify where we
              can help. You can count on us to suggest solutions which make you
              more profitable and which make your business processes more
              streamlined.
            </Typography>
          </Box>
        </Box>
      </Section>
    </>
  );
};
