import { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
// @mui
import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";
import { Grid, Stack, Card, Typography, MenuItem } from "@mui/material";
// form
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
// components
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
  RHFUploadMultiFile,
} from "src/components/hook-form";
import DataEditStatusDate from "./DataEditStatusDate";
import { useRouter } from "next/router";

const UNIT_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8"];
const EQUIPMENT_OPTIONS = ["SG", "Condensor", "Heater"];
const SPEED_OPTIONS = ["1.0 m/s", "1.5 m/s", "2.0 m/s"];
const DETECTOR_OPTIONS = ["MIZ200", "MS5800", "MIZ80"];
const PROBE_OPTIONS = ["Bobbin", "ARRAY"];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function DataNewEditForm({ currentData }) {
  const { push } = useRouter();
  const { enquenceSnackbar } = useSnackbar();

  const NewDataSchema = Yup.object().shape({
    fileName: Yup.string().required("필수 입력 항목입니다"),
    company: Yup.string().required("필수 입력 항목입니다"),
    unitNo: Yup.number().required("필수 입력 항목입니다"),
  });
  const defaultValues = useMemo(
    () => ({
      fileName: currentData?.fileName || "",
      company: currentData?.company || "",
      site: currentData?.site || "",
      tubeSetting: currentData?.tubeSetting || "",
      company: currentData?.company || "",
      unitNo: currentData?.unitNo || [UNIT_OPTIONS[0]],
      equipment: currentData?.equipment || [EQUIPMENT_OPTIONS[0]],
      speed: currentData?.speed || [SPEED_OPTIONS[0]],
      detector: currentData?.detector || [DETECTOR_OPTIONS[0]],
      probe: currentData?.probe || [PROBE_OPTIONS[0]],
      images: currentData?.images || [],
    }),
    [currentData]
  );

  const methods = useForm({
    resolver: yupResolver(NewDataSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      enquenceSnackbar("업로드 성공!");
      // push(PATH_DASHBOARD.dataLoad.root);
    } catch (error) {
      console.error(error);
    }
  };
  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const images = values.images || [];

      setValue("images", [
        ...images,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [setValue, values.images]
  );

  const handleRemoveAll = () => {
    setValue("images", []);
  };

  const handleRemove = (file) => {
    const filteredItems =
      values.images && values.images?.filter((_file) => _file !== file);

    setValue("images", filteredItems);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="fileName" label="File Name" />
              <DataEditStatusDate />
              <Stack direction="row" spacing={3} mt={2}>
                <RHFTextField name="company" label="Company" />
                <RHFTextField name="site" label="Site" />
                <RHFTextField name="tubeSetting" label="Tube setting" />
              </Stack>

              <div>
                <LabelStyle>Images</LabelStyle>
                <RHFUploadMultiFile
                  showPreview
                  name="images"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                  onUpload={() => console.log("업로드 성공")}
                />
              </div>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={5}>
            <Card sx={{ p: 3 }}>
              <Stack direction="column" spacing={5} mt={2}>
                <RHFSelect
                  fullWidth
                  name="unitNo"
                  label="Unit No.(#)"
                  InputLabelProps={{ shrink: true }}
                  SelectProps={{
                    native: false,
                    sx: { textTransform: "capitalize" },
                  }}
                >
                  {UNIT_OPTIONS.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </RHFSelect>

                <RHFSelect
                  fullWidth
                  name="equipment"
                  label="Equipment"
                  InputLabelProps={{ shrink: true }}
                  SelectProps={{
                    native: false,
                    sx: { textTransform: "capitalize" },
                  }}
                >
                  {EQUIPMENT_OPTIONS.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </RHFSelect>

                <RHFSelect
                  fullWidth
                  name="speed"
                  label="Speed"
                  InputLabelProps={{ shrink: true }}
                  SelectProps={{
                    native: false,
                    sx: { textTransform: "capitalize" },
                  }}
                >
                  {SPEED_OPTIONS.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </RHFSelect>

                <RHFSelect
                  fullWidth
                  name="detector"
                  label="Detector"
                  InputLabelProps={{ shrink: true }}
                  SelectProps={{
                    native: false,
                    sx: { textTransform: "capitalize" },
                  }}
                >
                  {DETECTOR_OPTIONS.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </RHFSelect>

                <RHFSelect
                  fullWidth
                  name="probe"
                  label="Probe"
                  InputLabelProps={{ shrink: true }}
                  SelectProps={{
                    native: false,
                    sx: { textTransform: "capitalize" },
                  }}
                >
                  {PROBE_OPTIONS.map((option) => (
                    <MenuItem
                      key={option}
                      value={option}
                      sx={{
                        mx: 1,
                        my: 0.5,
                        borderRadius: 0.75,
                        typography: "body2",
                        textTransform: "capitalize",
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </RHFSelect>
              </Stack>
            </Card>
            <LoadingButton
              type="submit"
              variant="contained"
              size="large"
              loading={isSubmitting}
            >
              저장
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
