/* eslint-disable @next/next/no-img-element */
import { Section } from "@/components/Section/Section";
import styles from "./HomePage.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import BackpackIcon from "@mui/icons-material/Backpack";
import cn from "classnames";
import { Container } from "@mui/system";
import { cstyles } from "@/configs/globalStyle";

export const HomePage = () => {
  return (
    <Container maxWidth={"xl"}>
      <Section>
        <div className={styles.layoutGrid}>
          <div className={styles.topSectionLeft}>
            <Typography
              variant="h2"
              component={"h1"}
              sx={{
                marginBottom: "14px",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Looking to expand your business?
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                paddingTop: "20px",
                fontSize: "20px",
                lineHeight: "25px",
              }}
            >
              We provide the ideal IT solutions to support your growth. Need
              assistance resolving any of your IT-related issues? Get in
              touch with us now.
            </Typography>
          </div>
          <div className={styles.topSectionRight}>
            <img src={"/images/img/2150709808.jpg"} alt="meneger" />
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles.layoutContent}>
          <div className={styles.contentInfo}>
            <Typography
              variant="h5"
              component={"h5"}
              sx={{
                color: "#0053af",
                marginBottom: "20px",
                textAlign: "center",
                fontWeight: cstyles.fontWeights.bold,
              }}
            >
              How we can help you
            </Typography>
            <Typography
              variant="h2"
              component={"h2"}
              sx={{
                fontSize: "50px",
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Our services can enhance your earnings, improve efficiency, and
              boost productivity.
            </Typography>
            <Typography
              variant="body2"
              component={"p"}
              sx={{
                fontSize: "25px",
                fontWeight: "400",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              By implementing automation, utilizing cutting-edge tools, and
              ensuring the security of your systems, we can transform your
              technology into a catalyst for your company{"'"}s expansion.
            </Typography>
            <div className={styles.contentInfoCards}>
              <Link href={`/it-infrastructure`}>
                <div className={cn(styles.iconBlock)}>
                  <WebIcon />
                </div>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{ color: "#0053af", textAlign: "center" }}
                >
                  IT Infastructure
                </Typography>
              </Link>
              <Link href={`/it-management`}>
                <div className={cn(styles.iconBlock, styles.second)}>
                  <PeopleIcon />
                </div>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{ color: "#81a094", textAlign: "center" }}
                >
                  IT Management & Outsourcing
                </Typography>
              </Link>
              <Link href={`/it-optimization`}>
                <div className={cn(styles.iconBlock, styles.third)}>
                  <BackpackIcon />
                </div>
                <Typography
                  variant="h6"
                  component={"h6"}
                  sx={{ color: "#d10013", textAlign: "center" }}
                >
                  IT Optimization
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="metricsLayout">
          <Typography
            variant="h5"
            component="h5"
            sx={{
              textAlign: "center",
              fontWeight: cstyles.fontWeights.bold,
              marginBottom: "30px",
              color: "#0053AF",
            }}
          >
            Metrics
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              textAlign: "center",
              fontWeight: cstyles.fontWeights.bold,
              marginBottom: "30px",
            }}
          >
            Case Studies
          </Typography>
          <div className={styles.metricsCards}>
            <div className={styles.metricsCard}>
              <Typography
                variant="h1"
                component={"div"}
                sx={{
                  fontWeight: "bold",
                  color: "#0053AF",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                8%
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                Average time saved per department
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                With up to 30% in several instances; eliminating the need for
                additional hires.
              </Typography>
            </div>
            <div className={styles.metricsCard}>
              <Typography
                variant="h1"
                component={"div"}
                sx={{
                  fontWeight: "bold",
                  color: "#0053AF",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                {">98%"}
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                Customer retention
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Since SMM Consulting Group s inception, almost no clients have
                ever left us. We invest in your business - and the results speak
                for themselves!
              </Typography>
            </div>
            <div className={styles.metricsCard}>
              <Typography
                variant="h1"
                component={"div"}
                sx={{
                  fontWeight: "bold",
                  color: "#0053AF",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                8+
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  marginBottom: "15px",
                  fontWeight: "600",
                }}
              >
                Years in the IT industry
              </Typography>
              <Typography
                variant="body2"
                component="p"
                sx={{
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Our team offers senior expertise across virtually all branches
                in the IT space.
              </Typography>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Box component={"div"} className={styles.compensateLayout}>
          <Box component={"div"} className={styles.leftPhotoBlock}>
            <img src={"/images/img/technicians.webp"} alt={"technicians"} />
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
              Stay ahead of the game with cutting-edge technology.
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              We are a comprehensive IT partner in the United States, offering a
              wide range of services.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: "15px", fontWeight: "600" }}
            >
              With over 8 years of experience in IT management and technology
              consulting, our team possesses unparalleled expertise and
              knowledge. We never settle for mediocrity. Instead, we
              consistently update our skills to deliver the top-of-the-line
              solutions the market has to offer.
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ fontSize: "15px", fontWeight: "600" }}
            >
              As a result, our clients commend our ability to meet all their
              needs, and their loyalty is a testament to our exceptional
              service. Many of them have been with us for decades and continue
              to express their gratitude.
            </Typography>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};
