/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/Section/Section";
import { GridBox } from "@/components/LeftRightBox/GridBox";
import { Box, List, ListItem, Typography } from "@mui/material";
import cn from "classnames";
import { cstyles } from "@/configs/globalStyle";
import Image from "next/image";
import recovery from "../../images/img/recovery.webp";
import TelephonesIcon from "../../images/img/telephonesystems.webp";
import MonitoringSevices from "../../images/img/monitoringServices.webp";
import backup from "../../images/img/backup.webp";
import controlSystem from "../../images/img/ControlSystems.webp";
import envMonitoring from "../../images/img/monitoringSystems.webp";
import MaleIcon from "../../images/img/male.webp";
import FemaleIcon from "../../images/img/female.webp";
import cardIcon1 from "../../images/img/businessmobiles.webp";
import cardIcon2 from "../../images/img/cloudstorage.webp";
import cardIcon3 from "../../images/img/broadbandservice.webp";
import styles from "./ItManagement.module.css";
import Link from "next/link";
import { Container } from "@mui/system";

export const ItManagementPage = () => {
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
            Reliability, security and efficiency
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
            Outsourced Management
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
            As your technology partner, we take responsibility for your systems.
            Making sure everything is as desired, constantly.
          </Typography>
        </Box>
      </Section>
      <Section>
        <Box component={"div"} className={styles.outsourceds}>
          <Link href={"#helpdesk&Support"}>
            <div className={styles.outsourcedsCard}>
              <Image src={cardIcon1} alt="businessmobiles" />
              <div className={styles.outsourcedsCardText}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: cstyles.colors.primary,
                    marginBottom: "15px",
                    fontSize: "25px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Helpdesk & Support
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    color: cstyles.colors.primary,
                    fontSize: "20px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Find Out More
                </Typography>
              </div>
            </div>
          </Link>
          <Link href={"#proactiveMaintenance"}>
            <div className={styles.outsourcedsCard}>
              <Image src={cardIcon2} alt="cloudstorage" />
              <div className={styles.outsourcedsCardText}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: cstyles.colors.primary,
                    marginBottom: "15px",
                    fontSize: "25px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Daily Maintenance
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    color: cstyles.colors.primary,
                    fontSize: "20px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Find Out More
                </Typography>
              </div>
            </div>
          </Link>
          <Link href={"#cyberSecurity&Anti-virus"}>
            <div className={styles.outsourcedsCard}>
              <Image src={cardIcon3} alt="broadbandservice" />
              <div className={styles.outsourcedsCardText}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    color: cstyles.colors.primary,
                    marginBottom: "15px",
                    fontSize: "25px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Protection & Security
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  sx={{
                    color: cstyles.colors.primary,
                    fontSize: "20px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Find Out More
                </Typography>
              </div>
            </div>
          </Link>
        </Box>
      </Section>
      <Section id="helpdesk&Support">
        <GridBox className={cn(styles.projectPlanning)}>
          <div className={styles.projectPlanningContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.secondary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Daily management
            </Typography>
            <Typography
              variant="h3"
              component={"h4"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "40px",
                marginBottom: "20px",
              }}
            >
              Unlimited helpdesk and support
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
              Remote support is the next best thing to having an onsite IT
              person. We offer this service for the most rapid response to
              support issues. We are always just a call/web request away.
            </Typography>
          </div>
          <div className={styles.Chat}>
            <div className={styles.ChatBox}>
              <div className={cn(styles.chatItem, styles.male)}>
                <div className={styles.chatUserImage}>
                  <Image src={MaleIcon} alt="MaleIcon" />
                </div>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    backgroundColor: "#F9F5EC",
                    fontSize: "13px",
                    width: "100%",
                    height: "50%",
                    fontWeight: cstyles.fontWeights.bold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Hey Marg, how do I do this thing?
                </Typography>
              </div>
              <div className={cn(styles.chatItem, styles.female)}>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    backgroundColor: "#F9F5EC",
                    fontSize: "13px",
                    width: "100%",
                    height: "50%",
                    fontWeight: cstyles.fontWeights.bold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  That? Here, I{"'"}ll grab it for you.
                </Typography>
                <div className={styles.chatUserImage}>
                  <Image src={FemaleIcon} alt="FemaleIcon" />
                </div>
              </div>
              <div className={cn(styles.chatItem, styles.male)}>
                <div className={styles.chatUserImage}>
                  <Image src={MaleIcon} alt="MaleIcon" />
                </div>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    backgroundColor: "#F9F5EC",
                    fontSize: "13px",
                    width: "100%",
                    height: "50%",
                    fontWeight: cstyles.fontWeights.bold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Awesome! You{"'"}re the best!
                </Typography>
              </div>
              <div className={cn(styles.chatItem, styles.female)}>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    backgroundColor: "#F9F5EC",
                    fontSize: "13px",
                    width: "100%",
                    height: "50%",
                    fontWeight: cstyles.fontWeights.bold,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  Most welcome! ✌️
                </Typography>
                <div className={styles.chatUserImage}>
                  <Image src={FemaleIcon} alt="FemaleIcon" />
                </div>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="proactiveMaintenance">
        <GridBox className={cn(styles.cloudSolution)}>
          <div className={styles.cloudSolutionPhoto}>
            <Image src={TelephonesIcon} alt="TelephonesIcon" />
            <div className={styles.cloudSolutionText}>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  color: "#000",
                  marginBottom: "10px",
                  fontSize: "15px",
                }}
              >
                I recommend them to all of my friends when they ask and I have
                zero hesitation to do so.
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  color: "#E2E2E2",
                  fontSize: "17px",
                }}
              >
                Caleb Lewis, Operations Manager at NRT Inc.
              </Typography>
            </div>
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.secondary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Daily management
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
              Proactive maintenance
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
              We build proactive instead of reactive solutions to problems.
              System failure overtime is a fact of life. Investing in being
              proactive to keep systems safe, secure and stable is always
              preferable to extended downtime.
            </Typography>
          </div>
        </GridBox>
      </Section>
      <Section id="statusMonitoring">
        <GridBox className={cn(styles.telephonyVoIP)}>
          <div className={styles.telephonyVoIPContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.secondary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Daily management
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
              Status monitoring
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
              We understand your IT to a {"'T'"} and will inform you whenever
              something requires your attention.
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
              Whether it is hardware depreciation, employee behavior or possible
              efficiency gains; we keep you in the loop.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{
                marginBottom: "20px",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "18px",
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "20px",
              }}
            >
              We utilize {"'EDR: Endpoint Detection Response Technology'"},
              which maps a team member{"'"}s regular activity and informs us
              when outlier events occur.
            </Typography>
          </div>
          <div className={styles.telephonyVoIPPhoto}>
            <Image src={MonitoringSevices} alt="MonitoringSevices" />
          </div>
        </GridBox>
      </Section>
      <Section id="cyberSecurity&Anti-virus">
        <GridBox className={cn(styles.hardware)}>
          <div className={styles.hardwareContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.secondary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Daily management
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
              Cyber security & anti-virus
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
              Many businesses are purely digital. Imagine if your data was lost.
              It happens more often than you think. Whether it is an outside
              attack, or internal corruption, we ensure your business
              continuity.
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
                Most advanced anti-cyber-attack technology on the market.
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Incredible anti-virus and anti-malware solutions.
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Data management systems ensure that everything is secure
                internally.
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Onsite training to reduce human error are suggested.
              </ListItem>
            </List>
          </div>
          <div className={styles.hardwarePhoto}>
            <div className={styles.hardwareCard}>
              <div className={styles.hardwareImage}>
                <Image src={recovery} alt="recovery" />
              </div>
              <div className={styles.hardwareCardContent}>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{
                    color: "#81A094",
                  }}
                >
                  End-to-end protection
                </Typography>
                <Typography
                  variant="h4"
                  component={"h4"}
                  sx={{
                    fontSize: "20px",
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Your business is destroyed in 5 minutes
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: cstyles.fontWeights.medium,
                  }}
                >
                  It takes 10 years to build a business and just 1 clever hack
                  to corrupt all its data. The dark-web makes buying an attack
                  as easy as going to the supermarket. Don{"'"}t risk it. We can
                  protect you.
                </Typography>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="dataBackups&DisasterRecovery">
        <GridBox className={cn(styles.securityCamera)}>
          <div className={styles.cloudSolutionPhoto}>
            <Image src={backup} alt="backup" />
            <div className={styles.cloudSolutionText}>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  color: "#000",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                Has been a great asset for our small business.
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  color: "#E2E2E2",
                }}
              >
                Steven Stoltz, Owner of Valley Health Resources, LLC
              </Typography>
            </div>
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.secondary,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Daily management
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
              Data backups & disaster recovery
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
              What happens in case of a fire, flood, or (shark-)tornado? Data is
              fragile. Every business requires back-ups on multiple geographic
              locations.
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
                Data is stored on various locations, while keeping in mind any
                legal restrictions, such as imposed by the GDPR.
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                We execute {"'backup restore tests'"}, to ensure you do not
                experience any unpleasant surprises.
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                We Ínclude backups for your services providers, such as
                Microsoft365..
              </ListItem>
            </List>
          </div>
        </GridBox>
      </Section>
    </Container>
  );
};
