import { highlight, languages } from "prismjs";
import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-tsx";
import "./styles.css";
import { Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { beforeCode, afterCode, beforeText, afterText } from "../../utils/mockData";

function Sln3Component() {
  const [code, setCode] = React.useState(beforeCode);
  const [comment, setComment] = React.useState(beforeText);
  const [beforeVariant, setBeforeVariant] = useState<"outlined" | "filled">(
    "filled"
  );
  const [afterVariant, setAfterVariant] = useState<"outlined" | "filled">(
    "outlined"
  );

  const handleClick = (chipType: "before" | "after") => {
    if (chipType === "before") {
      setBeforeVariant((prevVariant) =>
        prevVariant === "outlined" ? "filled" : "outlined"
      );
      setAfterVariant("outlined");
      setCode(beforeCode);
      setComment(beforeText);
    } else if (chipType === "after") {
      setAfterVariant((prevVariant) =>
        prevVariant === "outlined" ? "filled" : "outlined"
      );
      setBeforeVariant("outlined");
      setCode(afterCode);
      setComment(afterText);
    }
  };
  return (
    <Container>
      <Grid container columns={12}>
        <Grid item xs={12} padding={2}>
          <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
            Solution 3: Messy React
          </Typography>
        </Grid>
        <Grid item padding={3}>
          <Stack direction="row" spacing={1}>
            <Chip
              label="Before"
              color="primary" // Change color as desired
              variant={beforeVariant}
              onClick={() => handleClick("before")}
            />
            <Chip
              label="After"
              color="primary" // Change color as desired
              variant={afterVariant}
              onClick={() => handleClick("after")}
            />
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
          >
            <Editor
              disabled
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => highlight(code, languages.tsx!, "tsx")}
              padding={10}
              style={{
             
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
            <Editor
              disabled
              value={comment}
              onValueChange={(code) => setComment(code)}
              highlight={(comment) => highlight(comment, languages.text!, "tsx")}
              padding={10}
              style={{
                width: "600px",
                height: "auto",
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Sln3Component;
