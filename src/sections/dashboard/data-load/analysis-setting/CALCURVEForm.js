import * as Yup from 'yup';
import { Button, DialogTitle, DialogActions, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useCallback, useEffect, useMemo, useState } from 'react';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { openModalCALCURVE, closeModalCALCURVE } from '../../../../redux/slices/analysis-setting';
// components
import { DialogAnimate } from '../../../../components/animate';
import { FormProvider, RHFTextField } from '../../../../components/hook-form';
import Iconify from '../../../../components/Iconify';
import useAuth from 'src/hooks/useAuth';

export default function CalCurveForm({ tableData, savedDatas, onChangeTableData }) {
  const { user } = useAuth();
  const { isOpenModalCALCURVE, toggleCALCURVE } = useSelector((state) => state.analysisSetting);
  const [clear, setClear] = useState(false);

  const dispatch = useDispatch();

  const defaultValues = useMemo(
    () => ({
      calcurve20: tableData?.calcurve20 || '',
      calcurve40: tableData?.calcurve40 || '',
      calcurve60: tableData?.calcurve60 || '',
      calcurve80: tableData?.calcurve80 || '',
    }),
    [tableData]
  );

  const methods = useForm({
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
        calcurve20: data.calcurve20,
        calcurve40: data.calcurve40,
        calcurve60: data.calcurve60,
        calcurve80: data.calcurve80,
      });
      handleCloseModal();
      setClear(false);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalCALCURVE());
  };
  const handleCloseModal = () => {
    dispatch(closeModalCALCURVE());
  };

  useEffect(() => {
    if (tableData.userName !== '') {
      reset({
        calcurve20: tableData?.calcurve20,
        calcurve40: tableData?.calcurve40,
        calcurve60: tableData?.calcurve60,
        calcurve80: tableData?.calcurve80,
      });
    }
    if (tableData.userName === '' && savedDatas) {
      reset({
        calcurve20: savedDatas[0]?.calcurve20,
        calcurve40: savedDatas[0]?.calcurve40,
        calcurve60: savedDatas[0]?.calcurve60,
        calcurve80: savedDatas[0]?.calcurve80,
      });
    }
  }, [isOpenModalCALCURVE]);

  useEffect(() => {
    if (clear) {
      reset({
        calcurve20: '',
        calcurve40: '',
        calcurve60: '',
        calcurve80: '',
      });
    }
  }, [clear]);

  return (
    <>
      <Button
        variant={savedDatas.length !== 0 || toggleCALCURVE ? 'contained' : 'outlined'}
        onClick={() => {
          handleAddInfo();
        }}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        CAL CURVE
      </Button>

      <DialogAnimate open={isOpenModalCALCURVE} onClose={handleCloseModal}>
        <DialogTitle>CAL CURVE Setting</DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="calcurve20" label="20%" />
            <RHFTextField name="calcurve40" label="40%" />
            <RHFTextField name="calcurve60" label="60%" />
            <RHFTextField name="calcurve80" label="80%" />
          </Stack>

          <DialogActions>
            <Button
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
              variant="outlined"
              onClick={() => setClear(!clear)}
            >
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
