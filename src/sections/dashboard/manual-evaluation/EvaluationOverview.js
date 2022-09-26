import PropTypes from 'prop-types';
import merge from 'lodash/merge';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Card, CardHeader } from '@mui/material';
// utils
import { fNumber } from '../../../utils/formatNumber';
// components
import ReactApexChart, { BaseOptionChart } from '../../../components/chart';

// ----------------------------------------------------------------------

const CHART_HEIGHT = 372;
const LEGEND_HEIGHT = 72;

const ChartWrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(5),
  '& .apexcharts-canvas svg': { height: CHART_HEIGHT },
  '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
    overflow: 'visible',
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    alignContent: 'center',
    position: 'relative !important',
    borderTop: `solid 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------

export default function EvaluationOverview({ title, subheader, chartColors, chartData, ...other }) {
  const theme = useTheme();

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartContents = chartData.map((i) => i.contents);

  // for (let i = 0; i < chartContents.length; i++) {
  //   for (let j = 0; j < chartContents[i].length; j++) {
  //     console.log(chartContents[i][j].id);
  //   }
  // }

  const chartOptions = merge(BaseOptionChart(), {
    colors: chartColors,
    labels: chartLabels,
    stroke: { colors: [theme.palette.background.paper] },

    legend: { floating: true, horizontalAlign: 'center' },
    dataLabels: { enabled: true, dropShadow: { enabled: false } }, // percent
    tooltip: {
      fillSeriesColor: false,

      y: {
        formatter: (value, chartSeries, index) => {
          let contents = chartData[chartSeries.dataPointIndex].contents;
          let list = [];
          contents.map((i) => list.push('<span>' + i.id + ' : ' + i.count + '</span>'));

          return list;
          // return contents[index];
        },
        // `${chartContents[0][0].id}`,
        title: {
          formatter: (seriesName) => `<div> ${seriesName} </div>`,
        },
      },
    },
    plotOptions: {
      pie: { donut: { labels: { show: false } } }, // total
    },
    chart: {},
    noData: {
      text: 'Loading...',
    },
    textAnchor: 'middle',
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <ChartWrapperStyle dir="ltr">
        <ReactApexChart type="pie" series={chartSeries} options={chartOptions} height={280} />
      </ChartWrapperStyle>
    </Card>
  );
}
