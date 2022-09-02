// @mui
import { Container } from "@mui/material";
// layouts
import Layout from "../../layouts";
// components
import Title from "../../components/Title";
import Page from "../../components/Page";
import useAuth from "../../hooks/useAuth";

AutoEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoEvaluation() {
  const { user } = useAuth();
  return (
    <Page title="자동평가">
      <Container maxWidth="lg">
        <Title heading="Analysis Setting" desc="자동평가에 대한 설명" />
      </Container>
    </Page>
  );
}
