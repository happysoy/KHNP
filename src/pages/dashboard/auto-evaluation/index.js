// @mui
import { Container, Grid } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Title from '../../../components/Title';
import Page from '../../../components/Page';
// sections
import ResponseTable from '../../../sections/dashboard/auto-evaluation/response-table/ResponseTable';
import PageTransition from '../../../sections/dashboard/auto-evaluation/PageTransition';

AutoEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoEvaluation() {
  return (
    <Page title="자동평가">
      <Container maxWidth="lg">
        <Title heading="비파괴 검사 자동 평가" desc="자동평가에 대한 설명" />
        <Grid container spacing={5}>
          <Grid item xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PageTransition href="/dashboard/auto-evaluation/ect" name="ECT" imgPath="/ECT.png" imgDesc="ECT사진" />
          </Grid>
          <Grid item xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <PageTransition href="#" name="IRIS" desc="(준비중)" imgPath="/IRIS.png" imgDesc="IRIS사진" />
          </Grid>
          <Grid item xs={6} sm={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <ResponseTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
