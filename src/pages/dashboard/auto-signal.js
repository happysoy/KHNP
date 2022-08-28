// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

autoSignal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function autoSignal() {
  const { user } = useAuth();
  return (
    <Page title="autoSignal">
      <Container>
        <div>야호</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
