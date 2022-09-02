// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "../../layouts";
// components
import Title from "../../components/Title";
import Page from "../../components/Page";
import useAuth from "../../hooks/useAuth";

Report.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Report() {
  const { user } = useAuth();
  return (
    <Page title="Report">
      <Container maxWidth="lg">
        <Title heading="Analysis Setting" />
        <Title heading="평가결과 Upload" />
      </Container>
    </Page>
  );
}
