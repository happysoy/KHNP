// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

Report.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function Report() {
  const { user } = useAuth();
  return (
    <Page title="Report">
      <Container>
        <Title heading="Analysis Setting" />
        <Title heading="평가결과 Upload" />
      </Container>
    </Page>
  );
}
