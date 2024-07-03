import { highlight, languages } from "prismjs";
import React from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import "./styles.css";
import { Container, Grid, Stack, Typography } from "@mui/material";
function Sln1Component() {
  const [code, setCode] = React.useState(
    `
    //using loop
    var sum_to_n_a = function (n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
    };

    //using recursion
    var sum_to_n_b = function (n) {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_b(n - 1);
    };

    //using math
    var sum_to_n_c = function (n) {
    return n * (n + 1) / 2;
    };`
  );
  return (
    <Container>
      <Grid container columns={12}>
        <Grid item xs={12} padding={2}>
          <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
            Solution 1: Three ways to sum to n
          </Typography>
        </Grid>
        <Grid item xs={7} padding={3}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
          >
            <Editor
              disabled
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.jsx!, "jsx")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Sln1Component;
