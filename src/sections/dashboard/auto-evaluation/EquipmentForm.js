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
import { openModalEquipment, closeModalEquipment } from '../../../redux/slices/test-information';

// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFRadioGroup, RHFTextField } from '../../../components/hook-form';
import Iconify from '../../../components/Iconify';
//sections
import AddDeleteTable from './add-delete-table/AddDeleteTable';
import RHFTable from 'src/components/hook-form/RHFTable';
import useTableAction from 'src/hooks/useTableAction';
import { equipmentObject } from './add-delete-table/utils';

const TUBETYPE_OPTION = [
  { label: 'Straight', value: 'Straight' },
  { label: 'U-bend', value: 'U-bend' },
  { label: 'Vertical', value: 'Vertical' },
  { label: 'Horizontal', value: 'Horizontal' },
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
    tubeType: TUBETYPE_OPTION[0].value,
  };
  return user_init;
};

export default function EquipmentForm({ parseECT, name, title }) {
  const dispatch = useDispatch();

  const { savedDatasECT, isOpenModalEquipment, toggleEquipment } = useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);
  const { onChangeEquipment } = useTableAction();
  const methods = useForm({
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
      onChangeEquipment(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalEquipment());
  };
  const handleCloseModal = () => {
    dispatch(closeModalEquipment());
  };
  useEffect(() => {
    if (parseECT) {
      const { tubeType } = parseECT.equipmentData;
      let index = -1;
      TUBETYPE_OPTION.find((item) => {
        index++;
        return item.label === tubeType;
      });
      reset({
        tubeType: TUBETYPE_OPTION[index].value,
      });
    }
  }, [isOpenModalEquipment]);

  return (
    <>
      <Button
        variant={toggleEquipment ? 'contained' : 'outlined'}
        onClick={handleAddInfo}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        Equipment
      </Button>

      <DialogAnimate open={isOpenModalEquipment} onClose={handleCloseModal}>
        <DialogTitle sx={{ justifyContent: 'center', display: 'flex' }}>Equipment Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column">
            <Stack spacing={3} sx={{ p: 3 }}>
              <TitleStyle>Object Specification</TitleStyle>
              {/* <RHFTextField name="equipmentName" label="Equipment Name" />
              <RHFTextField name="maker" label="Maker" /> */}
              <div>
                <LabelStyle>Tube Type</LabelStyle>
                <RHFRadioGroup name="tubeType" options={TUBETYPE_OPTION} />
              </div>
              <RHFTable name="equipmentObject" talbeData={equipmentObject} />
            </Stack>
            <Stack spacing={3} sx={{ p: 3 }}>
              <TitleStyle>Tube Test Quantity</TitleStyle>
              {/* <RHFTable name="table" /> */}
              <RHFTable name="equipmentTube" />
            </Stack>
          </Stack>

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
