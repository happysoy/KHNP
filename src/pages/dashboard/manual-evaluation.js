// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluation() {
  const { user } = useAuth();
  return (
    <Page title="수동평가">
      <Container>
        <div>수동평가</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
