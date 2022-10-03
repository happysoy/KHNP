import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '../../../../redux/store';
import NextLink from 'next/link';

// components
import { FormProvider, RHFSelect } from '../../../../components/hook-form';
// redux
import { getDatas, postGraphDatas, getGraphDatas } from '../../../../redux/slices/data';
import { Grid, Button, MenuItem, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { getData } from 'src/redux/slices/analysis-setting';
import useAuth from 'src/hooks/useAuth';
import { useRouter } from 'next/router';

export default function DataSelectForm() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { datas, isLoading } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const defaultValues = useMemo(
    () => ({
      fileURL: '',
    }),
    []
  );
  const methods = useForm({
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // const onSubmit = async (data) => {
  //   try {
  //     const renew = {
  //       data: data,
  //       savedDatas: savedDatas[0],
  //     };
  //     dispatch(getGraphDatas(renew));
  //     await new Promise((resolve) => setTimeout(resolve, 10000));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" spacing={3}>
          <RHFSelect
            sx={{ width: '300px' }}
            name="fileURL"
            label="File Name"
            InputLabelProps={{ shrink: true }}
            SelectProps={{
              native: false,
              sx: { textTransform: 'capitalize' },
            }}
          >
            {datas.map((item, index) => (
              <MenuItem
                key={index}
                value={item.fileURL}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 0.75,
                  typography: 'body2',
                  textTransform: 'capitalize',
                }}
              >
                {item.fileURL.split('/')[4].split('.')[0]}
              </MenuItem>
            ))}
          </RHFSelect>

          <LoadingButton type="submit" variant="contained" size="large" loading={isSubmitting}>
            분석하기
          </LoadingButton>
        </Stack>
        <Stack>
          <NextLink href="/dashboard/manual-evaluation" passHref>
            <Button fullWidth variant="outlined" size="large">
              BACK
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </FormProvider>
  );
}
