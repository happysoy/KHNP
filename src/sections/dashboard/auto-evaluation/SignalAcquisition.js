import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, Button, DialogTitle } from '@mui/material';
// redux
import { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { openModalSignalAcquisition, closeModalSignalAcquisition } from '../../../redux/slices/test-information';

// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFTextField } from '../../../components/hook-form';
// sections
import AddDeleteTable from './add-delete-table/AddDeleteTable';

const getInitialValues = () => {
  const user_init = {
    site: '',
    unit: '',
  };
  return user_init;
};

export default function SignalAcquisitionForm({ name, title }) {
  const dispatch = useDispatch();
  const { isOpenModalSignalAcquisition } = useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);

  const Schema = Yup.object().shape({
    site: Yup.string().max(5).required('Site is required'),
    unit: Yup.string().max(5).required('Unit is required'),
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
        <DialogTitle> Signal Acquisition Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="site" label="Site" />
            <RHFTextField name="unit" label="Unit" />
          </Stack>
          <AddDeleteTable type="signalAcquisition" />
        </FormProvider>
      </DialogAnimate>
    </>
  );
}
