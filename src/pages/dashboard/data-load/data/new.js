// @ mui
import { Container } from "@mui/material";
// components
import Title from "../../../../components/Title";
// sections
import DataNewEditForm from "../../../../sections/dashboard/data-load/DataNewEditForm";

//
import Page from "../../../../components/Page";
import Layout from "../../../../layouts";

DataLoadNew.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function DataLoadNew() {
  return (
    <Page title="UPLOAD">
      <Container>
        <Title heading="DATA UPLOAD" />
        <DataNewEditForm />
      </Container>
    </Page>
  );
}
