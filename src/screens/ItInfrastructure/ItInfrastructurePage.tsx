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
            Efficiency, mastery, and affordability
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
            Steer clear of annoyances, expensive interruptions, and foster
            seamless harmonization among your systems.
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
            We aid in strategizing and implementing your upcoming IT framework,
            enabling you to relish in utmost performance and cost-effectiveness.
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
              We familiarize ourselves with your business and provide the most
              suitable solutions to address your current requirements and
              challenges. Our goal is to ensure your satisfaction and handle
              everything promptly.
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
              We collaborate with clients throughout the entire process, taking
              care of project management, infrastructure setup, and maintenance
              tasks such as network and server room cleanup.
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
              We provide a wide range of technology products, including servers,
              desktops, laptops, printers, and other equipment necessary for
              keeping your business at the forefront of technology.
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
                  With our substantial knowledge spanning multiple industries,
                  we are well-equipped to offer design and performance
                  recommendations that are certain to be well-received by
                  you and your team.
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
              Cloud solutions and remote desktops are essential in today{"'"}s
              world
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
              They enable your employees to work from anywhere while still
              allowing you to manage your business effectively.
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
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
              }}
            >
              Today, we find that many traditional telephone systems are closed
              and require ongoing contracts and hardware upgrades every few
              years. However, there is a better solution available called hosted
              Voice over Internet Protocol (VoIP).
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
              Hosted VoIP offers a more favorable and sustainable choice for
              small to medium-sized businesses in need of reliable and
              high-quality telephone service. With hosted VoIP, businesses can
              overcome the limitations of proprietary systems and avoid the
              hassle of regular hardware replacements and service contracts.
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
              The combination of cloud storage and the technology of these
              cameras has eliminated the need to compromise on factors such as
              quality, size, price, and storage capacity.
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
              We provide top-notch protection for businesses by offering a
              solution that can be expanded without limits and is
              extremely user-friendly.
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
              (ACS) are designed to secure your office premises by ensuring that
              unauthorized individuals are kept outside. We evaluate your needs
              and implement an ACS that provides flexibility, reliability, and
              user-friendliness.
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
              The ACS industry has experienced significant advancements,
              offering a range of options such as biometrics, access codes,
              remote temporary access, and many more for
              businesses to choose from.
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
            <img
              src={"/images/img/monitoringSystems.webp"}
              alt="envMonitoring"
            />
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
              Gather information about the environmental conditions in your
              workplace. It is crucial to be aware of and actively control
              factors like humidity, temperature, and others in order to promote
              the health and well-being of employees, as well as safeguard any
              items that might be affected by the environment.
            </Typography>
          </div>
        </GridBox>
      </Section>
    </Container>
  );
};
