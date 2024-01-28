/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/Section/Section";
import { GridBox } from "@/components/LeftRightBox/GridBox";
import { Box, List, ListItem, Typography } from "@mui/material";
import cn from "classnames";
import { cstyles } from "@/configs/globalStyle";
import CodeDoorIcon from "../../image/codeDoor.svg";
import NoutBookIcon from "../../image/noutbook.svg";
import styles from "./ItOptimization.module.css";
import { Container } from "@mui/system";

export const ItOptimizationPage = () => {
  return (
    <Container maxWidth="xl">
      <Section>
        <Box component={"div"} className={cn(styles.infrastructureHeading)}>
          <Typography
            variant="h5"
            component="h5"
            sx={{
              color: cstyles.colors.third,
              fontWeight: cstyles.fontWeights.bold,
              fontSize: "20px",
              marginBottom: "15px",
            }}
          >
            More efficient processes equals more output
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
            Optimization of Processes
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
            By consistently aligning your technology and your team{"'"}s
            capabilities with your goals, your organization becomes more
            efficient, structured and result-oriented.
          </Typography>
        </Box>
      </Section>
      <Section id="technologyAlignmentProcess">
        <GridBox className={cn(styles.hardware)}>
          <div className={styles.hardwareContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.third,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Optimization
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
              Technology alignment process
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
              Changing software (and hardware) might sting operationally for a
              day or two, but that one day of training can deliver years of
              efficiency gain. continuity.
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
                One-time or ongoing technology alignments
              </ListItem>
              <ListItem
                style={{
                  backgroundColor: "#F9F5EC",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "15px",
                }}
              >
                Projects can take a while, however will likely radically
                increase the efficiency of your organization
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
            <Box
              component={"div"}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box component={"div"}>
                <Typography
                  variant="h2"
                  component={"h2"}
                  sx={{
                    fontWeight: cstyles.fontWeights.bold,
                    color: cstyles.colors.primary,
                  }}
                >
                  +28%
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Efficiency gains
                </Typography>
              </Box>
              <Box component={"div"}>
                <Typography
                  variant="h2"
                  component={"h2"}
                  sx={{
                    fontWeight: cstyles.fontWeights.bold,
                    color: cstyles.colors.primary,
                  }}
                >
                  260+
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.bold,
                  }}
                >
                  Softwares we love
                </Typography>
              </Box>
            </Box>
          </div>
          <div className={styles.hardwarePhoto}>
            <div className={styles.hardwareCard}>
              <div className={styles.hardwareImage}>
                <img src={"/images/img/header.webp"} alt="helper" />
              </div>
              <div className={styles.hardwareCardContent}>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{
                    color: "#81A094",
                    marginBottom: "20px",
                  }}
                >
                  Grow faster
                </Typography>
                <Typography
                  variant="h4"
                  component={"h4"}
                  sx={{
                    fontSize: "26px",
                    fontWeight: cstyles.fontWeights.bold,
                    marginBottom: "20px",
                  }}
                >
                  Get started
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: cstyles.fontWeights.medium,
                  }}
                >
                  Do you see the need to improve, but want to verify potential
                  value before committing to anything? Consider having us
                  analyzing your current state of affairs.
                </Typography>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="software&Workflows">
        <GridBox className={cn(styles.cloudSolution)}>
          <div className={styles.cloudSolutionPhoto}>
            <img src={"/images/img/sharepoint.webp"} alt="Hsarepoint" />
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
                The database that they designed for our business continues to
                serve us well and our manager has been very pleased with how it
                has streamlined day-to-day flow at the office.
              </Typography>
            </div>
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.third,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Optimization
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
              Software & workflows
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
              We train staff, suggest new processes (such as ERP{"'"}s, CRM{"'"}
              s and more), optimize infrastructure and ensure that you leverage
              today{"'"}s technology as much as possible.
            </Typography>
          </div>
        </GridBox>
      </Section>
      <Section id="VirtualCIOServices">
        <GridBox className={cn(styles.telephonyVoIP)}>
          <div className={styles.telephonyVoIPContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.third,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Optimization
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
              Consult with a dedicated CIO
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
              Do you need help with your IT Roadmap for your business? Do you
              have an Internal IT department, however you don’t have a
              Management level position in place for that group? We can help
              with planning your IT growth and business objectives.
            </Typography>
          </div>
          <div className={styles.telephonyVoIPPhoto}>
            <Box
              component={"div"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "20px",
                width: "100%",
                height: "80%",
                backgroundColor: "#fff",
                borderRadius: "20px",
                boxShadow: "0 8px 16px rgba(0,0,0,.57)",
                transform: "rotate(5deg)",
              }}
            >
              <img src={"/images/img/Interested.webp"} alt="InterestedIcon" />
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "30px",
                }}
              >
                {'"'}We are always excited
                <br />
                for the next meeting{'"'}
              </Typography>
            </Box>
          </div>
        </GridBox>
      </Section>
      <Section id="consultWithaDedicatedCIO">
        <GridBox className={cn(styles.projectPlanning)}>
          <div className={styles.projectPlanningPhoto}>
            <img src={"/images/img/internetAndConnectivity.webp"} alt="internetIcon" />
            <div className={styles.infoBox}>
              <div className={styles.infoBoxItem}>
                <CodeDoorIcon />
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.medium,
                    fontSize: "17px",
                  }}
                >
                  Connect your tools
                </Typography>
              </div>
              <div className={styles.infoBoxItem}>
                <NoutBookIcon />
                <Typography
                  variant="body2"
                  component={"p"}
                  sx={{
                    fontWeight: cstyles.fontWeights.medium,
                    fontSize: "17px",
                  }}
                >
                  Custom automation by implementing new code
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.projectPlanningContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.third,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Optimization
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
              Automating processes
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
              A lot of time can be saved by making sure different tools
              communicate with each other. Automation has an immediate impact on
              your business{"'"} output.
            </Typography>
          </div>
        </GridBox>
      </Section>
      <Section id="automatingProcesses">
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
              Optimization
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
              Microsoft 365
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
              Microsoft 365 (formerly known as Office 365) trumps Google
              Solutions for business operations. We are specialists and can
              train your staff to maximize their productivity using these tools.
            </Typography>
          </div>
          <div className={styles.microsoftBlock}>
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                color: "#000",
                fontWeight: cstyles.fontWeights.bold,
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              Key benefits are:
            </Typography>
            <div className={styles.microsoftCards}>
              <div className={styles.microsoftCard}>
                <div className={styles.microsoftCardItem}>
                  Access files anywhere
                </div>
                <div className={styles.microsoftCardItem}>
                  Secure cloud storage
                </div>
                <div className={styles.microsoftCardItem}>
                  Improved communication
                </div>
              </div>
              <div className={styles.microsoftCard}>
                <div className={styles.microsoftCardItem}>
                  Additional backups
                </div>
                <div className={styles.microsoftCardItem}>Automation</div>
                <div className={styles.microsoftCardItem}>
                  Centralised collaboration
                </div>
              </div>
            </div>
          </div>
        </GridBox>
      </Section>
      <Section id="dataAnalytics">
        <GridBox className={cn(styles.dataAnalitics)}>
          <div className={styles.cloudSolutionPhoto}>
            <img src={"/images/img/dataAnalytics.webp"} alt="DataAnlytics" />
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
                Consistently focuses on meeting the needs of the business and
                inspiring people to live into their utmost potential.
              </Typography>
            </div>
          </div>
          <div className={styles.cloudSolutionContent}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: cstyles.colors.third,
                fontWeight: cstyles.fontWeights.bold,
                marginBottom: "20px",
              }}
            >
              Optimization
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
              Data analytics
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
              We help you collect, interpret, clean and structure company data
              in order to utilize it more effectively.
            </Typography>
          </div>
        </GridBox>
      </Section>
    </Container>
  );
};
