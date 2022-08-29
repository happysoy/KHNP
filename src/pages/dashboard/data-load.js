// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

DataLoad.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function DataLoad() {
  const { user } = useAuth();
  return (
    <Page title="데이터로드">
      <Container>
        <Title heading="Header Setting" desc="Manage the data by upload" />
        <Title heading="Data Load" desc="Manage the data by upload" />
      </Container>
    </Page>
  );
}
