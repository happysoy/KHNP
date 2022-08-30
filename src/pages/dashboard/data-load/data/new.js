// @ mui
import { Container } from "@mui/material";
// components
import Title from "src/components/Title";
// sections
import DataNewEditForm from "src/sections/dashboard/data-load/DataNewEditForm";

//
import Page from "src/components/Page";
import Layout from "src/layouts";

DataLoadNew.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function DataLoadNew() {
  return (
    <Page title="UPLOAD">
      <Container>
        <Title heading="Upload your Data" />
        <DataNewEditForm />
      </Container>
    </Page>
  );
}
