// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

AutoSignal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoSignal() {
  const { user } = useAuth();
  return (
    <Page title="자동신호수집">
      <Container>
        <div>자동 신호 수집</div>
        <p>{user?.displayName}</p>
      </Container>
    </Page>
  );
}
