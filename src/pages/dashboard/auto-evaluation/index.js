// @mui
import { Container, Grid, Stack } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Title from '../../../components/Title';
import Page from '../../../components/Page';
// sections
import AddDeleteTable from '../../../sections/dashboard/auto-evaluation/add-delete-table/row-column/AddDeleteTable';
import PageTransition from '../../../sections/dashboard/auto-evaluation/PageTransition';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect } from 'react';

AutoEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoEvaluation() {
  const dispatch = useDispatch();

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
          <Grid item xs={6} sm={6}>
            <AddDeleteTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
