import { useCallback, useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
// @mui
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
import { Grid, Stack, Card, Typography, MenuItem, Button, Alert, Box } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import {
  FormProvider,
  RHFSelect,
  RHFTextField,
  RHFUploadMultiFile,
  RHFUploadDatFile,
} from '../../../components/hook-form';
import DataEditStatusDate from './DataEditStatusDate';
import { useRouter } from 'next/router';
// redux
import { insertData, updateData } from '../../../redux/slices/data';

const UNIT_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8'];
const EQUIPMENT_OPTIONS = ['SG', 'Condensor', 'Heater'];
const SPEED_OPTIONS = ['1.0 m/s', '1.5 m/s', '2.0 m/s'];
const DETECTOR_OPTIONS = ['MIZ200', 'MS5800', 'MIZ80'];
const PROBE_OPTIONS = ['Bobbin', 'ARRAY'];

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default function DataNewEditForm({ isEdit, currentData }) {
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const NewDataSchema = Yup.object().shape({
    fileName: Yup.string().required('필수 입력 항목입니다'),
  });
  const defaultValues = useMemo(
    () => ({
      id: currentData?.id || '',
      fileName: currentData?.fileName || '',
      // images: currentData?.images[0].preview || [],
      files: currentData?.files.name || [],
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
    reset,
    setValue,
    getValues,
    formState: { isSubmitting },
  } = methods;

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      if (!isEdit) {
        const { files, fileName } = data;
        files.map((file) => {
          let filterData = {
            name: file.name,
            lastModifiedDate: file.lastModifiedDate,
            size: file.size,
            webkitRelativePath: file.webkitRelativePath,
            fileName: fileName,
          };

          dispatch(insertData(filterData));
        });
      } else {
        dispatch(updateData(data));
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
      reset();
      if (!isEdit) {
        enqueueSnackbar('성공적으로 업로드하였습니다');
      } else {
        enqueueSnackbar('성공적으로 변경하였습니다');
      }
      push(PATH_DASHBOARD.dataLoad.root);
    } catch (error) {
      console.error(error);
    }
  };
  const values = watch();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const images = values.images || [];

      setValue('images', [
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
    setValue('images', []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.images && values.images?.filter((_file) => _file !== file);

    setValue('images', filteredItems);
  };
  useEffect(() => {
    if (isEdit && currentData) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
  }, [isEdit, currentData]);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <RHFTextField name="fileName" label="File Name" />

              <LabelStyle>Dat File</LabelStyle>
              <RHFUploadDatFile
                name="files"
                // showPreview
                // maxSize={3145728}
                // onDrop={handleDrop}
                // onRemove={handleRemove}
                // onRemoveAll={handleRemoveAll}
                // onUpload={(e) => console.log(e.target)}
              />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="column" spacing={5}>
            <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
              {!isEdit ? '저장하기' : '변경하기'}
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
