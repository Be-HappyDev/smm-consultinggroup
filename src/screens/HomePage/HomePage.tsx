import { Section } from "@/components/Section/Section";
import styles from "./HomePage.module.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import menegerImage from "../../images/img/Managed.webp";
import technicians from "../../images/img/technicians.webp";
import Link from "next/link";
import WebIcon from "@mui/icons-material/Web";
import PeopleIcon from "@mui/icons-material/People";
import BackpackIcon from "@mui/icons-material/Backpack";
import cn from "classnames";
import { Container } from "@mui/system";


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
                maxWidth: "330px",
              }}
            >
              We supply the perfect IT to grow your business
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
              Do you need help with an IT-related concern? Contact us today.
            </Typography>
          </div>
          <div className={styles.topSectionRight}>
            <Image src={menegerImage} alt="meneger" />
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
              }}
            >
              What we can do for you
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
              IT can increase your profits; work faster and smarter
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
              By automating work, leveraging the latest tools and maintaining
              secure systems, your technology will become a driving force behind
              your company its growth.
            </Typography>
            <div className={styles.contentInfoCards}>
              <Link href={`#`}>
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
              <Link href={`#`}>
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
              <Link href={`#`}>
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
                Since Young Technology Group s inception, almost no clients have
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
                35+
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
            <Image src={technicians} alt={"technicians"} />
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
              Get an edge with the best tech
            </Typography>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              Your full-service IT provider in Central Valley
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: "15px", fontWeight: "600" }}
            >
              With more than 35 years in the IT-management and technology
              consulting industry, our team has nearly unmatched expertise and
              knowledge. We don’t just settle for the basics. Instead, our team
              constantly trains, so we can live up to our reputation of giving
              the very best the market has to offer
            </Typography>
            <Typography
              variant="body2"
              component="p"
              sx={{ marginBottom: "15px", fontSize: "15px", fontWeight: "600" }}
            >
              As such, our clients praise us for being able to handle everything
              they need - and express their appreciation by staying with us,
              often decades!
            </Typography>
          </Box>
        </Box>
      </Section>
    </Container>
  );
};
