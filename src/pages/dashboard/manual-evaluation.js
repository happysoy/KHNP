import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '../../redux/store';
// @mui
import { Container, Grid } from '@mui/material';
// layouts
import Layout from '../../layouts';
// components
import Page from '../../components/Page';
import Title from '../../components/Title';
import DataSelectForm from '../../sections/dashboard/manual-evaluation/DataSelectForm';
import StandardLissajous from 'src/sections/dashboard/manual-evaluation/StandardLissajous';
import ChannelLissajous from 'src/sections/dashboard/manual-evaluation/ChannelLissajous';
// redux
import { getDatas } from '../../redux/slices/data';

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluation() {
  const dispatch = useDispatch();

  const { graphDatas, isLoading } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title heading="Analysis Result Verification" desc="수동평가에 대한 설명" />
        <DataSelectForm />
        <StandardLissajous
          title="Analyze"
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
          sx={{ mt: 4, justifyContent: 'center', display: 'flex' }}
        />
        <Grid container spacing={3}>
          <Grid item md={6} sx={{ justifyContent: 'center', display: 'flex' }}>
            <ChannelLissajous
              chartData={[
                {
                  year: 'CH1',
                },
                { year: 'CH2' },
                { year: 'CH3' },
                { year: 'CH4' },
                { year: 'CH5' },
                { year: 'CH6' },
                { year: 'CH7' },
                { year: 'CH8' },
              ]}
            />
          </Grid>
          <Grid item md={6} sx={{ justifyContent: 'center', display: 'flex' }}>
            <ChannelLissajous
              chartData={[
                {
                  year: 'CH1',
                },
                { year: 'CH2' },
                { year: 'CH3' },
                { year: 'CH4' },
                { year: 'CH5' },
                { year: 'CH6' },
                { year: 'CH7' },
                { year: 'CH8' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
