/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/Section/Section";
import { GridBox } from "@/components/LeftRightBox/GridBox";
import { Box, List, ListItem, Typography } from "@mui/material";
import cn from "classnames";
import { cstyles } from "@/configs/globalStyle";

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
            As your trusted technology ally, we are fully accountable for
            ensuring the smooth operation of your systems, consistently meeting
            your expectations at all times.
          </Typography>
        </Box>
      </Section>
      <Section>
        <Box component={"div"} className={styles.outsourceds}>
          <Link href={"#helpdesk&Support"}>
            <div className={styles.outsourcedsCard}>
              <img
                src={"/images/img/businessmobiles.webp"}
                alt="businessmobiles"
              />
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
              <img src={"/images/img/cloudstorage.webp"} alt="cloudstorage" />
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
              <img
                src={"/images/img/broadbandservice.webp"}
                alt="broadbandservice"
              />
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
              24/7 instant assistance and support
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
              Get immediate help and support without any limits. Our remote
              support service ensures the fastest response time to resolve any
              issues you may have. We are available round the clock, just a
              phone call or web request away.
            </Typography>
          </div>
          <div className={styles.Chat}>
            <div className={styles.ChatBox}>
              <div className={cn(styles.chatItem, styles.male)}>
                <div className={styles.chatUserImage}>
                  <img src={"/images/img/male.webp"} alt="MaleIcon" />
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
                  <img src={"/images/img/female.webp"} alt="FemaleIcon" />
                </div>
              </div>
              <div className={cn(styles.chatItem, styles.male)}>
                <div className={styles.chatUserImage}>
                  <img src={"/images/img/male.webp"} alt="MaleIcon" />
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
                  <img src={"/images/img/female.webp"} alt="FemaleIcon" />
                </div>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="proactiveMaintenance">
        <GridBox className={cn(styles.cloudSolution)}>
          <div className={styles.cloudSolutionPhoto}>
            <img
              src={"/images/img/telephonesystems.webp"}
              alt="TelephonesIcon"
            />
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
              We prioritize taking preventative action rather than waiting for
              problems to arise.
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
              We understand that systems can fail over time, so we focus on
              being proactive by investing in measures to ensure the safety,
              security, and stability of systems. This approach helps us avoid
              extended periods of system downtime.
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
              Real-time tracking.
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
              We have a comprehensive understanding of your IT infrastructure
              and will promptly notify you whenever there is a matter that needs
              your attention.
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
              From tracking hardware performance and analyzing employee conduct
              to identifying potential productivity enhancements, we ensure you
              stay well-informed.
            </Typography>
          </div>
          <div className={styles.telephonyVoIPPhoto}>
            <img
              src={"/images/img/monitoringServices.webp"}
              alt="MonitoringSevices"
            />
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
              Protecting against cyber threats and implementing robust antivirus
              measures is crucial in today{"'"}s interconnected world
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
              With the rapid digitization of business operations, the risk of
              data loss has become all too real. Whether it stems from external
              hacking attempts or internal malfeasance, we prioritize
              safeguarding your valuable data and ensuring uninterrupted
              business operations.
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
                <img src={"/images/img/recovery.webp"} alt="recovery" />
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
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: cstyles.fontWeights.medium,
                  }}
                >
                  Do not put your business at risk. It takes years to establish
                  a successful business, but just a single breach can destroy it
                  in minutes. In today{"'"}s digital age, hackers can easily
                  obtain the means to attack your business and corrupt all its
                  valuable data. Don{"'"}t let this happen to you. Trust us to
                  safeguard your business and keep you protected from
                  potential threats.
                </Typography>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="dataBackups&DisasterRecovery">
        <GridBox className={cn(styles.securityCamera)}>
          <div className={styles.cloudSolutionPhoto}>
            <img src={"/images/img/backup.webp"} alt="backup" />
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
              Considering the unpredictability of events like fires, floods, or
              even shark-tornados, it is essential to prioritize the safety of
              data. Ensuring data is kept secure entails implementing backup
              measures across multiple geographic locations for every business.
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
