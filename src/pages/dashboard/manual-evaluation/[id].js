import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '../../../redux/store';

// @mui
import ErrorDataTableRow from 'src/sections/dashboard/manual-evaluation/ErrorDataTableRow';

import { Card, Container, Grid, Button, TableBody, Table, TableContainer } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Title from '../../../components/Title';
import DataSelectForm from '../../../sections/dashboard/manual-evaluation/graph/DataSelectForm';
import StandardLissajous from 'src/sections/dashboard/manual-evaluation/graph/StandardLissajous';
import ChannelLissajous from 'src/sections/dashboard/manual-evaluation/graph/ChannelLissajous';
// redux
import { getDatas } from '../../../redux/slices/data';
import Scrollbar from 'src/components/Scrollbar';
import { TableHeadCustom } from 'src/components/table';
import { FormProvider } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
import useTable from 'src/hooks/useTable';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { useRouter } from 'next/router';
import { getGraphDatas, startDrawing } from '../../../redux/slices/data';

ManualEvaluationDetails.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluationDetails() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const { savedDatas } = useSelector((state) => state.analysisSetting);

  const { query } = useRouter();
  const { id } = query;

  useEffect(() => {
    const renew = {
      fileName: id,
      savedDatas: savedDatas[0],
    };
    dispatch(getGraphDatas(renew));
    dispatch(startDrawing());
  }, [dispatch]);

  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title heading="Analysis Result Verification" desc="수동평가에 대한 설명" />

        <Grid container spacing={3}>
          {/* <Grid item md={12}>
            <DataSelectForm />
          </Grid> */}

          <Grid item md={12} sx={{ justifyContent: 'center', display: 'flex' }}>
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
                  year: 'CH4X',
                },
                {
                  year: 'CH4Y',
                },
                {
                  year: 'CH5X',
                },
                {
                  year: 'CH5Y',
                },
                {
                  year: 'CH6X',
                },
                {
                  year: 'CH6Y',
                },
                {
                  year: 'CH7X',
                },
                {
                  year: 'CH7Y',
                },
                {
                  year: 'CH8X',
                },
                {
                  year: 'CH8Y',
                },
              ]}
              sx={{ mt: 4, justifyContent: 'center', display: 'flex' }}
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
