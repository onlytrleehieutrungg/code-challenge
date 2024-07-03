// form
import { Controller, useFormContext } from "react-hook-form";
// @mui
import { TextField, TextFieldProps } from "@mui/material";

// ----------------------------------------------------------------------

type IProps = {
  name: string;
  readOnly?: boolean;
};

type Props = IProps & TextFieldProps;

export default function InputField({ name, readOnly, type, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          id="filled-number"
          InputLabelProps={{
            shrink: false,
          }}
          InputProps={{
            readOnly: readOnly,
          }}
          type={type}
          variant="filled"
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}
