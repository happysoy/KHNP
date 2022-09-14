// @mui
import { Container, Grid } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import UserForm from 'src/sections/dashboard/auto-evaluation/UserForm';
import EquipmentForm from 'src/sections/dashboard/auto-evaluation/EquipmentForm';

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
        </Grid>
      </Container>
    </Page>
  );
}
