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
            fontSize: "30px",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Grid container spacing={2} columnSpacing={2}>
          <Grid item md={6} xs={12} display={"flex"} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                How accurate will the estimate be?
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
                Our estimates are very accurate. We use your numbers to create a
                proposal and can account for any additional factors discovered
                during a discovery session.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} display={"flex"} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                Are there any obligations on our end?
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
                There are no obligations. Consider our meeting as a casual
                conversation about your IT needs. We provide the best solutions
                based on the information provided and answer any questions you
                have. Only if we are a good fit for your needs would we move
                forward.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} display={"flex"} justifyContent={"center"}>
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
                You don{"'"}t need to bring anything specific. Our main focus
                will be getting to know each other, discussing your pain points
                and business processes, and identifying possible solutions.
                Regardless of whether you decide to collaborate with us, you
                will receive value from the call
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} display={"flex"} justifyContent={"center"}>
            <Box component={"div"}>
              <Typography
                variant="h6"
                component={"h6"}
                sx={{
                  marginBottom: "10px",
                }}
              >
                Do you handle one-off projects?
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
                Absolutely. Whether you need to migrate to Microsoft 365,
                install a surveillance system, set up an access control system
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
