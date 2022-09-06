// @mui
import { Container, Grid } from '@mui/material';
// layouts
import Layout from '../../layouts';
// sectiosn
import LongGraph from '../../sections/dashboard/manual-evaluation/LongGraph';
import SmallGraph1 from '../../sections/dashboard/manual-evaluation/SmallGraph1';
import SmallGraph3 from '../../sections/dashboard/manual-evaluation/SmallGraph3';
import SmallGraph5 from '../../sections/dashboard/manual-evaluation/SmallGraph5';
import SmallGraph7 from '../../sections/dashboard/manual-evaluation/SmallGraph7';
// components
import Page from '../../components/Page';
import useAuth from '../../hooks/useAuth';
import Title from '../../components/Title';
import PlotlyComponent from '../../sections/dashboard/manual-evaluation/PlotlyComponent';
import DataSelectForm from '../../sections/dashboard/manual-evaluation/DataSelectForm';

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluation() {
  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title heading="Analysis Result Verification" desc="수동평가에 대한 설명" />
        <DataSelectForm />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} sx={{ justifyContent: 'center', display: 'flex' }}>
            <LongGraph />
          </Grid>
          <Grid item md={12} sx={{ justifyContent: 'center', display: 'flex' }}>
            <SmallGraph1 />
            <SmallGraph3 />
          </Grid>
          {/* <Grid item md={12} sx={{ mt: '-80px', justifyContent: 'center', display: 'flex' }}>
            <SmallGraph5 />
            <SmallGraph7 />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
