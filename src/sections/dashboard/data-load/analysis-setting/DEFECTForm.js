import * as Yup from 'yup';
import { Button, DialogTitle, DialogActions, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useCallback, useEffect, useMemo, useState } from 'react';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { openModalDEFECT, closeModalDEFECT } from '../../../../redux/slices/analysis-setting';
// components
import { DialogAnimate } from '../../../../components/animate';
import { FormProvider, RHFTextField } from '../../../../components/hook-form';
import Iconify from '../../../../components/Iconify';
import useAuth from 'src/hooks/useAuth';

export default function DEFECTForm({ tableData, savedDatas, onChangeTableData }) {
  const { user } = useAuth();
  const { isOpenModalDEFECT, toggleDEFECT } = useSelector((state) => state.analysisSetting);
  const [clear, setClear] = useState(false);

  const dispatch = useDispatch();

  const defaultValues = useMemo(
    () => ({
      threshold: tableData?.defectThreshold || '',
      width: tableData?.defectWidth || '',
      option: tableData?.defectOption || '',
    }),
    [tableData]
  );

  const Schema = Yup.object().shape({
    threshold: Yup.string().required('Threshold is required'),
    width: Yup.string().required('Width is required'),
    option: Yup.string().required('Option is required'),
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
        defectThreshold: data.threshold,
        defectWidth: data.width,
        defectOption: data.option,
      });
      handleCloseModal();
      setClear(false);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalDEFECT());
  };
  const handleCloseModal = () => {
    dispatch(closeModalDEFECT());
  };

  useEffect(() => {
    if (tableData.userName !== '') {
      reset({
        threshold: tableData?.defectThreshold,
        width: tableData?.defectWidth,
        option: tableData?.defectOption,
      });
    }
    if (tableData.userName === '' && savedDatas) {
      reset({
        threshold: savedDatas[0]?.defectThreshold,
        width: savedDatas[0]?.defectWidth,
        option: savedDatas[0]?.defectOption,
      });
    }
  }, [isOpenModalDEFECT]);

  useEffect(() => {
    if (clear) {
      reset({
        threshold: '',
        width: '',
        option: '',
      });
    }
  }, [clear]);

  return (
    <>
      <Button
        variant={savedDatas.length !== 0 || toggleDEFECT ? 'contained' : 'outlined'}
        onClick={() => {
          handleAddInfo();
        }}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        DEFECT
      </Button>

      <DialogAnimate open={isOpenModalDEFECT} onClose={handleCloseModal}>
        <DialogTitle>DEFECT Setting</DialogTitle>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="threshold" label="Threshold" />
            <RHFTextField name="width" label="Width" />
            <RHFTextField name="option" label="Option" />
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
