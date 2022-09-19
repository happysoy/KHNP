import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { alpha, useTheme, styled } from '@mui/material/styles';

import { Typography, Box, Button, Card, DialogActions, DialogTitle, Stack } from '@mui/material';
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
import useTableAction from 'src/hooks/useTableAction';

const getInitialValues = () => {
  const userInit = {
    company: 'KHNP',
    site: '',
    unit: '',
  };
  return userInit;
};

export default function UserForm({ name, title, savedDatasECT, userData }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { isOpenModalUser, toggleUser } = useSelector((state) => state.testInformation);
  const [form, setForm] = useState(null);
  const { onChangeUser } = useTableAction();
  const [clear, setClear] = useState(false);

  const IconWrapperStyle = styled('div', {
    shouldForwardProp: (prop) => prop !== 'toggleUser',
  })(({ toggleUser, theme }) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '75%',
    alignItems: 'center',
    width: theme.spacing(15),
    justifyContent: 'center',
    height: theme.spacing(15),
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main,
    // backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
    ...(toggleUser && {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.text.secondary,
      // backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
    }),
  }));

  // const isComplete = false;
  // const [toggle, setToggle] = useState(isComplete);

  const Schema = Yup.object().shape({
    site: Yup.string().required('Site is required'),
    unit: Yup.string().required('Unit is required'),
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
      onChangeUser(data);
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

  useEffect(() => {
    if (userData !== null) {
      reset({
        company: userData['company'],
        site: userData['site'],
        unit: userData['unit'],
      });
    }
  }, [isOpenModalUser]);

  useEffect(() => {
    if (clear) {
      reset({
        company: '',
        site: '',
        unit: '',
      });
    }
  }, [clear]);

  return (
    <>
      <Button
        color="primary"
        variant={toggleUser ? 'contained' : 'outlined'}
        onClick={() => {
          handleAddInfo();
        }}
        // color={toggleUser ? 'primary' : 'contained'}
        sx={{ height: '150px', width: '150px', borderRadius: '50%' }}
      >
        User
      </Button>
      {/* <Box sx={{ my: 5, width: '200px', textAlign: 'center' }}>
        <Button
          onClick={() => {
            handleAddInfo();
          }}
        >
          <IconWrapperStyle toggleUser={toggleUser}>
            <Iconify icon="bx:user" width={36} height={36} />
          </IconWrapperStyle>
        </Button>
        <Typography variant="subtitle1" gutterBottom>
          User
        </Typography>
      </Box> */}

      <DialogAnimate open={isOpenModalUser} onClose={handleCloseModal}>
        <DialogTitle>User Information</DialogTitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3} sx={{ p: 3 }}>
            <RHFTextField name="company" label="Company" />
            <RHFTextField name="site" label="Site" />
            <RHFTextField name="unit" label="Unit" />
          </Stack>

          <DialogActions>
            <Button
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} onClick={() => setClear(!clear)} />}
              variant="outlined"
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
