// @mui
import { Container, Grid } from '@mui/material';
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

ECT.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ECT() {
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
        </Grid>
      </Container>
    </Page>
  );
}
