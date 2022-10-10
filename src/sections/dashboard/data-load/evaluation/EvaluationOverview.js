import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardHeader, Box } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { calcLength } from 'framer-motion';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const CHART_HEIGHT = 350;
const LEGEND_HEIGHT = 72;

const WrapperStyle = styled('div')(({ theme }) => ({
  height: CHART_HEIGHT,
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

export default function EvaluationOverview({ title, chartData, ...other }) {
  const canvasEl = useRef(null);

  const label = chartData.map((i) => i.label);
  const value = chartData.map((i) => i.value);
  const content = chartData.map((i) => i.contents);

  useEffect(() => {
    const mydiv = canvasEl.current.getContext('2d');
    console.log(mydiv);
    const data = {
      labels: label,
      datasets: [
        {
          label: 'My First Dataset',
          data: value,
          fill: true,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          // borderWidth: 2,
          // lineTension: 0.2,
          // pointRadius: 3,
          offset: 10,
          cutout: '45%',
        },
      ],
    };

    const alwaysShowTooltip = {
      ID: 'alwaysShowTooltip',
      afterDraw(chart, args, options) {
        const { ctx } = chart;
        ctx.save();

        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
            const { x, y } = datapoint.tooltipPosition();

            // console.log(chart.data.datasets[i].data[index]);
            const text = chart.data.labels[index] + ': ' + chart.data.datasets[i].data[index];
            const textWidth = ctx.measureText(text).width;
            ctx.fillStyle = 'rgba(0,0,0,0.8)';
            ctx.fillRect(x - (textWidth + 10) / 2, y - 25, textWidth + 10, 20);

            // triangle
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 5, y - 5);
            ctx.lineTo(x + 5, y - 5);
            ctx.fill();
            ctx.restore();

            // text
            ctx.font = '12px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(text, x - textWidth / 2, y - 11);
            ctx.restore();
          });
        });
      },
    };

    const doughnutLabelsLine = {
      ID: 'doughnutLablesLine',
      afterDraw(chart, args, options) {
        const {
          ctx,
          chartArea: { top, bottom, left, right, width, height },
        } = chart;

        chart.data.datasets.forEach((dataset, i) => {
          chart.getDatasetMeta(i).data.forEach((datapoint, index) => {
            const { x, y } = datapoint.tooltipPosition();
            // ctx.fillStyle = dataset.borderColor[index];
            // ctx.fill();

            // draw line
            const halfWidth = width / 2;
            const halfHeight = height / 2.5;

            const xLine = x >= halfWidth ? x + 50 : x - 50;
            const yLine = y >= halfHeight ? y + 50 : y - 50;
            const extraLine = x >= halfWidth ? 80 : -50;

            // line
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(xLine, yLine);
            ctx.lineTo(xLine + extraLine, yLine);
            ctx.strokeStyle = dataset.borderColor[index];
            ctx.stroke();

            // text
            const textWidth = ctx.measureText(chart.data.labels[index]).width;
            ctx.font = 'bold 14px Arial';
            // const text = chart.data.labels[index] + ': ' + chart.data.datasets[i].data[index];
            // control the position
            const textPosition = x >= halfWidth ? 'left' : 'right';
            const plusFivePx = x >= halfWidth ? 10 : -10;
            ctx.textAlign = textPosition;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = dataset.borderColor[index];
            ctx.fillText(chart.data.labels[index], xLine + extraLine + plusFivePx, yLine);
            const contents = content[index];
            let nextLine = 20;
            contents.map((i) => {
              ctx.fillText(`${i.id} : ${i.count}`, xLine + extraLine + plusFivePx, yLine + nextLine);
              nextLine += 20;
            });
          });
        });
      },
    };

    const config = {
      type: 'doughnut',
      data: data,
      options: {
        layout: {
          // margin: 100,
          padding: 70,
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          datalabels: {
            formatter: (value, context) => {
              return `${value} %`;
              // return `${context.chart.data.datasets[0].data[context.dataIndex]} %`;
            },
            font: {
              weight: 'bold',
              size: 16,
            },
            color: '#333333',
          },
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
        },
      },
      plugins: [doughnutLabelsLine, ChartDataLabels],
    };

    const myLineChart = new Chart(mydiv, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '500px', marginTop: '-50px', marginBottom: '50px' }}>
      <canvas id="myChart" ref={canvasEl} />
    </div>
  );
}
