import NextLink from 'next/link';

// @mui
import { Container, Grid, Stack, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// layouts
import Layout from '../../../../layouts';
// components
import Title from '../../../../components/Title';
import Page from '../../../../components/Page';
// sections
import PageTransition from '../../../../sections/dashboard/auto-evaluation/PageTransition';
// redux
import { useDispatch, useSelector } from 'src/redux/store';
import { useEffect, useState } from 'react';
import TSPForm from 'src/sections/dashboard/data-load/analysis-setting/TSPForm';
import DEFECTForm from 'src/sections/dashboard/data-load/analysis-setting/DEFECTForm';
import CalCurveForm from 'src/sections/dashboard/data-load/analysis-setting/CALCURVEForm';
import useTableAction from 'src/hooks/useTableAction';
import { getData, insertData, updateData } from 'src/redux/slices/analysis-setting';
import useAuth from 'src/hooks/useAuth';

AnalysisSetting.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AnalysisSetting() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { savedDatas, toggleTSP, toggleDEFECT, toggleCALCURVE } = useSelector((state) => state.analysisSetting);
  const { tableData, onChangeTableData } = useTableAction();
  const [loading, setLoading] = useState(false);
  const [complete, setComplete] = useState(false);
  const [isModify, setIsModify] = useState(false);
  useEffect(() => {
    const obj = {
      userName: user?.displayName,
    };
    dispatch(getData(obj));
  }, [dispatch]);

  useEffect(() => {
    if (savedDatas.length !== 0) {
      setIsModify(true);
    } else {
      setIsModify(false);
    }
  }, [savedDatas]);

  const onSubmit = async () => {
    try {
      setLoading(true);
      if (isModify) {
        dispatch(updateData(tableData));
        // updateData
      } else {
        dispatch(insertData(tableData));
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
      setComplete(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Page title="데이터로드">
      <Container maxWidth="lg">
        <Title heading="Analysis Setting" desc="자동평가에 대한 설명" />
        <Grid container spacing={5}>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <TSPForm tableData={tableData} savedDatas={savedDatas} onChangeTableData={onChangeTableData} />
          </Grid>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <DEFECTForm tableData={tableData} savedDatas={savedDatas} onChangeTableData={onChangeTableData} />
          </Grid>
          <Grid item sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <CalCurveForm tableData={tableData} savedDatas={savedDatas} onChangeTableData={onChangeTableData} />
          </Grid>
          <Grid item sm={12} sx={{ mt: 20, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Stack direction="row" spacing={3}>
              <LoadingButton
                loading={loading}
                fullWidth
                disabled={isModify ? false : !toggleTSP || !toggleDEFECT || !toggleCALCURVE}
                variant={complete ? 'contained' : 'outlined'}
                size="large"
                onClick={onSubmit}
              >
                {savedDatas.length !== 0 ? 'CHANGE' : 'SAVE'}
              </LoadingButton>
              <NextLink href="/dashboard/data-load/" passHref>
                <Button fullWidth disabled={!complete} variant="outlined" size="large">
                  COMPLETE
                </Button>
              </NextLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
