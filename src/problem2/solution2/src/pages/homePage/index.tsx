import { Container, Grid, Typography } from "@mui/material";
import React from "react";

function HomePage() {
  return (
    <Container>
      <Grid container columns={12}>
        <Grid item xs={12} padding={2}>
          <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
            Hi I am Trung.
          </Typography>
          <Typography
            variant="subtitle1"
            color={"#828282"}
            fontSize={"12px"}
            ml={"3px"}
          >
            made by trung tran.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
