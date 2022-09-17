import NextLink from 'next/link';
// @mui
import { Stack, Button, Container, Grid } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import UserForm from 'src/sections/dashboard/auto-evaluation/UserForm';
import SignalAcquisitionForm from 'src/sections/dashboard/auto-evaluation/SignalAcquisition';
import EquipmentForm from 'src/sections/dashboard/auto-evaluation/EquipmentForm';
import TestInstrumentForm from 'src/sections/dashboard/auto-evaluation/TestInstrumentForm';
// redux
import { useSelector } from '../../../../redux/store';

ECT.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ECT() {
  const { toggleUser, toggleEquipment, toggleSignalAcquisition, toggleTestInstrument } = useSelector(
    (state) => state.testInformation
  );
  return (
    <Page title="자동평가">
      <Container maxWidth="lg">
        <Title heading="Test Information" desc="ECT" />
        <Grid container spacing={5}>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <UserForm />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <EquipmentForm />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <SignalAcquisitionForm />
          </Grid>
          <Grid item sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TestInstrumentForm />
          </Grid>

          <Grid item sm={12} sx={{ mt: 20, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Stack direction="row" spacing={3}>
              <NextLink href="/dashboard/auto-evaluation" passHref>
                <Button fullWidth variant="outlined" size="large">
                  BACK
                </Button>
              </NextLink>
              <Button
                disabled={!toggleUser || !toggleEquipment || !toggleSignalAcquisition || !toggleTestInstrument}
                fullWidth
                variant="outlined"
                size="large"
              >
                SAVE
              </Button>
              <Button
                fullWidth
                disabled={!toggleUser || !toggleEquipment || !toggleSignalAcquisition || !toggleTestInstrument}
                variant="outlined"
                size="large"
              >
                COMPLETE
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
