// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
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
        <div>데이터 로드</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
