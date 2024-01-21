import { cstyles } from "@/configs/globalStyle";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export const PricingPage = () => {
  return (
    <Container maxWidth="xl">
      <Box component={"div"}>
        <Typography
          variant="h1"
          component={"h3"}
          sx={{
            fontWeight: cstyles.fontWeights.bold,
            textAlign: "center",
            padding: "50px 0",
          }}
        >
          FAQ
        </Typography>

        <Grid container spacing={2} columnSpacing={2}>
          <Grid item md={6} xs={10} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                How close will the estimate be to actual pricing?
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                Very accurate! We will use your numbers to create a proposal.
                Should other factors be found during a discovery session that
                you want to integrate, these can be accounted for later.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={10} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                Is there any obligation on our end?
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                There are no obligations,consider this a coffee & chat about
                your IT! We present the best solutions based on the information
                provided. That makes for a great conversation starter and we
                would answer any questions you might have.
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                If we are a good fit for your needs, only then would we move
                forward.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={10} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                Should I bring anything to the virtual meeting?
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                As with any introduction, we will be spending most of our time
                getting to know each other. We discuss your pain points and
                business processes, so we can identify the possible associated
                solutions.
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                During the call, we also already identify possible solutions, so
                you will be receiving value from the call regardless of whether
                or not you would like to collaborate with us.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={10} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                Do you also handle one-off projects?
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontWeight: cstyles.fontWeights.medium,
                }}
              >
                Absolutely. If you need to migrate to Microsoft 365, need a
                surveillance system, an access control system or a new
                server/network setup; it{"'"}s our bread and butter. We are
                happy to quote these on a time and materials basis.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
