// @mui
import { Container, Grid, Stack, ButtonBase } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import EvaluationOverview from '../../../../sections/dashboard/manual-evaluation/EvaluationOverview';
import EvaluationDetail from 'src/sections/dashboard/manual-evaluation/EvaluationDetail';

Evaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Evaluation() {
  const theme = useTheme();
  return (
    <Page title="데이터로드">
      <Container maxWidth="lg">
        <Title heading="자동 평가 결과" desc="자동평가에 대한 설명" />
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <EvaluationOverview
              title="Overview"
              chartData={[
                {
                  label: '지시',
                  contents: [
                    { id: 'IDI', count: 2 },
                    { id: 'ODI', count: 4 },
                  ],
                  value: 10,
                },
                {
                  label: 'Error',
                  contents: [{ id: 'ERROR', count: 2 }],
                  value: 10,
                },
                {
                  label: '검사 불가',
                  contents: [{ id: 'OBD', count: 2 }],
                  value: 5,
                },
                {
                  label: '관막음 (권고)',
                  contents: [
                    { id: 'ODI', count: 2 },
                    { id: 'IDI', count: 4 },
                  ],
                  value: 20,
                },
                {
                  label: '왜곡 신호',
                  contents: [
                    { id: 'DFS', count: 2 },
                    { id: 'DSS', count: 4 },
                    { id: 'ADS', count: 4 },
                  ],
                  value: 5,
                },
                {
                  label: '내경축소지시',
                  contents: [
                    { id: 'DNT', count: 2 },
                    { id: 'DNG', count: 4 },
                  ],
                  value: 30,
                },
                {
                  label: '결함 없음',
                  contents: [{ id: 'NDD', count: 2 }],
                  value: 20,
                },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.primary.dark,
                theme.palette.chart.blue[0],
                theme.palette.chart.blue[1],
                theme.palette.chart.violet[0],
                theme.palette.chart.violet[1],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>
          <Grid item lg={4}>
            <EvaluationDetail />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
