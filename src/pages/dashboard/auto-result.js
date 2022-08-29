// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

AutoResult.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoResult() {
  const { user } = useAuth();
  return (
    <Page title="자동평가결과">
      <Container>
        <div>자동평가결과</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
