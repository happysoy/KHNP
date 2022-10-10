import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from '../../../redux/store';
// @mui
import ErrorDataTableRow from 'src/sections/dashboard/manual-evaluation/ErrorDataTableRow';

import { Card, Container, Grid, TableBody, Table, TableContainer } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Title from '../../../components/Title';
// redux
import { clearGraphDatas, getDatas, getErrorGraphList, startDrawing } from '../../../redux/slices/data';
import Scrollbar from 'src/components/Scrollbar';
import { TableHeadManual, TableSelectedActions } from 'src/components/table';
import { FormProvider } from 'src/components/hook-form';
import { LoadingButton } from '@mui/lab';
import useTable, { getComparator } from 'src/hooks/useTable';
import { PATH_DASHBOARD } from 'src/routes/paths';
import { useRouter } from 'next/router';
import { LinkProps } from 'next/link';
import { useSnackbar } from 'notistack';
import ManualTableToolbar from 'src/sections/dashboard/manual-evaluation/ManualTableToolbar';

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const TABLE_HEAD = [
  { id: 'id', label: 'No.', align: 'center' },
  { id: 'fileName', label: 'File Name', align: 'center' },
  { id: 'eval', label: 'Eval.', align: 'center' },
  { id: 'volts', label: 'Volts', align: 'center' },
  { id: 'deg', label: 'Deg.', align: 'center' },
  { id: 'depth', label: 'Depth', align: 'center' },
  { id: 'channel', label: 'Channel', align: 'center' },
  { id: 'location', label: 'Location', align: 'center' },
  { id: 'verification', label: 'Verification', align: 'center' },
];

export default function ManualEvaluation() {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [tableData, setTableData] = useState([]);

  const { errorDatas, isLoading } = useSelector((state) => state.data);

  useEffect(() => {
    if (errorDatas.length) {
      setTableData(errorDatas);
    }
  }, [errorDatas]);

  useEffect(() => {
    dispatch(getErrorGraphList());
    dispatch(clearGraphDatas());
  }, [dispatch]);

  const defaultValues = () => {
    const tableObj = {};
    tableData.map((data) => {
      tableObj[data.id] = false;
    });

    return tableObj;
  };

  const methods = useForm({
    defaultValues: defaultValues(),
  });
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const { selected, onSelectRow, order, orderBy, onSort } = useTable({ defaultOrderBy: 'id' });

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
  });

  const onSubmit = async (data) => {
    try {
      console.log('야호', data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('성공적으로 반영되었습니다');
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewRow = (id) => {
    push(PATH_DASHBOARD.manualEvaluation.view(id));
  };

  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title heading="Analysis Result Verification" desc="수동평가에 대한 설명" />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Card sx={{ mb: 10 }}>
            {/* <ManualTableToolbar filterName={filterName} onFilterName={handleFilterName} /> */}
            <Scrollbar>
              <TableContainer>
                {/* {selected.length > 0 && (
                  <TableSelectedActions numSelected={selected.length} rowCount={tableData.length} />
                )} */}
                <Table size="medium">
                  <TableHeadManual
                    order={order}
                    orderBy={orderBy}
                    onSort={onSort}
                    headLabel={TABLE_HEAD}
                    rowCount={tableData.length}
                    numSelected={selected.length}
                  />
                  <TableBody>
                    {tableData.map((row, index) => (
                      <ErrorDataTableRow
                        key={row.id}
                        index={index}
                        row={row}
                        selected={selected.includes(row.id)}
                        onSelectRow={() => onSelectRow(row.id)}
                        onViewRow={() => handleViewRow(row.pns + '_' + row.DEFECT_LIST)}
                      />
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Scrollbar>
          </Card>
          <Grid item sm={12} sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            {/* <NextLink href="/dashboard/data-load/analysis-setting" passHref> */}
            <LoadingButton size="large" type="submit" variant="contained" loading={isSubmitting}>
              자동평가 결과 확정
            </LoadingButton>
            {/* </NextLink> */}
          </Grid>
        </FormProvider>
      </Container>
    </Page>
  );
}

function applySortFilter({ tableData, filterName, comparator }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  // if (filterName) {
  //   tableData = tableData.filter(
  //     (item) =>
  //       item.invoiceNumber.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
  //       item.invoiceTo.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
  //   );
  // }

  // if (filterStatus !== 'all') {
  //   tableData = tableData.filter((item) => item.status === filterStatus);
  // }

  // if (filterService !== 'all') {
  //   tableData = tableData.filter((item) => item.items.some((c) => c.service === filterService));
  // }

  // if (filterStartDate && filterEndDate) {
  //   tableData = tableData.filter(
  //     (item) =>
  //       item.createDate.getTime() >= filterStartDate.getTime() && item.createDate.getTime() <= filterEndDate.getTime()
  //   );
  // }

  return tableData;
}
