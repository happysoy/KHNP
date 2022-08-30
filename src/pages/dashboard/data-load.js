// @mui
import {
  Container,
  Card,
  TablePagination,
  TableContainer,
  Table,
  TableBody,
} from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";
import { DataTableToolbar } from "src/sections/dashboard/data-load";
import { useState } from "react";
import Scrollbar from "src/components/Scrollbar";
import { TableHeadCustom, TableSkeleton } from "src/components/table";

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
  const [filterName, setFilterName] = useState("");
  const handleFilterName = (filterName) => {
    setFilterName(filterName);
  };

  return (
    <Page title="데이터로드">
      <Container>
        {/* <Title heading="Header Setting" desc="Manage the data by upload" /> */}
        <Title heading="Data Load" desc="Manage the data by upload" />

        <Card>
          <DataTableToolbar
            filterName={filterName}
            onFilterName={handleFilterName}
          />
          <Scrollbar>
            <TableContainer>
              <Table size={"medium"}>
                <TableHeadCustom headLabel={TABLE_HEAD} />

                {/* <TableBody> */}
                {/* <TableSkeleton /> */}
                {/* <ProductTableRow/> */}
                {/* </TableBody> */}
              </Table>
            </TableContainer>
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
