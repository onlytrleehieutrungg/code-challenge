import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import RenderGroup from "../../components/form/autocompleteField";
import InputField from "../../components/form/inputField";
import { Price } from "../../types/price";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { currencies } from "../../utils/mockData";
import { keyframes } from "@emotion/react";
import { VictoryChart, VictoryLine } from "victory";


const twirl = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export default function Sln2Component() {
  const [isTwirling, setIsTwirling] = useState(false);
  const defaultCurrency = currencies.find(
    (option) => option.currency === "USD"
  );
  const [fromOption, setFromOption] = useState<Price>(defaultCurrency!);
  const [toOption, setToOption] = useState<Price>(defaultCurrency!);

  // const schema = yup.object().shape({
  //   fromCurrency: yup.number().positive("Value must be greater than 0") || 0,
  //   toCurrency: yup.number().positive("Value must be greater than 0") || 0,
  // });
  const methods = useForm({
    // resolver: yupResolver(schema),
  });
  const { watch, setValue, setError, clearErrors } = methods;
  const fromCurrency = watch("fromCurrency");

  useEffect(() => {
    setIsTwirling(true);
    setTimeout(() => {
      setIsTwirling(false);
      if (fromCurrency! < 0) {
        setError("fromCurrency", {
          type: "manual",
          message: "Value must be greater than 0",
        });
      } else {
        clearErrors("fromCurrency");

        if (fromCurrency !== undefined) {
          const exchangeRate = toOption.price / fromOption.price;
          const convertedAmount = fromCurrency * exchangeRate;
          setValue(
            "toCurrency",
            convertedAmount === 0 ? "Nah" : convertedAmount
          );
        }
      }
    }, 1000);
  }, [
    clearErrors,
    fromCurrency,
    fromOption.price,
    setError,
    setValue,
    toOption.price,
  ]);

  function onExchangeFromToOption() {
    setIsTwirling(true);
    setTimeout(() => {
      setIsTwirling(false);
      var temp = fromOption;
      var tempCurr = watch("toCurrency");
      setFromOption(toOption);
      setToOption(temp);
      setValue("fromCurrency", tempCurr === 0 ? "Nah" : tempCurr);
    }, 1000);
  }

  return (
    <FormProvider {...methods}>
      <form>
        <Container>
          <Stack direction={{ xs: "row", sm: "row" }} mt={2}>
            <Grid container columns={12} spacing={4}>
              <Grid item xs={8}>
                <Typography variant="h2" fontWeight={"bold"} fontSize={"40px"}>
                  Solution 2: Fancy Form
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={"#828282"}
                  fontSize={"12px"}
                  ml={"3px"}
                >
                  Currency Converter.
                </Typography>
              </Grid>
              <Grid item xs={3} padding={3} justifyContent={"flex-end"}>
                <Button sx={{ float: "right" }}>Online Trading</Button>
              </Grid>
              <Grid item xs={12} md={8} lg={8}>
                <Card>
                  <CardContent>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                      sx={{ marginBottom: { xs: 1, sm: 2, md: 4 } }}
                    >
                      <RenderGroup
                        setPrice={setFromOption}
                        price={fromOption}
                      />
                      <RenderGroup
                        setPrice={setToOption}
                        price={toOption}
                        sx={{
                          display: { xs: "none", sm: "block", md: "block" },
                        }}
                      />
                      <InputField
                        name="fromCurrency"
                        type="number"
                        sx={{
                          display: { xs: "block", sm: "none", md: "none" },
                        }}
                        inputRef={(input) => input && input.focus()}
                      />
                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                      <CurrencyExchangeIcon
                        color="success"
                        sx={{
                          cursor: "pointer",
                          animation: isTwirling
                            ? `${twirl} 1s ease-in-out`
                            : undefined,
                        }}
                        onClick={onExchangeFromToOption}
                      />
                    </Stack>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={{ xs: 1, sm: 2, md: 4 }}
                    >
                      <InputField
                        name="fromCurrency"
                        type="number"
                        inputRef={(input) => input && input.focus()}
                        sx={{
                          display: { xs: "none", sm: "block", md: "block" },
                        }}
                      />
                      <RenderGroup
                        setPrice={setToOption}
                        price={toOption}
                        sx={{
                          display: { xs: "block", sm: "none", md: "none" },
                        }}
                      />
                      <InputField
                        name="toCurrency"
                        type="number"
                        readOnly={true}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>{" "}
              <Grid item xs={12} md={3} lg={3}>
                <Card
                  sx={{
                    boxShadow: "none",
                    border: "1px ridge",
                  }}
                >
                  <Stack alignItems={"center"}>
                    <VictoryChart>
                      <VictoryLine
                        style={{
                          data: { stroke: "#c43a31" },
                          parent: { border: "1px solid #ccc" },
                        }}
                        data={[
                          { x: 1, y: 2 },
                          { x: 2, y: 3 },
                          { x: 3, y: 5 },
                          { x: 4, y: 4 },
                          { x: 5, y: 7 },
                        ]}
                      />
                    </VictoryChart>
                    <Typography variant="subtitle1">something...</Typography>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </form>
    </FormProvider>
  );
}
