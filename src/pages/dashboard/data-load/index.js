import { useEffect, useState } from "react";
// next
import NextLink from "next/link";
// @mui
import {
  Box,
  Button,
  Container,
  Card,
  TablePagination,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";
// layouts
import Layout from "src/layouts";
// redux
import { dispatch, useDispatch, useSelector } from "src/redux/store";
import { getProducts } from "src/redux/slices/product";
// hooks
import useTable, { getComparator, emptyRows } from "src/hooks/useTable";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";

import Scrollbar from "src/components/Scrollbar";
import {
  TableHeadCustom,
  TableSelectedActions,
  TableSkeleton,
} from "src/components/table";
// sections
import {
  DataTableRow,
  DataTableToolbar,
} from "src/sections/dashboard/data-load";
import Iconify from "src/components/Iconify";
import { PATH_DASHBOARD } from "src/routes/paths";

DataLoad.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const TABLE_HEAD = [
  { id: "id", label: "No.", align: "left" },
  { id: "fileName", label: "File Name", align: "left" },
  { id: "directory", label: "Directory", align: "left" },
  { id: "fileSize", label: "File Size", align: "left" },
  { id: "company", label: "Company", align: "left" },
  { id: "site", label: "Site", align: "left" },
  { id: "unitNo", label: "Unit No", align: "left" },
  { id: "equipment", label: "Equipment", align: "left" },
  { id: "testPeriod", label: "Test Period", align: "left" },
  { id: "tubeSetting", label: "Tube Setting", align: "left" },
  { id: "speed", label: "Speed", align: "left" },
  { id: "detector", label: "Detector", align: "left" },
  { id: "probe", label: "Probe", align: "left" },
  { id: "" },
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
    defaultOrderBy: "createdAt",
  });

  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.product);
  const [tableData, setTableData] = useState([]);
  const [filterName, setFilterName] = useState("");

  const handleFilterName = (filterName) => {
    setFilterName(filterName);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      setTableData(products);
    }
  }, [products]);

  const dataFiltered = applySortFilter({
    tableData,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  return (
    <Page title="데이터로드">
      <Container>
        {/* <Title heading="Header Setting" desc="Manage the data by upload" /> */}
        <Title
          heading="Data Load"
          desc="Manage the data by upload"
          action={
            <NextLink href={PATH_DASHBOARD.dataLoad.new} passHref>
              <Button
                variant="contained"
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                UPLOAD
              </Button>
            </NextLink>
          }
        />

        <Card>
          <DataTableToolbar
            filterName={filterName}
            onFilterName={handleFilterName}
          />
          <Scrollbar>
            <TableContainer>
              {/* <TableSelectedActions /> */}

              <Table size={"medium"}>
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
                        // onDeleteRow={() => handleDeleteRow(row.id)}
                        // onEditRow={() => handleEditRow(row.name)}
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
    tableData = tableData.filter(
      (item) => item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return tableData;
}
