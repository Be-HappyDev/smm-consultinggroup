import { cstyles } from "@/configs/globalStyle";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import AppIcon from "../../image/application.svg";
import PhoneIphoneIcon from "../../image/phoneiphone.svg";

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
              '"We thoroughly analyze your business, its operations and objectives in order to provide tailored solutions that align perfectly with your needs."'
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
            Our track record speaks for itself when it comes to building
            enduring partnerships with our clients. You can have complete peace
            of mind knowing that we have the expertise and capabilities to
            handle all your requirements effortlessly.
          </Typography>
        </Box>
      </Container>

      <Box component={"div"} className={styles.aboutBanner}>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Box component={"div"} className={styles.Banner}>
              <img src={"/images/img/Telecom.webp"} alt="about banner" />
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
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                Our IT solutions are tailored to meet your specific business
                requirements
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
                    As a comprehensive technology partner, we guarantee to cater
                    to all your IT needs. With our expertise, you can trust us
                    to be proactive, responsive, and efficient in managing every
                    aspect of your IT systems.
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
                    Optimal Technology Integration Our unique advantage lies in
                    our ability to assess your business operations and recommend
                    the perfect technology solutions that not only boost your
                    profitability, but also streamline your
                    day-to-day operations.
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
            <img
              src={"/images/img/internetAndConnectivity.webp"}
              alt={"technicians"}
            />
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
              With years of honed expertise
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "15px",
                fontSize: { xs: "12px", md: "15px" },
                fontWeight: "600",
              }}
            >
              SMM Consulting Group provides tailored solutions to meet your
              every need. As a locally owned Technology Services Provider, we
              offer a comprehensive range of IT services to businesses across
              various industries in the United States.
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "15px",
                fontSize: { xs: "12px", md: "15px" },
                fontWeight: "600",
              }}
            >
              Our mission is to simplify technology, making it not only
              comprehensible but also seamlessly applicable to both your
              business and personal endeavors. By pinpointing your specific pain
              points, we determine where our assistance will be invaluable.
              Trust us to recommend solutions that enhance your profitability
              and streamline your business processes.
            </Typography>
          </Box>
        </Box>
      </Section>
    </>
  );
};
