// @mui
import { Container, Grid, Stack } from '@mui/material';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import PageTransition from '../../../../sections/dashboard/auto-evaluation/PageTransition';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect } from 'react';
import TSPForm from 'src/sections/dashboard/data-load/analysis-setting/TSPForm';
import DEFECTForm from 'src/sections/dashboard/data-load/analysis-setting/DEFECTForm';
import useTableAction from 'src/hooks/useTableAction';

AnalysisSetting.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AnalysisSetting() {
  const dispatch = useDispatch();
  const { tableData, onChangeTableData } = useTableAction();
  console.log(tableData);
  return (
    <Page title="데이터로드">
      <Container maxWidth="lg">
        <Title heading="Analysis Setting" desc="자동평가에 대한 설명" />
        <Grid container spacing={5}>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TSPForm tableData={tableData} onChangeTableData={onChangeTableData} />
          </Grid>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <DEFECTForm tableData={tableData} onChangeTableData={onChangeTableData} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
