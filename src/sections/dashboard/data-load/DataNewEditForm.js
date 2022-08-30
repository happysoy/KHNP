import { useCallback, useMemo } from "react";
import * as Yup from "yup";
import { useSnackbar } from "notistack";
// @mui
import { styled } from "@mui/material/styles";
import { Grid, Stack, Card, Typography } from "@mui/material";
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

const UNIT_OPTION = ["Shirts", "T-shirts", "Jeans", "Leather"];
const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function DataNewEditForm() {
  const { enquenceSnackbar } = useSnackbar();

  const NewDataSchema = Yup.object().shape({
    fileName: Yup.string().required("File Name is required"),
  });
  const defaultValues = useMemo(() => ({
    fileName: "야호",
    images: [],
  }));

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
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="fileName" label="File Name" />
              <Stack direction="row" spacing={10} mt={2}>
                <RHFTextField name="name1" label="Company" />
                <RHFTextField name="name2" label="Company" />
                <RHFTextField name="name3" label="Company" />
              </Stack>
              <div>
                <LabelStyle>Description</LabelStyle>
              </div>

              <div>
                <LabelStyle>Images</LabelStyle>
                <RHFUploadMultiFile
                  showPreview
                  name="images"
                  maxSize={3145728}
                  onDrop={handleDrop}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                  onUpload={() => console.log("ON UPLOAD")}
                />
              </div>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={12}>
          <Card sx={{ p: 3 }}>
            <Stack direction="row" spacing={10} mt={2}>
              <RHFSelect name="category1" label="Category">
                {UNIT_OPTION.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="category2" label="Category">
                {UNIT_OPTION.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>
              <RHFSelect name="category3" label="Category">
                {UNIT_OPTION.map((classify) => (
                  <option key={classify} value={classify}>
                    {classify}
                  </option>
                ))}
              </RHFSelect>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
