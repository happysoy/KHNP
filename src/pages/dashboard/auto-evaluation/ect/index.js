import NextLink from 'next/link';

// @mui
import { LoadingButton } from '@mui/lab';
import { Stack, Button, Container, Grid } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import UserForm from 'src/sections/dashboard/auto-evaluation/UserForm';
import SignalAcquisitionForm from 'src/sections/dashboard/auto-evaluation/SignalAcquisitionForm';
import EquipmentForm from 'src/sections/dashboard/auto-evaluation/EquipmentForm';
import TestInstrumentForm from 'src/sections/dashboard/auto-evaluation/TestInstrumentForm';
import useTableAction from 'src/hooks/useTableAction';
import { getData, insertData } from 'src/redux/slices/test-information';
// redux
import { useDispatch, useSelector } from '../../../../redux/store';
import { useEffect, useState } from 'react';

ECT.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ECT() {
  const { savedDatasECT, toggleUser, toggleEquipment, toggleSignalAcquisition, toggleTestInstrument } = useSelector(
    (state) => state.testInformation
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const { userData, equipmentData, signalAcquisitionData, testInstrumentData } = useTableAction();
  // console.log('Temp equipment', equipmentData);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch(insertData({ userData, equipmentData, signalAcquisitionData, testInstrumentData }));
      setLoading(false);
      setComplete(true);
    } catch (error) {
      console.error(error);
    }
  };
  let parseECT;
  if (savedDatasECT.length !== 0) {
    parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
  }

  return (
    <Page title="자동평가">
      <Container maxWidth="lg">
        <Title heading="Test Information" desc="ECT" />
        <Grid container spacing={5}>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <UserForm parseECT={parseECT} />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <EquipmentForm parseECT={parseECT} />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SignalAcquisitionForm parseECT={parseECT} />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TestInstrumentForm />
          </Grid>

          <Grid item sm={12} sx={{ mt: 7, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Stack direction="row" spacing={3}>
              <NextLink href="/dashboard/auto-evaluation" passHref>
                <Button fullWidth variant="outlined" size="large">
                  BACK
                </Button>
              </NextLink>
              <LoadingButton
                loading={loading}
                disabled={!toggleUser || !toggleEquipment || !toggleSignalAcquisition || !toggleTestInstrument}
                fullWidth
                variant={complete ? 'contained' : 'outlined'}
                size="large"
                onClick={onSubmit}
              >
                SAVE
              </LoadingButton>
              <NextLink href="/dashboard/auto-evaluation" passHref>
                <Button fullWidth disabled={!complete} variant="outlined" size="large">
                  COMPLETE
                </Button>
              </NextLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
