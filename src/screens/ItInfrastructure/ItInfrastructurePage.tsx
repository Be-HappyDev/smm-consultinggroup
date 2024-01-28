/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/Section/Section";
import { Box, List, ListItem, Typography } from "@mui/material";
import cn from "classnames";
import { cstyles } from "@/configs/globalStyle";
import styles from "./IT.module.css";
import AnaliticsIcon from "../../image/analytics.svg";
import IphoneIcon from "../../image/iphone.svg";
import { GridBox } from "@/components/LeftRightBox/GridBox";
import { Container } from "@mui/system";

export const ItInfrastructurePage = () => {
  return (
    <Container maxWidth="xl">
      <Section>
        <Box component={"div"} className={cn(styles.infrastructureHeading)}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              color: cstyles.colors.primary,
              fontWeight: cstyles.fontWeights.bold,
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            Speed, expertise and value
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: cstyles.fontWeights.bold,
              fontSize: { md: "74px", sm: "54px", xs: "22px" },
              marginBottom: "20px",
            }}
          >
            Setting Up Infrastructure
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontWeight: cstyles.fontWeights.medium,
              maxWidth: "600px",
              fontSize: "20px",
              textAlign: "center",
              marginBottom: "24px",
            }}
          >
            Avoid frustrations, costly downtime and ensure maximum compatibility
            between your systems.
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontWeight: cstyles.fontWeights.medium,
              maxWidth: "600px",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            We assist in planning and installing your new IT infrastructure, so
            you can enjoy optimal results and value.
          </Typography>
        </Box>
      </Section>
      <Section id="projectPlanning">
        <GridBox className={cn(styles.projectPlanning)}>
          <div className={styles.projectPlanningPhoto}>
            <img src="/images/img/planning.webp" alt="planning" />
            <div className={styles.infoBox}>
              <div className={styles.infoBoxItem}>
                <AnaliticsIcon />
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.medium,
                    fontSize: "17px",
                  }}
                >
                  Maximum value/investment
                </Typography>
              </div>
              <div className={styles.infoBoxItem}>
                <IphoneIcon />
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.medium,
                    fontSize: "17px",
                  }}
                >
                  We know which technology is compatible with another
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.projectPlanningContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h4"
              component={"h4"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Project planning
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              We learn your business, we offer the best solutions available to
              fit your current need and pain points and work towards making sure
              you are happy and everything has been handled in a timely manner
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              We work with clients through the whole process and manage
              projects, buildouts, cleanup of networks, servers rooms etc.
            </Typography>

            <List>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                Leverage new technology and processes
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                IT solutions that help you achieve your goals
              </ListItem>
            </List>
          </div>
        </GridBox>
      </Section>
      <Section id="hardware">
        <GridBox className={cn(styles.hardware)}>
          <div className={styles.hardwareContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "30px",
                marginBottom: "20px",
              }}
            >
              Computers, firewalls, WiFi, giant screens, etc.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              We sell and offer servers, desktops, laptops, printers and the
              full range of equipment to keep your business up to date with the
              latest technology.
            </Typography>
          </div>
          <div className={styles.hardwarePhoto}>
            <div className={styles.hardwareCard}>
              <div className={styles.hardwareImage}>
                <img src="/images/img/hardware.webp" alt="Hardware" />
              </div>
              <div className={styles.hardwareCardContent}>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{
                    color: "#81A094",
                  }}
                >
                  Delight in our
                </Typography>
                <Typography
                  variant="h4"
                  component={"h4"}
                  sx={{
                    fontSize: "40px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Hardware
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontSize: "17px",
                    fontWeight: cstyles.fontWeights.medium,
                  }}
                >
                  Our extensive experience across various industries allows us
                  to make design and performance suggestions that you and your
                  team are sure to love.
                </Typography>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="cloudSolutions">
        <GridBox className={cn(styles.cloudSolution)}>
          <div className={styles.cloudSolutionPhoto}>
            <img src="/images/img/CloudSolution.webp" alt="CloudSolution" />
        
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Cloud solutions and Remote Desktops
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              The new normal calls for new solutions. Our remote desktops allows
              your staff to work remotely, while you maintain control over your
              business.
            </Typography>
            <List>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                Work from any device, anywhere in the world
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Keep your data centralized and safe
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Easily grant and revoke access to new team members
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                If your building burns down, you are still operational - the
                same day
              </ListItem>
            </List>
          </div>
        </GridBox>
      </Section>
      <Section id="telephonyAndVoIP">
        <GridBox className={cn(styles.telephonyVoIP)}>
          <div className={styles.telephonyVoIPContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Telephony and VoIP
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              Most premises-based PBX products are typically proprietary, carry
              annual service contracts, and require hardware replacement/updates
              every two to three years. Eliminate these drawbacks hosted VoIP!
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              Hosted VoIP is the better and long-term option for high-quality
              business phone service especially for small to medium-sized
              businesses.
            </Typography>
          </div>
          <div className={styles.telephonyVoIPPhoto}>
            <img src="/images/img/telephony.webp" alt="TelephonyVoIP" />
          </div>
        </GridBox>
      </Section>
      <Section id="surveillanceAndSecurityCameras">
        <GridBox className={cn(styles.securityCamera)}>
          <div className={styles.cloudSolutionPhoto}>
            <img src="/images/img/securityCamera.webp" alt="Camera" />
      
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Surveillance and Security Cameras
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              With the fusion of cloud storage and security cameras, trade-offs
              between quality, size, pricing and storage capability have been
              eliminated.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              We offer the best in enterprise protection by delivering a
              solution that scales limitlessly and is effortless to use.
            </Typography>
            <List>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  marginBottom: "15px",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              >
                A wide range of enterprise security cameras, including durable
                indoor and outdoor domes, discreet minis, and panoramic fisheyes
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Powerful onboard processing to analyze footage with near-instant
                results
              </ListItem>
            </List>
          </div>
        </GridBox>
      </Section>
      <Section id="accessControlSystems">
        <GridBox className={cn(styles.controlSystem)}>
          <div className={styles.telephonyVoIPContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Access Control Systems
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              Protect your office by making sure that unwanted visitors stay
              where they should; outside. We assess your situation and install
              an access control system (ACS) that offers flexibility,
              dependability and ease of use.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              There has been a lot of innovation in ACS industry and it allows a
              variety of options; biometrics, access codes, allowing temporary
              access from a remote location and more. businesses.
            </Typography>
          </div>
          <div className={styles.telephonyVoIPPhoto}>
            <img src={"/images/img/ControlSystems.webp"} alt="controlSystem" />
          </div>
        </GridBox>
      </Section>
      <Section id="environmentalMonitoring">
        <GridBox className={cn(styles.envMonitoring)}>
          <div className={styles.telephonyVoIPPhoto}>
            <img src={"/images/img/monitoringSystems.webp"} alt="envMonitoring" />
          </div>
          <div className={styles.telephonyVoIPContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.primary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              IT installation
            </Typography>
            <Typography
              variant="h3"
              component={"h3"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Access Control Systems
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              Collect data on environmental factors within your office. Knowing
              and dynamically adjusting humidity levels, temperature and more is
              paramount to supporting employee health and well-being, as well as
              protecting any assets exposed to the elements.
            </Typography>
          </div>
        </GridBox>
      </Section>
    </Container>
  );
};
