import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { styled } from '@mui/material/styles';

import { LoadingButton } from '@mui/lab';
import { Stack, Button, Typography, DialogActions, DialogTitle } from '@mui/material';
// redux
import { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import {
  openModalSignalAcquisition,
  closeModalSignalAcquisition,
  resetSignalAcquisition,
} from '../../../redux/slices/test-information';
import Iconify from '../../../components/Iconify';
// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// sections
import AddDeleteTable from './add-delete-table/AddDeleteTable';
import useTableAction from 'src/hooks/useTableAction';
import RHFTable from 'src/components/hook-form/RHFTable';

const TitleStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.secondary,
}));

export default function SignalAcquisitionForm({ parseECT, name, title }) {
  const dispatch = useDispatch();
  const { isResetSignalAcquisition, savedDatasECT, isOpenModalSignalAcquisition, toggleSignalAcquisition } =
    useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);
  const { onChangeSignalAcquisition } = useTableAction();
  const [clear, setClear] = useState(false);

  const Schema = Yup.object().shape({
    probeType: Yup.string().required('Probe Type is required'),
    probeVelocity: Yup.string().required('Probe Velocity is required'),
  });

  const getInitialValues = (clear) => {
    if (clear || !parseECT) {
      const user_init = {
        probeType: '',
        probeVelocity: '',
      };
      return user_init;
    } else {
      const { probeType, probeVelocity } = parseECT.signalAcquisitionData;
      const user_init = {
        probeType: probeType,
        probeVelocity: probeVelocity,
      };
      return user_init;
    }
  };

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues: getInitialValues(),
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
      onChangeSignalAcquisition(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalSignalAcquisition());
  };
  const handleCloseModal = () => {
    dispatch(closeModalSignalAcquisition());
  };
  const handleReset = async () => {
    dispatch(resetSignalAcquisition());
    reset(getInitialValues(true));
  };

  return (
    <>
      <Button
        variant={savedDatasECT.length !== 0 || toggleSignalAcquisition ? 'contained' : 'outlined'}
        onClick={handleAddInfo}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        Signal Acquisition
      </Button>

      <DialogAnimate open={isOpenModalSignalAcquisition} onClose={handleCloseModal}>
        <DialogTitle>Signal Acquisition Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <Stack direction="row" spacing={3} sx={{ p: 3 }}>
              <RHFTextField name="probeType" label="Probe Type" />
              <RHFTextField name="probeVelocity" label="Probe Velocity" />
            </Stack>
            <TitleStyle>Test Frequency</TitleStyle>
            <RHFTable name="signalAcquisition" />
          </Stack>

          <DialogActions>
            <Button
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
              variant="outlined"
              onClick={handleReset}
            >
              NEW
            </Button>
            <LoadingButton type="submit" variant="contained" onClick={handleCloseModal} loading={isSubmitting}>
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
