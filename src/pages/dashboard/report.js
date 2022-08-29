// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
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
        <div>Report</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
