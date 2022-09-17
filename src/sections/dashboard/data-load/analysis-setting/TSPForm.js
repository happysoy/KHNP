import * as Yup from 'yup';
import { Button, DialogTitle, DialogActions, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useCallback, useEffect, useMemo, useState } from 'react';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { openModalTSP, closeModalTSP } from '../../../../redux/slices/analysis-setting';
// components
import { DialogAnimate } from '../../../../components/animate';
import { FormProvider, RHFTextField } from '../../../../components/hook-form';
import Iconify from '../../../../components/Iconify';
import useAuth from 'src/hooks/useAuth';

export default function TSPForm({ tableData, onChangeTableData }) {
  const { user } = useAuth();
  const { isOpenModalTSP, toggleTSP } = useSelector((state) => state.analysisSetting);
  const dispatch = useDispatch();
  const defaultValues = useMemo(
    () => ({
      threshold: tableData?.tspThreshold || '',
      width: tableData?.tspWidth || '',
      quantity: tableData?.tspQuantity || '',
    }),
    [tableData]
  );

  const Schema = Yup.object().shape({
    threshold: Yup.string().required('Threshold is required'),
    width: Yup.string().required('Width is required'),
    quantity: Yup.string().required('Quantity is required'),
  });

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      onChangeTableData({
        ...tableData,
        userName: user?.displayName,
        tspThreshold: data.threshold,
        tspWidth: data.width,
        tspQuantity: data.quantity,
      });
      handleCloseModal();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalTSP());
  };
  const handleCloseModal = () => {
    dispatch(closeModalTSP());
  };

  useEffect(() => {
    if (tableData) {
      reset(defaultValues);
    }
  }, [tableData]);

  return (
    <>
      <Button
        variant={toggleTSP ? 'contained' : 'outlined'}
        onClick={() => {
          handleAddInfo();
        }}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        TSP
      </Button>

      <DialogAnimate open={isOpenModalTSP} onClose={handleCloseModal}>
        <DialogTitle>TSP Setting</DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="threshold" label="Threshold" />
            <RHFTextField name="width" label="Width" />
            <RHFTextField name="quantity" label="Quantity" />
          </Stack>

          <DialogActions>
            <Button startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />} variant="outlined">
              NEW
            </Button>
            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
              SAVE
            </LoadingButton>
            <Button
              endIcon={<Iconify icon={'bi:x'} width={20} height={20} />}
              variant="outlined"
              onClick={handleCloseModal}
            >
              COMPELETE
            </Button>
          </DialogActions>
        </FormProvider>
      </DialogAnimate>
    </>
  );
}
