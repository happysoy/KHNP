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
import { openModalTestInstrument, closeModalTestInstrument } from '../../../redux/slices/test-information';
import Iconify from '../../../components/Iconify';
// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// sections
import AddDeleteTable from './add-delete-table/AddDeleteTable';
import useTableAction from 'src/hooks/useTableAction';
import RHFTable from 'src/components/hook-form/RHFTable';

const getInitialValues = () => {
  const user_init = {
    testInstrument: '',
  };
  return user_init;
};
const TitleStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.secondary,
}));

export default function TestInstrumentForm({ name, title }) {
  const dispatch = useDispatch();
  const { savedDatasECT, isOpenModalTestInstrument, toggleTestInstrument } = useSelector(
    (state) => state.testInformation
  );
  const [form, setForm] = useState(null);
  const { onChangeTestInstrument } = useTableAction();

  // const Schema = Yup.object().shape({
  //   probeType: Yup.string().max(5).required('Probe Type is required'),
  //   probeVelocity: Yup.string().max(5).required('Probe Velocity is required'),
  // });

  const methods = useForm({
    // resolver: yupResolver(Schema),
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
      onChangeTestInstrument(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalTestInstrument());
  };
  const handleCloseModal = () => {
    dispatch(closeModalTestInstrument());
  };

  return (
    <>
      <Button
        variant={savedDatasECT !== 0 || toggleTestInstrument ? 'contained' : 'outlined'}
        onClick={handleAddInfo}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        Test Instrument
      </Button>

      <DialogAnimate open={isOpenModalTestInstrument} onClose={handleCloseModal}>
        <DialogTitle>Test Instrument Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RHFTable name="testInstrument" />

          <DialogActions>
            <Button startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />} variant="outlined">
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
