import { Container, Grid, Link, Stack, Typography } from "@mui/material";
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
          <Grid item xs={7} padding={3}>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
            >
              <Link href="/solution1">Solution 1</Link>
              <Link href="/solution2">Solution 2</Link>
              <Link href="/solution3">Solution 3</Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
