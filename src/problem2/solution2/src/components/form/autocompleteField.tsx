import { InputAdornment, SxProps, Theme } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { Price } from "../../types/price";
import { currencies } from "../../utils/mockData";

type RenderGroupProps = {
  setPrice: React.Dispatch<React.SetStateAction<Price>>;
  price: Price;
  sx?: SxProps<Theme>;
};

export default function RenderGroup({ price, setPrice, sx }: RenderGroupProps) {
  const [previousOption, setPreviousOption] = React.useState(price);
  const [clearEvent, setClearEvent] = React.useState(false);

  return (
    <Autocomplete
      fullWidth
      id="grouped-demo"
      options={currencies}
      value={price}
      sx={sx}
      // groupBy={(option) => option.currency}
      getOptionLabel={(option) => option.currency}
      onChange={(event, newValue, reason) => {
        if (reason === "clear" || newValue === null) {
          setPrice(previousOption);
          setClearEvent(true);
        } else {
          setClearEvent(false);
          setPreviousOption(newValue);
          setPrice(newValue);
        }
      }}
      onBlur={() => {
        setClearEvent(false);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          //   label="Choose Currency"
          InputProps={{
            ...params.InputProps,
            startAdornment: price ? (
              <InputAdornment position="start">
                {!clearEvent ? (
                  <img
                    src={price.imageUrl}
                    alt={price.currency}
                    style={{ width: 20, height: 20 }}
                  />
                ) : null}
              </InputAdornment>
            ) : null,
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} key={option.currency}>
          <img
            src={option.imageUrl}
            alt={option.currency}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          {option.currency}
        </li>
      )}
      renderGroup={(params) => (
        <li key={params.key}>
          <div style={{ fontWeight: "bold" }}>{params.group}</div>
          {params.children}
        </li>
      )}
    />
  );
}
