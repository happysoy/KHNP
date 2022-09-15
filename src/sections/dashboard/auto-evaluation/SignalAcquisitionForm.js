import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Table, Typography, Stack, Button, DialogTitle, DialogActions, Card, TableContainer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { openModalSignalAcquisition, closeModalSignalAcquisition } from '../../../redux/slices/test-information';
// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFRadioGroup, RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';

const TUBETYPE_OPTION = [
  { label: 'Straight', value: 'Straight' },
  { label: 'U-bend', value: 'U-bend' },
  { label: 'Vertical', value: 'Vertical' },
  { label: 'Horizontal', value: 'Horizontal' },
];

const TABLE_HEAD = [
  { id: '구분', label: '구분' },
  { id: '총 전열관', label: '총 전열관' },
];
const TitleStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.secondary,
}));
const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.caption,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const getInitialValues = () => {
  const user_init = {
    equipmentName: '',
    maker: '',
    tubeType: TUBETYPE_OPTION[0].value,
  };
  return user_init;
};

export default function SignalAcquisitionForm({ name, title }) {
  const dispatch = useDispatch();
  const { isOpenModalSignalAcquisition } = useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);

  const Schema = Yup.object().shape({
    equipmentName: Yup.string().max(5).required('Equipment Name is required'),
    maker: Yup.string().max(5).required('Maker is required'),
  });

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
      const newData = {
        site: data.site,
        unit: data.unit,
      };
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

  return (
    <>
      <Button variant="outlined" onClick={handleAddInfo} sx={{ height: '150px', width: '150px', borderRadius: '50%' }}>
        Signal Acquisition
      </Button>

      <DialogAnimate open={isOpenModalSignalAcquisition} onClose={handleCloseModal}>
        <DialogTitle sx={{ justifyContent: 'center', display: 'flex' }}>Signal Acquisition Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="row">
            <Stack spacing={3} sx={{ p: 3 }}>
              <TitleStyle>Object Specification</TitleStyle>
              <RHFTextField name="equipmentName" label="Equipment Name" />
              <RHFTextField name="maker" label="Maker" />
              <div>
                <LabelStyle>Tube Type</LabelStyle>
                <RHFRadioGroup name="tubeType" options={TUBETYPE_OPTION} />
              </div>
            </Stack>
            <Stack spacing={3} sx={{ p: 3 }}>
              <TitleStyle>Tube Test Quantity</TitleStyle>
            </Stack>
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
