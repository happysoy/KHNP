// @mui
import { Container, Box } from "@mui/material";
// layouts
import Layout from "src/layouts";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

AutoSignal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function AutoSignal() {
  const { user } = useAuth();
  return (
    <Page title="자동신호수집">
      <Container maxWidth="lg">
        <Title
          heading="자동 신호 수집 모드"
          desc="지동으로 신호를 수집하세요"
        />
        <Box width="700px">
          <img
            src="http://ec2-3-35-235-172.ap-northeast-2.compute.amazonaws.com/img/1.png"
            alt="자동신호수집모드"
          />
        </Box>
      </Container>
    </Page>
  );
}
