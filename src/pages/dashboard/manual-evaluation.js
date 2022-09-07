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
import StandardLissajous from 'src/sections/dashboard/manual-evaluation/StandardLissajous';

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluation() {
  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title heading="Analysis Result Verification" desc="수동평가에 대한 설명" />
        <DataSelectForm />
        <StandardLissajous
          title="Analyze"
          subheader="2022.03.02 - 20.22.08.23 "
          // subheader="(+4%)  than last week"
          chartLabels={['HRT', 'Error Rates']}
          chartData={[
            {
              year: 'CH1X',
              // data: [
              //   { name: 'HRT', data: [-0.8, -0.8, -1.05, -1.06, -1.18, -1.4, -2, -2.2] },
              //   { name: 'Error Rates', data: [0.5, 0.4, 0.65, 0.76, 0.88, 1.5, 1.6, 2.0] },
              // ],
            },
            {
              year: 'CH1Y',
            },
            {
              year: 'CH2X',
            },
            {
              year: 'CH2Y',
            },
            {
              year: 'CH3X',
            },
            {
              year: 'CH3Y',
            },
          ]}
          sx={{ justifyContent: 'center', display: 'flex' }}
        />
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={12} md={12} sx={{ justifyContent: 'center', display: 'flex' }}>
            <LongGraph />
          </Grid> */}
          <Grid item md={12} sx={{ justifyContent: 'center', display: 'flex' }}>
            {/* <SmallGraph1 />
            <SmallGraph3 /> */}
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
