// @mui
import { Container, Box, Card, Tabs, Tab, Divider, Grid } from "@mui/material";
// layouts
import Layout from "src/layouts";
// hooks
import useTabs from "src/hooks/useTabs";
// components
import Title from "src/components/Title";
import Page from "src/components/Page";
import useAuth from "src/hooks/useAuth";

AutoSignal.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

const STATUS_OPTIONS = ["조인트", "태스크"];

export default function AutoSignal() {
  const { currentTab: filterStatus, onChangeTab: onChangeFilterStatus } =
    useTabs("조인트");

  return (
    <Page title="자동신호수집">
      <Container maxWidth="lg">
        <Title
          heading="자동 신호 수집 모드"
          desc="지동으로 신호를 수집하세요"
        />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7}>
            <img
              src="http://ec2-3-35-235-172.ap-northeast-2.compute.amazonaws.com/img/1.png"
              alt="자동신호수집모드"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={5}>
            <Card>
              <Tabs
                allowScrollButtonsMobile
                variant="scrollable"
                scrollButtons="auto"
                value={filterStatus}
                onChange={onChangeFilterStatus}
                sx={{
                  px: 2,
                  bgcolor: "background.neutral",
                }}
              >
                {STATUS_OPTIONS.map((tab) => (
                  <Tab
                    disableRipple
                    key={tab}
                    label={tab}
                    value={tab}
                    sx={{
                      width: "44%",
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  />
                ))}
              </Tabs>

              <Divider />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
