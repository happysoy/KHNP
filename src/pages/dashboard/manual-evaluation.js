// @mui
import { Container, Grid } from "@mui/material";
// layouts
import Layout from "../../layouts";
// components
import Page from "../../components/Page";
import useAuth from "../../hooks/useAuth";
import Title from "../../components/Title";
import PlotlyComponent from "../../sections/dashboard/manual-evaluation/PlotlyComponent";

ManualEvaluation.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default function ManualEvaluation() {
  return (
    <Page title="수동평가">
      <Container maxWidth="xl">
        <Title
          heading="Analysis Result Verification"
          desc="수동평가에 대한 설명"
        />
        <Grid container spacing={3}>
          {/* <Grid item xs={12} sm={6} md={3}>
            <Lissajous
              chartLabels={["0", "5k", "10k"]}
              chartData={[
                {
                  year: "channel_1",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [10, 41, 35],
                    },
                  ],
                },
                {
                  year: "channel_2",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [148, 91, 69],
                    },
                  ],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Lissajous
              chartLabels={["0", "5k", "10k"]}
              chartData={[
                {
                  year: "channel_1",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [10, 41, 35],
                    },
                  ],
                },
                {
                  year: "channel_2",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [148, 91, 69],
                    },
                  ],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Lissajous
              chartLabels={["0", "5k", "10k"]}
              chartData={[
                {
                  year: "channel_1",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [10, 41, 35],
                    },
                  ],
                },
                {
                  year: "channel_2",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [148, 91, 69],
                    },
                  ],
                },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Lissajous
              chartLabels={["0", "5k", "10k"]}
              chartData={[
                {
                  year: "channel_1",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [10, 41, 35],
                    },
                  ],
                },
                {
                  year: "channel_2",
                  data: [
                    {
                      name: "lissagous_chart",
                      data: [35, 41, 10],
                    },
                  ],
                },
              ]}
            />
          </Grid> */}

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <PlotlyComponent />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
