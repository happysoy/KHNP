// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { DatePicker } from "@mui/x-date-pickers";
import { Stack, TextField, MenuItem } from "@mui/material";
// components
import { RHFSelect, RHFTextField } from "src/components/hook-form";

// ----------------------------------------------------------------------

const STATUS_OPTIONS = ["paid", "unpaid", "overdue", "draft"];

// ----------------------------------------------------------------------

export default function DataEditStatusDate() {
  const { control, watch } = useFormContext();

  const values = watch();
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", sm: "row" }}
      // sx={{ p: 3, bgcolor: "background.neutral" }}
    >
      <Controller
        name="createDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Start date"
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        )}
      />

      <Controller
        name="dueDate"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <DatePicker
            label="Due date"
            value={field.value}
            onChange={(newValue) => {
              field.onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        )}
      />
    </Stack>
  );
}
