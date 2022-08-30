// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";
import Title from "src/components/Title";

AutoResult.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoResult() {
  const { user } = useAuth();
  return (
    <Page title="자동평가결과">
      <Container>
        <Title
          heading="Analysis Result Verification"
          desc="자동평가 결과를 확인하세요"
        />
      </Container>
    </Page>
  );
}
