// @mui
import { Container, Grid, Stack } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Title from '../../../components/Title';
import Page from '../../../components/Page';
// sections
import PageTransition from '../../../sections/dashboard/auto-evaluation/PageTransition';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect } from 'react';
import { getData } from 'src/redux/slices/test-information';
import useAuth from 'src/hooks/useAuth';

AutoEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoEvaluation() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // ECT getData
  const obj = {
    userName: user?.displayName,
  };
  useEffect(() => {
    dispatch(getData(obj));
  }, [dispatch]);

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
        </Grid>
      </Container>
    </Page>
  );
}
