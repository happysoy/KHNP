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
import EvaluationOverview from '../../../../sections/dashboard/data-load/evaluation/EvaluationOverview';
import EvaluationDetail from 'src/sections/dashboard/data-load/evaluation/EvaluationDetail';
import EvaluationSummary from '../../../../sections/dashboard/data-load/evaluation/EvaluationSummary';
import { useDispatch, useSelector } from 'src/redux/store';
import useAuth from 'src/hooks/useAuth';
import { useEffect } from 'react';
import { getData } from 'src/redux/slices/test-information';
import EvaluationDefectDetail from 'src/sections/dashboard/data-load/evaluation/EvaluationDefectDetail';

Evaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Evaluation() {
  const theme = useTheme();

  const { savedDatasECT } = useSelector((state) => state.testInformation);
  let parseECT;
  if (savedDatasECT.length !== 0) {
    parseECT = JSON.parse(savedDatasECT[0]?.jdoc);
  }

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
              // chartColors={[
              //   theme.palette.primary.dark,
              //   theme.palette.error.main,
              //   theme.palette.chart.blue[0],
              //   theme.palette.chart.blue[1],
              //   theme.palette.chart.red[0],
              //   theme.palette.chart.violet[1],
              //   theme.palette.success.main,
              // ]}
            />
          </Grid>
          <Grid item lg={4}>
            <EvaluationDetail />
          </Grid>
          <Grid item lg={8}>
            <EvaluationDefectDetail title="Defect Detail" parseECT={parseECT} />
          </Grid>
          <Grid item lg={8}>
            <EvaluationSummary title="Test Result Summary" parseECT={parseECT} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
