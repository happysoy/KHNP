import { useEffect, useState } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @mui
import { Box, Button, Container, Card, TablePagination, TableContainer, Table, TableBody } from '@mui/material';
// layouts
import Layout from '../../../layouts';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { deleteData, getDatas } from '../../../redux/slices/data';
// hooks
import useTable, { getComparator, emptyRows } from '../../../hooks/useTable';
// components
import Title from '../../../components/Title';
import Page from '../../../components/Page';

import Scrollbar from '../../../components/Scrollbar';
import { TableHeadCustom, TableSelectedActions, TableSkeleton } from '../../../components/table';
// sections
import { DataTableRow, DataTableToolbar } from '../../../sections/dashboard/data-load';
import Iconify from '../../../components/Iconify';

DataLoad.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const TABLE_HEAD = [
  { id: 'checkbox' },
  { id: 'id', label: 'No.', align: 'left' },
  { id: 'fileName', label: 'File Name', align: 'left' },
  { id: 'directory', label: 'Directory', align: 'left' },
  { id: 'fileSize', label: 'File Size', align: 'left' },
  { id: 'testPeriod', label: 'Test Period', align: 'left' },
  { id: 'blank' },
];

export default function DataLoad() {
  const {
    dense,
    page,
    order,
    orderBy,
    rowsPerPage,
    setPage,
    //
    selected,
    setSelected,
    onSelectRow,
    onSelectAllRows,
    //
    onSort,
    onChangeDense,
    onChangePage,
    onChangeRowsPerPage,
  } = useTable({
    defaultOrderBy: 'createdAt',
  });

  const dispatch = useDispatch();

  // const { products, isLoading } = useSelector((state) => state.product);
  // console.log(products);
  const { datas, isLoading } = useSelector((state) => state.data);
  const [tableData, setTableData] = useState([]);
  const [filterName, setFilterName] = useState('');
  const { push } = useRouter();
  const handleFilterName = (filterName) => {
    setFilterName(filterName);
  };

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  useEffect(() => {
    if (datas.length) {
      setTableData(datas);
    }
  }, [datas]);

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const handleDeleteRow = (row) => {
    const id = row.id;
    const deleteRow = tableData.filter((row) => row.id !== id);
    setSelected([]);
    setTableData(deleteRow);
    dispatch(deleteData(row));
  };
  const handleEditRow = (row) => {
    const id = row.id;
    push(PATH_DASHBOARD.dataLoad.edit(id));
  };
  return (
    <Page title="데이터로드">
      <Container maxWidth="xl">
        <Title
          heading="Data Load"
          desc="업로드된 데이터를 확인하세요"
          action={
            <NextLink href={PATH_DASHBOARD.dataLoad.new} passHref>
              <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
                UPLOAD
              </Button>
            </NextLink>
          }
        />

        <Card>
          <DataTableToolbar filterName={filterName} onFilterName={handleFilterName} />
          <Scrollbar>
            <TableContainer>
              {/* <TableSelectedActions /> */}

              <Table size={'medium'}>
                <TableHeadCustom headLabel={TABLE_HEAD} />
                <TableBody>
                  {(isLoading ? tableData : dataFiltered)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, index) => (
                      <DataTableRow
                        key={row.id}
                        row={row}
                        // selected={selected.includes(row.id)}
                        // onSelectRow={() => onSelectRow(row.id)}
                        onDeleteRow={() => handleDeleteRow(row)}
                        onEditRow={() => handleEditRow(row)}
                      />
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Scrollbar>
          <Box>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataFiltered.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={onChangePage}
              onRowsPerPageChange={onChangeRowsPerPage}
            />
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

function applySortFilter({ tableData, comparator, filterName }) {
  const stabilizedThis = tableData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  tableData = stabilizedThis.map((el) => el[0]);

  if (filterName) {
    tableData = tableData.filter((item) => item.fileName.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  return tableData;
}
