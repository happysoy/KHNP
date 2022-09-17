import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Button, DialogActions, DialogTitle, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// redux
import { useEffect, useState } from 'react';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { openModalUser, closeModalUser } from '../../../redux/slices/test-information';
// components
import { DialogAnimate } from '../../../components/animate';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

import Iconify from '../../../components/Iconify';

const getInitialValues = () => {
  const userInit = {
    company: 'KHNP',
    site: '',
    unit: '',
  };
  return userInit;
};

export default function UserForm({ name, title }) {
  const dispatch = useDispatch();
  const { isOpenModalUser, toggleUser } = useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);
  // const isComplete = false;
  // const [toggle, setToggle] = useState(isComplete);

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
      console.log(newData);
      handleCloseModal();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddInfo = () => {
    dispatch(openModalUser());
  };
  const handleCloseModal = () => {
    dispatch(closeModalUser());
  };

  return (
    <>
      <Button
        variant={toggleUser ? 'contained' : 'outlined'}
        onClick={() => {
          handleAddInfo();
        }}
        // color={toggle ? 'primary' : 'contained'}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        User
      </Button>

      <DialogAnimate open={isOpenModalUser} onClose={handleCloseModal}>
        <DialogTitle>User Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="company" label="Company" />
            <RHFTextField name="site" label="Site" />
            <RHFTextField name="unit" label="Unit" />
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
